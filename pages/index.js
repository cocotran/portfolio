import Head from "next/head";
import { useEffect, useRef, useState } from "react";

// import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from "../components/Navbar/NavbarMobile";
import SideBar from "../components/Navbar/SideBar";
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

  const [isNavbarMobileVisible, setIsNavbarMobileVisible] = useState(false);
  const [isBelowStickyButtons, setIsBelowStickyButtons] = useState(false);
  const [navbarState, setNavbarState] = useState("hidden");

  function setIsNavbarMobileVisibleWrapper(isVisible) {
    setIsNavbarMobileVisible(isVisible);
  }

  function showNavbarMobile() {
    setNavbarState(
      isNavbarMobileVisible && isBelowStickyButtons ? "" : "hidden"
    );
  }

  function setNavbarStateWrapper(bShow) {
    setNavbarState(bShow ? "" : "hidden");
  }

  if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setIsBelowStickyButtons(true);
      } else {
        setIsBelowStickyButtons(false);
      }
      prevScrollpos = currentScrollPos;
    };
  }

  useEffect(() => {
    showNavbarMobile();
  }, [isNavbarMobileVisible, isBelowStickyButtons]);

  const [showSideBar, setShowSideBar] = useState(false);

  function setShowSideBarWrapper(bShow) {
    setShowSideBar(bShow);
  }

  function displaySideBar() {
    if (showSideBar) {
      return (
        <SideBar
          skillsButtonHandler={skillsButtonHandler}
          projectsButtonHandler={projectsButtonHandler}
          contactButtonHandler={contactButtonHandler}
          setShowSideBarWrapper={setShowSideBarWrapper}
          setNavbarStateWrapper={setNavbarStateWrapper}
        />
      );
    }
  }

  return (
    <>
      <div className="app bg-gray-900">
        {/* <Navbar /> */}

        <NavbarMobile
          display={navbarState}
          setShowSideBarWrapper={setShowSideBarWrapper}
        />

        {displaySideBar()}

        <Hero
          skillsButtonHandler={skillsButtonHandler}
          projectsButtonHandler={projectsButtonHandler}
          contactButtonHandler={contactButtonHandler}
          setIsNavbarMobileVisibleWrapper={setIsNavbarMobileVisibleWrapper}
        />

        <Skills ref={skillsRef} />

        <Projects ref={projectsRef} />

        <Contact ref={contactRef} />
      </div>
    </>
  );
}
