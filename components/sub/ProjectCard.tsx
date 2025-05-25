import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
  tags?: string[];
}

const ProjectCard = ({ src, title, description, githubLink, tags = [] }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-xl border border-[#2A0E61] bg-[#0A0A1B] h-full transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/50 hover:translate-y-[-5px]">
      <div className="relative h-48 overflow-hidden">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1B] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>

      <div className="relative p-6">
        <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-[#2A0E61] text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <span>View on GitHub</span>
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
