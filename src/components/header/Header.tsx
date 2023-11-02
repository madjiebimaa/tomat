'use client';

import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { VscGraph } from 'react-icons/vsc';
import HeaderButton from './HeaderButton';
import Logo from './Logo';
import ProgressBar from './ProgressBar';

export default function Header() {
return (
    <>
      <header className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-4">
          <HeaderButton>
            <VscGraph size={20} className="text-white" />
          </HeaderButton>
          <HeaderButton>
            <IoMdSettings size={20} className="text-white" />
          </HeaderButton>
          <HeaderButton>
            <BsFillPersonFill size={20} className="text-white" />
          </HeaderButton>
        </div>
      </header>
      <ProgressBar />
    </>
  );
}
