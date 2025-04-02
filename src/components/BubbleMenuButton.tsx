import { Editor as EditorType } from '@tiptap/react';
import { HoverTitle } from './HoverTitle';

interface BubbleMenuButtonProps {
  editor: EditorType;
  onClick: () => void;
  type: string;
  shortcutLetter: string;
  aditionalIcon?: React.ReactElement;
  icon: React.ReactElement;
}

export function BubbleMenuButton({
  editor,
  onClick,
  type,
  shortcutLetter,
  aditionalIcon,
  icon,
}: BubbleMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`editor-button group ${
        editor.isActive(type) ? 'bg-slate-200' : ''
      }`}
    >
      <HoverTitle title={shortcutLetter} aditionalIcon={aditionalIcon} />
      {icon}
    </button>
  );
}
