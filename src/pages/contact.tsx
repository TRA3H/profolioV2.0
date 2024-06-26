import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import GPTCyrus from "../components/GPTCyrus";
import Experience from "../components/Experience";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";


const Contact: NextPage =() => {
    return(
        <div>
        <Head> {/*this is the tab bar */}
        <title>Cyrus Baybay</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Outfit:wght@400;700&display=swap');
        </style>
      </Head>
      <main>
        <div className="mx-auto max-w-4xl space-y-8 py-10 px-5 lg:px-0" > 
        <div className="absolute blur-[163px] bg-[#3A1D5E] sm:w-[400px] sm:h-[400px]
                        rounded-full lg:w-[518px] lg:h-[518px] left-[-271px] top-[158px]"></div>
        <div className="absolute blur-[160px] bg-[#8DEAFF] sm:w-[172px] sm:h-[172px]
                        rounded-full lg:w-[150px] lg:h-[518px] right-[0px] top-[609px] rounded-tl-full rounded-bl-full "></div>
        <Navbar></Navbar> 
        <GPTCyrus></GPTCyrus>
        <div className="space-y-12 sm:px-5">
            <h1 className="sm:text-4xl, text-3xl font-bold md:text-5xl pt-12">Experience</h1>
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
        <Experience></Experience>
        </div>
        </div>
        
        </main>
        </div>
    );
}

export default Contact;