import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { SiGithub, SiLinkedin, SiGmail  } from "react-icons/si";

const Introduction = () => {
  const [text, count] = useTypewriter({
    words: [
      "- Graduated from California State University, Fullerton!",
      "- Software Engineer",
      "- Full Stack Developer"
    ],
    loop: false,
    typeSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="container md:flex mx-auto justify-between space-x-12 space-y-12 px-2 text-white sm:px-5 items-center">
      <div className="space-y-6">
        <h1 className="sm:text-4xl text-3xl font-bold md:text-5xl">Hey, I'm <span className="text-yellow-300">Cyrus Baybay</span></h1>
        <p className="font-semibold opacity-70" style={{ height: '3.5rem' }}>
          {text}
        </p>
        <p className="font-semibold opacity-70">
          Crafting cutting-edge software engineering solutions that break boundaries, redefine possibilities, and leave digital marks on the world.
        </p>
        <div className="flex space-x-5">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-sky-400"
            href="https://github.com/TRA3H"
          >
            <SiGithub className="h-7 w-7" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-sky-400"
            href="https://www.linkedin.com/in/cyrus-baybay-69a809175/"
          >
            <SiLinkedin className="h-7 w-7" />
          </a>
          <a
            href="mailto:cyrusb10@gmail.com"
            className="text-white hover:text-sky-400"
          >
            <SiGmail className="h-7 w-7" />
          </a>
        </div>
      </div>

      {/* TODO: wrap text around image remove square when mobile display */}
      <div className="flex items-center justify-center mt-10"> 
        <div className="w-72 h-72 shadow-lg flex items-center justify-center align-middle drop-shadow-2xl
                             rounded-[30px] border border-white/10 bg-white/5 px-4 backdrop-blur-lg -rotate-90">
          <div className="flex justify-center items-center bg-gradient-to-r rounded-full 
                                 w-56 h-56 overflow-hidden">
            <img className="pt-14 rotate-90 " src="me2.jpg" alt="cyrus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
