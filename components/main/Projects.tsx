import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects that I have done so far
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/pokerungif.gif"
          title="Poke-Run"
          description="A simple game made by jQuery and it uses PokeApi for fetching the pictures of all pokemons. You are Pikachu and if you hit other pokemons you lose."
          githubLink="https://github.com/RedKarim/PokeRun-jQuery-and-API-fetching-by-AJAX-"
        />
        <ProjectCard
          src="/kanjiquizgif.gif"
          title="KANJI learning web application"
          description="A KANJI learning web application for international students in Japan. Dev tools used are Django, MariaDb for SQL database, Bootstrap for design"
          githubLink="https://github.com/RedKarim/KANJI-quiz-for-international-students-in-Japan"
        />
        <ProjectCard
          src="/cvreaderai.gif"
          title="Local CV Chatbot"
          description="A local AI chatbot that reads your CV and answers questions about it. Built with Llama 3 and Gradio. Your data stays on your machine."
          githubLink="https://github.com/RedKarim/localChatbotLama3"
        />
      </div>
    </div>
  );
};

export default Projects;
