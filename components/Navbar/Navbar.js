import Image from "next/image";

function Navbar({
  display,
  skillsButtonHandler,
  projectsButtonHandler,
  contactButtonHandler,
}) {
  const buttons = [
    {
      name: "Skills",
      func: skillsButtonHandler,
    },
    {
      name: "Projects",
      func: projectsButtonHandler,
    },
    {
      name: "Contact",
      func: contactButtonHandler,
    },
  ];

  if (display) {
    return (
      <>
        <label
          className={
            display +
            " hidden sm:flex fixed top-0 w-full px-8 py-3 justify-end items-center text-gray-400 border-b border-gray-700 shadow-xl bg-gray-900 z-0"
          }
        >
          {buttons.map(function (item) {
            return (
              <div>
                <label className="inline-flex items-center side-bar-button-label hover:text-gray-300">
                  <div className="opacity-0 arrow inline-flex">
                    <Image
                      src="/images/arrow.svg"
                      alt="Select"
                      width={12}
                      height={12}
                    />
                  </div>
                  <button className="ml-2 mr-16 text-base" onClick={item.func}>
                    {item.name}
                  </button>
                </label>
              </div>
            );
          })}
        </label>
      </>
    );
  } else {
    return null;
  }
}

export default Navbar;
