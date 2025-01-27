
import React from 'react';
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
    <section className="bg-gray-50 py-12">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center transition transform hover:scale-105"
            >
              <div className="relative w-24 h-24 lg:w-16 lg:h-16 bg-white shadow-md rounded-xl p-4 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={tech.imgSrc}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2 text-center text-gray-700 font-medium">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
