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
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 flex items-center justify-center">
          <Image
            src="/mainIconsdark.svg"
            alt="Mahdyar Karimi"
            width={300}
            height={300}
            className="object-contain"
          />
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
          I'm Mahdyar Karimi, an AWS Certified developer currently studying in Japan. With a passion for technology and innovation, I specialize in creating modern web applications and exploring emerging technologies.
        </p>
        
        <p className="text-gray-300 text-lg">
          My journey in tech began with web development, and has since expanded to include blockchain technology, machine learning, and cloud computing. I'm constantly learning and adapting to new technologies to stay at the forefront of the industry.
        </p>
        
        <p className="text-gray-300 text-lg">
          When I'm not coding, I enjoy exploring Japan, learning about different cultures, and contributing to open-source projects that make a positive impact on the world.
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
