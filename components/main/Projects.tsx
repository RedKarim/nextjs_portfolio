"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
      id="projects"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto"
      >
        <motion.div variants={slideInFromTop} className="flex flex-col items-center mb-16">
          <p className="text-gray-400 text-lg mb-2">MY WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <motion.div variants={slideInFromLeft(0.3)}>
            <ProjectCard
              src="/pokerungif.gif"
              title="Poke-Run"
              description="A simple game made by jQuery and it uses PokeApi for fetching the pictures of all pokemons. You are Pikachu and if you hit other pokemons you lose."
              githubLink="https://github.com/RedKarim/PokeRun-jQuery-and-API-fetching-by-AJAX-"
              tags={["jQuery", "PokeAPI", "AJAX", "Game Development"]}
            />
          </motion.div>

          <motion.div variants={slideInFromLeft(0.5)}>
            <ProjectCard
              src="/kanjiquizgif.gif"
              title="KANJI Learning App"
              description="A KANJI learning web application for international students in Japan. Dev tools used are Django, MariaDb for SQL database, Bootstrap for design."
              githubLink="https://github.com/RedKarim/KANJI-quiz-for-international-students-in-Japan"
              tags={["Django", "MariaDB", "Bootstrap", "Educational"]}
            />
          </motion.div>

          <motion.div variants={slideInFromLeft(0.7)}>
            <ProjectCard
              src="/cvreaderai.gif"
              title="Local CV Chatbot"
              description="A local AI chatbot that reads your CV and answers questions about it. Built with Llama 3 and Gradio. Your data stays on your machine."
              githubLink="https://github.com/RedKarim/localChatbotLama3"
              tags={["Llama 3", "Gradio", "AI", "NLP"]}
            />
          </motion.div>
        </div>
        
        <motion.div 
          variants={slideInFromTop} 
          className="flex justify-center mt-16"
        >
          <a 
            href="https://github.com/RedKarim"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-8 button-primary text-white rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2"
          >
            <span>View More on GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
