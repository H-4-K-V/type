'use client';

import React, { useRef } from 'react';

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';

import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

import { Bold, Italic, Strikethrough, ArrowBigUp } from 'lucide-react';
import { BubbleMenuButton } from './BubbleMenuButton';
import { DropDownMenu } from './DropDownMenu';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'type...',
        emptyNodeClass: 'is-editor-empty',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'outline-none prose max-md:px-5',
      },
    },
    immediatelyRender: false,
  });

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="editor" ref={container}>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bg-slate-100 shadow-sm flex gap-2 px-2 py-1 items-center rounded-md ">
            <DropDownMenu
              onChange={(value) => {
                if (value === 0) {
                  editor.chain().focus().setParagraph().run();
                } else {
                  editor
                    .chain()
                    .focus()
                    .toggleHeading({ level: value as Level })
                    .run();
                }
              }}
            />
            <BubbleMenuButton
              editor={editor}
              onClick={() => editor.chain().focus().toggleBold().run()}
              type="bold"
              shortcutLetter="b"
              icon={<Bold size={16} />}
            />
            <BubbleMenuButton
              editor={editor}
              onClick={() => editor.chain().focus().toggleItalic().run()}
              type="italic"
              shortcutLetter="i"
              icon={<Italic size={16} />}
            />
            <BubbleMenuButton
              editor={editor}
              onClick={() => editor.chain().toggleStrike().run()}
              type="strike"
              shortcutLetter="s"
              aditionalIcon={<ArrowBigUp size={16} />}
              icon={<Strikethrough size={16} />}
            />
          </div>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </div>
  );
}
