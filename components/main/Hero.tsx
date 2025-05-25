"use client";

import React, { useEffect, useState } from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {isMounted && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      )}
      <HeroContent />
    </div>
  );
};

export default Hero;
