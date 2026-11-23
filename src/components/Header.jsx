import React, { useState } from 'react';
import { navLinks as defaultLinks } from '../data/websiteData';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import LogoIcon from './icons/LogoIcon';

function Header({ brandName = 'Brillance', links = defaultLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-30 px-6 sm:px-8 md:px-12 lg:px-0">
      <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]" />

      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] rounded-[50px] flex justify-between items-center relative z-30">
        <div className="flex justify-center items-center gap-2">
          <a href="#" className="flex justify-start items-center gap-2 group">
            <LogoIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            <span className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5">
              {brandName}
            </span>
          </a>

          <nav className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="flex justify-start items-center text-[rgba(49,45,43,0.80)] hover:text-[#2F3037] text-xs md:text-[13px] font-medium leading-[14px] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-6 sm:h-7 md:h-8 flex justify-start items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white hover:bg-[#F2EFEB] shadow-[0px_1px_2px_rgba(55,50,47,0.12)] rounded-full flex justify-center items-center cursor-pointer transition-colors"
          >
            <span className="text-[#37322F] text-xs md:text-[13px] font-medium leading-5">
              Log in
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-1 rounded-full text-[#37322F] hover:bg-white/80 cursor-pointer focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <CloseIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-12 left-0 w-full bg-[#F7F5F3] border border-[#E0DEDB] shadow-lg rounded-2xl p-4 flex flex-col gap-3 sm:hidden z-50">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#37322F] text-sm font-medium py-1.5 px-3 rounded-lg hover:bg-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="text-center py-2 px-3 bg-[#37322F] text-white rounded-full text-xs font-medium"
            >
              Start for free
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
