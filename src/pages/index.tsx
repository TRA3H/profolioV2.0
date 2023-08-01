import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SkillsSlider from "../components/SkillsSlider";


const Home: NextPage = () => {
  return (
    <div className="">
      <Head> {/*this is the tab bar */}
        <title>Cyrus Baybay</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Outfit:wght@400;700&display=swap');
        </style>
      </Head>

      <main>
        <div className="mx-auto max-w-4xl space-y-8 py-10 px-5 lg:px-0" > {/* Put all comps in this div thanks */}
        <div className="absolute blur-[163px] bg-[#3A1D5E] sm:w-[400px] sm:h-[400px]
                        rounded-full lg:w-[518px] lg:h-[518px] left-[-271px] top-[158px]"></div>
        <div className="absolute blur-[160px] bg-[#8DEAFF] sm:w-[172px] sm:h-[172px]
                        rounded-full lg:w-[150px] lg:h-[518px] right-[0px] top-[609px] rounded-tl-full rounded-bl-full "></div>
        <Navbar></Navbar> 
        <Introduction></Introduction>
        <SkillsSlider></SkillsSlider>
        <div className="space-y-12 sm:px-5">
            <h1 className="sm:text-4xl, text-3xl font-bold md:text-5xl pt-12">Projects</h1>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Projects
            title="cyrusbaybay.com"
            description="From 1.0 to 2.0: My personal profolio that is built with Next.js and Tailwind CSS. To keep moving forward."
            gh_url="https://github.com/TRA3H/profolioV2.0"
          ></Projects>
          <Projects
            title="cyrusbaybay.com"
            description="From 1.0 to 2.0: My personal profolio that is built with Next.js and Tailwind CSS. To keep moving forward."
            gh_url="https://github.com/TRA3H/profolioV2.0"
          ></Projects>
          <Projects
            title="cyrusbaybay.com"
            description="From 1.0 to 2.0: My personal profolio that is built with Next.js and Tailwind CSS. To keep moving forward."
            gh_url="https://github.com/TRA3H/profolioV2.0"
          ></Projects>
          <Projects
            title="cyrusbaybay.com"
            description="From 1.0 to 2.0: My personal profolio that is built with Next.js and Tailwind CSS. To keep moving forward."
            gh_url="https://github.com/TRA3H/profolioV2.0"
          ></Projects>
          </div>
          <div>

          </div>

          
        </div>
        
        </div>
        
      </main>

      <footer className="">
        
      </footer>
    </div>
  );
};

export default Home;
