import Head from "next/head";
import { useRef, useState } from "react";

// import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from "../components/Navbar/NavbarMobile";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  function skillsButtonHandler() {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function projectsButtonHandler() {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function contactButtonHandler() {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const [isNavbarMobileVisible, setIsNavbarMobileVisible] = useState("hidden");

  function showNavbarMobile(isVisible) {
    setIsNavbarMobileVisible(isVisible ? "" : "hidden");
  }

  return (
    <>
      <div className="app bg-gray-900">
        {/* <Navbar /> */}

        <NavbarMobile display={isNavbarMobileVisible} />

        <Hero
          skillsButtonHandler={skillsButtonHandler}
          projectsButtonHandler={projectsButtonHandler}
          contactButtonHandler={contactButtonHandler}
          showNavbarMobile={showNavbarMobile}
        />

        <Skills ref={skillsRef} />

        <Projects ref={projectsRef} />

        <Contact ref={contactRef} />
      </div>
    </>
  );
}
