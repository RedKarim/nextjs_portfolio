"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a nav link
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 z-50 ${scrolled ? 'shadow-lg shadow-[#2A0E61]/50 bg-[#03001499] backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo */}
        <a
          href="#about-me"
          className="flex items-center gap-2 z-50"
        >
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
            MK
          </div>
          <span className="font-bold text-lg text-white hover:text-purple-400 transition-colors duration-300">
            Mahdyar Karimi
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#about-me" 
            className="text-gray-300 hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-8 transition-all duration-300"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-gray-300 hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-8 transition-all duration-300"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-gray-300 hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-8 transition-all duration-300"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="text-gray-300 hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-8 transition-all duration-300"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-gray-300 hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-8 transition-all duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {Socials.map((social) => (
            <a
              href={social.name === "Github" ? "https://github.com/RedKarim" : "#"}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="p-2 bg-[#1a1a2e] rounded-full hover:bg-purple-500/20 transition-all duration-300"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#030014] bg-opacity-95 flex flex-col items-center justify-center z-40"
          >
            <div className="flex flex-col items-center gap-8 text-xl">
              <a 
                href="#about-me" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={handleNavLinkClick}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={handleNavLinkClick}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={handleNavLinkClick}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={handleNavLinkClick}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>

              {/* Social Icons - Mobile */}
              <div className="flex items-center gap-6 mt-8">
                {Socials.map((social) => (
                  <a
                    href={social.name === "Github" ? "https://github.com/RedKarim" : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social.name}
                    className="p-2 bg-[#1a1a2e] rounded-full hover:bg-purple-500/20 transition-all duration-300"
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
