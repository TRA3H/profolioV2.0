import React from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const technologies = [
  { name: 'Android Studio', logo: '/technologies/icons8-android-studio.svg' },
  { name: 'C', logo: '/technologies/icons8-c.svg' },
  { name: 'CSS', logo: '/technologies/icons8-css.svg' },
  { name: 'Git', logo: '/technologies/icons8-git.svg' },
  { name: 'GitHub', logo: '/technologies/icons8-github.svg' },
  { name: 'HTML', logo: '/technologies/icons8-html-5.svg' },
  { name: 'JavaScript', logo: '/technologies/icons8-javascript.svg' },
  { name: 'MongoDB', logo: '/technologies/icons8-mongodb.svg' },
  { name: 'MySQL', logo: '/technologies/icons8-mysql.svg' },
  { name: 'Next.js', logo: '/technologies/icons8-nextjs.svg' },
  { name: 'Node.js', logo: '/technologies/icons8-node-js.svg' },
  { name: 'PHP', logo: '/technologies/icons8-php.svg' },
  { name: 'Python', logo: '/technologies/icons8-python.svg' },
  { name: 'React', logo: '/technologies/icons8-react.svg' },
  { name: 'Swift', logo: '/technologies/icons8-swift.svg' },
  { name: 'Tailwind CSS', logo: '/technologies/icons8-tailwind-css.svg' },
  { name: 'TypeScript', logo: '/technologies/icons8-typescript.svg' },
  // Add more technologies here
];

const SkillsSlider: React.FC = () => {
    return (
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-4xl text-white font-bold leading-tight text-center">
            <h1 className="mb-10">
              My <span className="text-yellow-300">Tech Stack</span>
            </h1>
          </div>
          <Marquee speed={50} gradient={false}>
            {technologies.map((tech, index) => (
              <div key={`tech-${index}`} className="flex-shrink-0 px-1">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  className="mx-10 filter transition-all duration-300 hover:brightness-125 tech-image"
                  width={120}
                  height={50}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    );
  };
  

export default SkillsSlider;
