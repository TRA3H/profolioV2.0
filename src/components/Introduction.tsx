import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

const Introduction = () => {
  const [text, count] = useTypewriter({
    words: [
      "- 5th year college student at California State University, Fullerton",
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
        <h1 className="sm:text-4xl text-3xl font-bold md:text-5xl">Hey, I'm Cyrus Baybay</h1>
        <p className="font-semibold opacity-70" style={{ height: '3.5rem' }}>
          {text}
        </p>
        <p className="font-semibold opacity-70">
          Crafting cutting-edge software engineering solutions that break boundaries, redefine possibilities, and leave digital marks on the world.
        </p>
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
