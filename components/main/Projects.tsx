import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/pokerun.png"
          title="Poke-Run"
          description="A simple game made by jQuery and it uses PokeApi for fetching the pictures of all pokemons. You are Pikachu and if you hit other pokemons you lose."
        />
        <ProjectCard
          src="/KanjiQuiz.png"
          title="KANJI learning web application"
          description="A KANJI learning web application for international students in Japan. Dev tools used are Django, MariaDb for SQL database, Bootstrap for design"
        />
        <ProjectCard
          src="/yama.png"
          title="Yama Renovate"
          description="A simple HTML, CSS, JS website that I started making from the phone version."
        />
      </div>
    </div>
  );
};

export default Projects;
