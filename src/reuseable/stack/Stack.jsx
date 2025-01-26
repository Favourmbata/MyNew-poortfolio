import React from 'react';
import './Stack.css'; // Import the extracted CSS file
import Javascript from "../../assets/logo-javascript.svg";
import python from "../../assets/icons8-python-48.png";
import html from "../../assets/pngwing.com.png";
import css from "../../assets/css3-logo-png-transparent.png";
import react from "../../assets/react.svg";
import nextjs from "../../assets/nextjs.svg";
import shadcn from "../../assets/shadcn-ui-seeklogo.svg";
import redux from "../../assets/redux.svg";
import tailwind from "../../assets/tailwind-css-svgrepo-com.svg";
import typescript from "../../assets/typescript-svgrepo-com.svg";
import vercel from "../../assets/vercel.svg";
import mysql from "../../assets/mysql.svg";
import postgress from "../../assets/postgresql.svg";
import git from "../../assets/git-icon-logo-svgrepo-com.svg";
import github from "../../assets/github-icon-1-logo-svgrepo-com.svg";
import vite from "../../assets/vite.svg";
import vscode from "../../assets/vscode.png";
import linux from "../../assets/linux.svg";
import swagger from "../../assets/Swagger.png";
import postman from "../../assets/postman-icon.png";
import Navbar from '../../components/navbar/Navbar';

const Stack = () => {
  const techStack = [
    { imgSrc: Javascript, name: "JavaScript" },
    { imgSrc: typescript, name: "TypeScript" },
    { imgSrc: html, name: "HTML" },
    { imgSrc: css, name: "CSS" },
    { imgSrc: python, name: "Python" },
    { imgSrc: react, name: "React" },
    { imgSrc: redux, name: "Redux" },
    { imgSrc: tailwind, name: "Tailwind" },
    { imgSrc: shadcn, name: "ShadCN" },
    { imgSrc: nextjs, name: "Next.js" },
    { imgSrc: vercel, name: "Vercel" },
    { imgSrc: git, name: "Git" },
    { imgSrc: github, name: "GitHub" },
    { imgSrc: vite, name: "Vite" },
    { imgSrc: vscode, name: "VS Code" },
    { imgSrc: mysql, name: "MySQL" },
    { imgSrc: postgress, name: "Postgres" },
    { imgSrc: linux, name: "Linux" },
    { imgSrc: swagger, name: "Swagger" },
    { imgSrc: postman, name: "Postman" }
  ];
  
  return (
    
    <section>
      <Navbar />
      <div className='tech-stack-container'>
        <div>
          <h3 className="tech-stack-heading">
            <span className="inline-block overflow-hidden">Tech Stack</span>
          </h3>
        </div>
        <div className="tech-stack-grid">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-stack-item">
              <a className="tech-stack-link">
                <img
                  src={tech.imgSrc}
                  alt={tech.name}
                  className="tech-stack-image"
                />
                <p className="tech-stack-text">
                  {tech.name}
                </p>
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
