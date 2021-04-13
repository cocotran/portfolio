import Head from "next/head";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <div className="app bg-gray-900">
        {/* <Navbar /> */}

        <Hero />

        <Skills />

        <Projects />
      </div>
    </>
  );
}
