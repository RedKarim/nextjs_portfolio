"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-10 md:px-20 w-full"
      id="about"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.5)}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden">
          {/* Animated border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-lg opacity-75 animate-pulse z-0"></div>
          
          <div className="relative rounded-full overflow-hidden border-2 border-purple-500/50 h-full w-full">
            <div className="absolute inset-0 bg-[#030014] z-0"></div>
            <Image
              src="/images/aboutme.png"
              alt="Mahdyar Karimi"
              fill
              className="object-cover z-10"
              priority
              style={{ objectPosition: '50% 25%', transform: 'scale(1.05)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-cyan-500/20 opacity-60 z-20"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromRight(0.5)}
        className="w-full md:w-1/2 flex flex-col gap-6"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me
        </h2>

        <p className="text-gray-300 text-lg">
          I'm Mahdyar Karimi, an AWS Certified developer currently studying in
          Japan. With a passion for technology and innovation, I specialize in
          creating modern web applications and exploring emerging technologies.
        </p>

        <p className="text-gray-300 text-lg">
          My journey in tech began with web development, and has since expanded
          to include cloud computing and Control Engineering. I'm constantly
          learning and adapting to new technologies to stay at the forefront of
          the industry.
        </p>
        <div className="flex flex-row gap-4 mt-4">
          <a
            href="/karimimahdyarcv.pdf"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg hover:opacity-90 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="py-2 px-6 border border-purple-500 text-center text-white cursor-pointer rounded-lg hover:bg-purple-500/20 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
