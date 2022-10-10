import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../Comps/Navbar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head> {/*this is the tab bar */}
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-primary">
        <Navbar></Navbar> 
      </main>

      <footer className="">
        
      </footer>
    </div>
  );
};

export default Home;
