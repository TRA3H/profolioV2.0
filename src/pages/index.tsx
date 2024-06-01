import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SkillsSlider from "../components/SkillsSlider";
import Experience from "../components/Experience";
import ExperienceHeading from "../components/ExperienceHeader";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";


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
            title="Ekko🤖"
            description="Developed a keylogger in Visual Studio using C++/C#, designed for cybersecurity testing to simulate and analyze system vulnerabilities. Utilized JSON for advanced configuration and data handling, optimizing the tool for real-world penetration testing scenarios."
            gh_url=""
          ></Projects>
          <Projects
            title="TitanRadio📻"
            description="Powered by WordPress, our dynamic website features a live radio player, live chat, and TR Replay for quick content access. As the website manager and feature developer, I keep the site up-to-date and introduce new functionalities. Explore our vibrant DJ community, stay updated on exciting events, and immerse yourself in the world of music and entertainment."
            proj_url="https://titanradio.org/"
          ></Projects>
          <Projects
            title="Profolio V2.0🌟"
            description="Welcome to ProfolioV2.0, a modern and dynamic portfolio showcasing my web development journey from HTML and CSS to cutting-edge technologies like Next.js and Tailwind CSS. Explore my achievements, interact with my AI virtual assistant, CyrusGPT, and discover my music preferences with Spotify integration, all presented with captivating animations to create an engaging and personalized experience."
            gh_url="https://github.com/TRA3H/profolioV2.0"
          ></Projects>
          <Projects
            title="CryptoHood 🚀"
            description="CryptoHood is a cutting-edge mobile app that provides real-time crypto market data, including prices, volatility, and volume, for a wide range of cryptocurrencies. Stay informed, track your favorite assets, and make informed decisions with ease, all while ensuring the utmost privacy and security through user authentication."
            gh_url="https://github.com/TRA3H/CryptoHood"
          ></Projects>
          <Projects
            title="PriceHero 🔍"
            description="PriceHero is your ultimate price comparison tool, allowing you to find the best deals for any item you desire. With real-time price data fetched using the Google Shop Scraper API from Apify, PriceHero presents a comprehensive list of items, ranked from least to greatest price, helping you save big on your purchases."
            gh_url="https://github.com/TRA3H/profolioV2.0"
            proj_url="https://price-hero.vercel.app"
          ></Projects>
          <Projects
            title="HellTowers 🛡️"
            description="Hell Towers is a tower defense game I helped create with a group using Unity, where players must strategically build defenses to protect an S.O.S. beacon from swarming aliens. It was a challenging yet rewarding experience that allowed me to delve into game development."
            gh_url="https://github.com/Digx7/HellTowers"
          ></Projects>
          </div>
          <div>

          </div>

          
        </div>
        <div className="space-y-12 sm:px-5">
            <h1 className="sm:text-4xl, text-3xl font-bold md:text-5xl pt-12">Experience</h1>
        
        <Experience></Experience>
        </div>
        </div>
        
      </main>

      <footer className="">
        
      </footer>
    </div>
  );
};

export default Home;
