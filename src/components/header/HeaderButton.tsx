import { ReactNode } from 'react';

interface HeaderButtonProps {
  children: ReactNode;
}

export default function HeaderButton({ children }: HeaderButtonProps) {
  return (
    <button className="flex justify-center items-center h-8 w-8 rounded-md cursor-pointer hover:opacity-80 bg-red-400">
      {children}
    </button>
  );
}
