"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5] -mt-24 md:-mt-0 md:top-0 sm:-mt-[150px]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Certifications
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Interests
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-10px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
              <Image
                src="/ML.png"
                alt="ML"
                width={150}
                height={150}
                className="z-10"
              />
            </div>
            <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
              <h1 className="Welcome-text text-[12px] text-center">
                Interested in Machine learning
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
              <Image
                src="/AWSbadge.png"
                alt="AWSbadge"
                width={150}
                height={150}
                className="z-10"
              />
            </div>
            <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
              <h1 className="Welcome-text text-[12px] text-center">
                AWS solutions architect associate certification
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
              <Image
                src="/BL.png"
                alt="blockchain"
                width={150}
                height={150}
                className="z-10"
              />
            </div>
            <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
              <h1 className="Welcome-text text-[12px] text-center">
                Interested in Blockchain
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[-100px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Interested in Machine learning, Blockchain and Cloud computing
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        {isMounted && (
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="none"
            className="w-full h-auto"
            src="/encryption.webm"
          />
        )}
      </div>
    </div>
  );
};

export default Encryption;
