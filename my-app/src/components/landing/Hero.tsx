import React from 'react';

const Hero = () => {
    return (
      <section className="flex flex-col items-center px-4 pt-[100px]">
        <h2 className="font-medium text-[54px] leading-none tracking-[-0.04em] text-[#1F2152] max-w-[426px] text-center">
          Polished slides.<br />
          Zero design effort.
        </h2>
        <p className="font-light text-[20px] leading-none tracking-[-0.04em] text-[#161958] max-w-[369px] text-center mt-[38px]">
          AI-powered fixes for cleaner, smarter visuals
        </p>
        <a
          href="#"
          className="mt-[26px] w-[174px] h-[48px] shrink-0 rounded-[12px] bg-[linear-gradient(180deg,#38BDF8_0.05%,rgba(0,113,227,0.85)_99.94%)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center text-[18px] font-medium tracking-[-0.04em] text-[#E6E6E6]"
        >
          Try VisuFix Free
        </a>
      </section>
    );
  };
  
  export default Hero;
  
