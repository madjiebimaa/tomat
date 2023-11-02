'use client';

import { BsCheckCircleFill } from 'react-icons/bs';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <BsCheckCircleFill size={26} className="text-white" />
      <h1 className="text-2xl text-white font-black">Tomat</h1>
    </div>
  );
}
