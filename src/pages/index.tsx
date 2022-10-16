import type { NextPage } from "next";
import Head from "next/head";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";


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
        <div className="mx-auto max-w-4xl space-y-8 py-10 px-5 lg:px-0"> {/* Put all comps in this div thanks */}
        <Navbar></Navbar> 
        <Introduction></Introduction>
        </div>
        
      </main>

      <footer className="">
        
      </footer>
    </div>
  );
};

export default Home;
