function Hero({
  skillsButtonHandler,
  projectsButtonHandler,
  contactButtonHandler,
}) {
  const buttonClassname = " w-20 lg:w-32 py-3 border-t-2 border-gray-400";

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
          <button className={buttonClassname} onClick={skillsButtonHandler}>
            Skills
          </button>
          <button
            className={"ml-8 outline-none" + buttonClassname}
            onClick={projectsButtonHandler}
          >
            Projects
          </button>
          <button
            className={"ml-8" + buttonClassname}
            onClick={contactButtonHandler}
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
