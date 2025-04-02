import React from 'react';

import { Command } from 'lucide-react';

interface props {
  title: String;
  aditionalIcon?: React.ReactElement;
}

export function HoverTitle({ title, aditionalIcon }: props) {
  return (
    <span className="absolute flex items-center gap-1 min-w-fit left-1/2 -top-10 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs px-2 py-1 rounded transition">
      <Command size={14} />
      <span>+</span>
      {aditionalIcon && (
        <>
          {aditionalIcon} <span>+</span>
        </>
      )}
      {title}
    </span>
  );
}
