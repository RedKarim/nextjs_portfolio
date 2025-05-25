"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-10 md:px-20 w-full z-[30]"
      id="about"
      style={{ position: 'relative' }}
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
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-lg opacity-75 animate-pulse"></div>

          <div className="relative rounded-full overflow-hidden border-2 border-purple-500/50 h-full w-full">
            <div className="absolute inset-0 bg-[#030014]"></div>
            <Image
              src="/images/aboutme.png"
              alt="Mahdyar Karimi"
              fill
              className="object-cover"
              priority
              style={{ objectPosition: "50% 25%", transform: "scale(1.05)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-cyan-500/20 opacity-60"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromRight(0.5)}
        className="w-full md:w-1/2 flex flex-col gap-6 relative z-10"
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

        <div className="flex flex-wrap gap-4 mt-4 relative z-[40] pointer-events-auto">
          <button
            onClick={() => window.open('/karimimahdyarcv.pdf', '_blank')}
            className="py-3 px-6 button-primary text-white cursor-pointer rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2 relative z-[50] pointer-events-auto"
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            Download CV
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="py-3 px-6 border border-purple-500 text-white rounded-full hover:bg-purple-500/20 transition-all duration-300 flex items-center gap-2 relative z-[50] pointer-events-auto"
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            Contact Me
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
