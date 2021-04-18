import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function Hero({
  skillsButtonHandler,
  projectsButtonHandler,
  contactButtonHandler,
  showNavbarMobile,
}) {
  // CSS class style
  const BUTTON_CLASSNAME = " w-20 lg:w-32 mt-3 py-3 border-t-2 border-gray-400";
  const BUTTON_LABEL_CLASSNAME =
    " flex flex-col justify-between items-center cursor-pointer button-label";

  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

  // mount
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      );

    observer.observe(cachedRef);

    // unmount
    return function () {
      observer.unobserve(cachedRef);
    };
  }, []);

  useEffect(() => {
    showNavbarMobile(isSticky);
  }, [isSticky]);

  return (
    <>
      <div className="mx-8 md:mx-28 lg:mx-80 h-screen flex flex-col justify-center text-gray-100">
        <div className="tracking-wider flex justify-center">
          <div>
            <p className="text-blue-theme">Hi, my name is</p>
            <h1 className="mt-8 text-3xl lg:text-6xl tracking-widest">
              Quang Tran.
            </h1>
          </div>
        </div>

        <div className="mt-40 flex justify-center items-center text-xs text-gray-400">
          <label className={BUTTON_LABEL_CLASSNAME}>
            <div className="opacity-0 down-arrow">
              <Image
                src="/images/arrow-down.svg"
                alt="Arrow"
                width={30}
                height={30}
              />
            </div>
            <button className={BUTTON_CLASSNAME} onClick={skillsButtonHandler}>
              Skills
            </button>
          </label>

          <label className={"ml-8" + BUTTON_LABEL_CLASSNAME}>
            <div className="opacity-0 down-arrow">
              <Image
                src="/images/arrow-down.svg"
                alt="Arrow"
                width={30}
                height={30}
              />
            </div>
            <button
              className={BUTTON_CLASSNAME}
              onClick={projectsButtonHandler}
            >
              Projects
            </button>
          </label>

          <label className={"ml-8" + BUTTON_LABEL_CLASSNAME}>
            <div className="opacity-0 down-arrow">
              <Image
                src="/images/arrow-down.svg"
                alt="Arrow"
                width={30}
                height={30}
              />
            </div>
            <button className={BUTTON_CLASSNAME} onClick={contactButtonHandler}>
              Contact
            </button>
          </label>
        </div>

        <div ref={ref}></div>
      </div>
    </>
  );
}

export default Hero;