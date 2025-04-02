import React from 'react';
import { ChevronDown, Heading1, Heading2, Heading3, Type } from 'lucide-react';
import { Editor as EditorType } from '@tiptap/react';

const options = [
  {
    value: 0,
    label: 'Text',
    icon: <Type size={16} />,
  },
  {
    value: 1,
    label: 'Title 1',
    icon: <Heading1 size={16} />,
  },
  {
    value: 2,
    label: 'Title 2',
    icon: <Heading2 size={16} />,
  },
  {
    value: 3,
    label: 'Title 3',
    icon: <Heading3 size={16} />,
  },
];

export function DropDownMenu({
  onChange,
}: {
  onChange: (value: number) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(options[0]);

  return (
    <div className="relative w-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-3 py-2 border border-slate-200 rounded-md"
        type="button"
      >
        <span className="flex items-center gap-2">
          {selected.icon} {selected.label}
        </span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute w-full bg-slate-100 shadow-md rounded-md mt-1 z-10">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSelected(option);
                onChange(option.value);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-slate-200 transition"
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
