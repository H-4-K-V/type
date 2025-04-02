import React from 'react';
import { ChevronDown, Heading1, Heading2, Heading3, Type } from 'lucide-react';

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

export function DropDownMenu() {
  return <></>;
}
