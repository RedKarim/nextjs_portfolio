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
          src="/pokerun.png"
          title="Poke-Run"
          description="A simple game made by jQuery and it uses PokeApi for fetching the pictures of all pokemons. You are Pikachu and if you hit other pokemons you lose."
          githubLink="https://github.com/RedKarim/PokeRun-jQuery-and-API-fetching-by-AJAX-"
        />
        <ProjectCard
          src="/kanjiquizzz.png"
          title="KANJI learning web application"
          description="A KANJI learning web application for international students in Japan. Dev tools used are Django, MariaDb for SQL database, Bootstrap for design"
          githubLink="https://github.com/RedKarim/KANJI-quiz-for-international-students-in-Japan"
        />
        <ProjectCard
          src="/yamarenove.png"
          title="Yama Renovate"
          description="A simple HTML, CSS, JS website that I started making from the phone version."
          githubLink="https://github.com/RedKarim/Yama-renovate-started-from-the-MobilePhone-version-"
        />
      </div>
    </div>
  );
};

export default Projects;
