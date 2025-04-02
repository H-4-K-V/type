'use client';

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import { content } from '@/constants/content';

import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { Heading1 } from 'lucide-react';

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
          <div className="bubble-menu">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={editor.isActive('font-bold') ? 'is-active' : ''}
            >
              Bold
            </button>
          </div>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </div>
  );
}
