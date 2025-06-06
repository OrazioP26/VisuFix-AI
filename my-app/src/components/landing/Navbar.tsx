import React from 'react';

const Navbar = () => {
    return (
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#E9ECF8] border-b border-gray-300">
        <div className="flex items-center gap-2">
          <img src="/VisuFix Logo.svg" alt="VisuFix Logo" className="w-11 h-11" />
          <h1 className="text-[23px] font-medium tracking-tight text-[#1F2152]">VisuFix AI</h1>
        </div>
  
        <ul className="hidden md:flex gap-6 text-sm font-medium text-[#1F2152]">
          <li><a href="#">Features</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Use cases</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Help</a></li>
        </ul>
  
        <div className="flex items-center gap-4">
          <a className="text-[13px] tracking-tight leading-none text-black font-medium" href="#">Log in</a>
          <a
            href="#"
            className="w-[75px] h-[32px] rounded-[12px] shrink-0 bg-[linear-gradient(181deg,#38BDF8_0.9%,rgba(0,113,227,0.85)_99.09%)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center text-[13px] font-medium tracking-tight text-[#E6E6E6]"
          >
            Sign up
            <img src="/Arrow1.svg" alt="Arrow icon" className="ml-2 w-[17px] h-[17px]" />
          </a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  