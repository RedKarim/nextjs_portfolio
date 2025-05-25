"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-10 lg:px-20 pt-32 md:pt-40 w-full z-[20] max-w-7xl mx-auto"
    >
      <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="flex items-center py-2 px-4 border border-[#7042f88b] bg-[#0300145e] rounded-full w-fit"
        >
          <SparklesIcon className="text-purple-500 mr-2 h-5 w-5" />
          <p className="text-sm text-gray-300">
            AWS Certified Developer
          </p>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Mahdyar Karimi
          </span>
        </motion.h1>
        
        <motion.h2
          variants={slideInFromLeft(0.6)}
          className="text-2xl md:text-3xl font-semibold text-gray-300"
        >
          Web Developer & AI Enthusiast
        </motion.h2>
        
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 max-w-[600px] leading-relaxed"
        >
          An Iranian student in Japan with a passion for creating impactful digital solutions. 
          Skilled in web development, blockchain technology, and machine learning.
        </motion.p>
        
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 mt-2"
        >
          <a
            href="/karimimahdyarcv.pdf"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download CV</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          
          <a
            href="#contact"
            className="py-3 px-6 border border-purple-500 text-white rounded-full hover:bg-purple-500/20 transition-all duration-300 flex items-center gap-2"
          >
            <span>Contact Me</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
        
        <motion.div
          variants={slideInFromLeft(1.2)}
          className="flex items-center gap-4 mt-6"
        >
          <p className="text-gray-400">Tech Stack:</p>
          <div className="flex gap-3">
            {["/tech/react.png", "/tech/js.png", "/tech/python.png", "/tech/aws.png"].map((tech, index) => (
              <div 
                key={index} 
                className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center p-1 hover:bg-[#2A0E61] transition-colors duration-300"
              >
                <Image src={tech} alt="technology" width={30} height={30} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
          <div className="relative bg-[#0A0A1B] rounded-full p-2">
            <Image
              src="/mainIconsdark.svg"
              alt="work icons"
              height={500}
              width={500}
              className="relative z-10"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
