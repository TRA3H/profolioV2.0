import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";


const Home: NextPage = () => {
  return (
    <div className="">
      <Head> {/*this is the tab bar */}
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Outfit:wght@400;700&display=swap');
        </style>
      </Head>

      <main>
        <Navbar></Navbar> 
      </main>

      <footer className="">
        
      </footer>
    </div>
  );
};

export default Home;
