'use client';

import localFont from 'next/font/local';
import { BsCheckCircleFill } from 'react-icons/bs';

const virgil = localFont({ src: '../../../public/fonts/Virgil.woff2' });

export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <BsCheckCircleFill size={26} className="text-white" />
      <h1 className={`${virgil.className} text-2xl text-white font-black`}>
        Tomat
      </h1>
    </div>
  );
}
