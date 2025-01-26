import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      name: "Food Safety",
      title: "Empowering Food Safety across Africa's Market",
      description: "Promoting Food Safety culture from farm to market",
      techStack: ['NextJs', 'Tailwind', 'Github'],
      link: "https://fs4a-innovartechs-projects.vercel.app"
    },
    {
      name: "MedFair Healthcare Application",
      title: "Experiencing The beauty of digital Medical Attention",
      description: "24/7 Availability of Doctors",
      techStack: ['React', 'Tailwind', 'Github'],
      link: "https://medfair-landing-page.vercel.app/"
    },
    {
      name: "Full Gospel Church Of God",
      title: "One Church with multiple Locations",
      techStack: ['Next JS', 'Tailwind', 'Github'],
      link: "https://fgcg-webapp.vercel.app"
    },
    {
        name: "GPt3",
        title: "Building something Amazing with GPT-3 OpenAI",
        techStack: ['React', 'Tailwind', 'Github'],
        link: "https://gpt-3-rouge-three.vercel.app"
    },
    {
        name: "Dining Restaurant",
        title: "Chase the new flavour",
        techStack: ['React', 'Tailwind', 'Github'],
        description: "The key to fine wine Dinning",
        link: "https://restaurant-app-five-chi.vercel.app"
    },
    {
        name: "HookBank",
        title: " The Next Generation Payment Method",
        techStack: ['React', 'Tailwind', 'Github'],
        link: "https://modern-baking-webpage.vercel.app"
    }

  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="heading">My Projects</h1>
        <div className="grid-container">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-card-inner">
                <p>{project.name}</p>
                <div className="mb-7">
                  <h1 className="font-bold text-xl">{project.title}</h1>
                  <p>{project.description}</p>
                  <div className="mt-2 flex items-center gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <p key={techIndex} className="tech-item">{tech}</p>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="view-project-button">
                      View Project
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-lg rotate-45 group-hover/goto:rotate-0 duration-300"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
