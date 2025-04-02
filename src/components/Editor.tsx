'use client';

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import { content } from '@/constants/content';

import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

import { Bold, Italic, Strikethrough, ArrowBigUp } from 'lucide-react';

import { HoverTitle } from './HoverTitle';

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
        class: 'outline-none prose',
      },
    },
    immediatelyRender: false,
    content: content,
  });

  return (
    <div>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bg-slate-100 shadow-sm flex gap-2 px-2 py-1 items-center rounded-2xl">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className="editor-button group"
            >
              <HoverTitle title="b" />
              <Bold size={16} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className="editor-button group"
            >
              <HoverTitle title="i" />
              <Italic size={16} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className="editor-button group"
            >
              <HoverTitle title="x" aditionalIcon={<ArrowBigUp size={14} />} />
              <Strikethrough size={16} />
            </button>
          </div>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </div>
  );
}
