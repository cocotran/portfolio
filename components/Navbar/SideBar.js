import Image from "next/image";

function SideBar({
  skillsButtonHandler,
  projectsButtonHandler,
  contactButtonHandler,
  setShowSideBarWrapper,
  setNavbarStateWrapper,
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

  return (
    <div className="w-full h-screen fixed flex justify-end blur">
      <button
        className="px-8 pt-5 w-full inline-flex justify-end absolute"
        onClick={() => setShowSideBarWrapper(false)}
      >
        <Image src="/images/close.svg" alt="Close" width={24} height={24} />
      </button>

      <nav className="w-3/4 h-full bg-gray-800 shadow-xl">
        <div className="pb-5 w-full h-full inline-flex text-gray-400 text-sm">
          <div className="mx-auto my-auto">
            {buttons.map(function (item) {
              return (
                <div>
                  <label className="mb-8 inline-flex items-center side-bar-button-label hover:text-gray-300">
                    <div className="opacity-0 arrow inline-flex">
                      <Image
                        src="/images/arrow.svg"
                        alt="Select"
                        width={18}
                        height={18}
                      />
                    </div>
                    <button
                      className="mx-5 text-sm"
                      onClick={() => {
                        item.func();
                        setShowSideBarWrapper(false);
                        setNavbarStateWrapper(false);
                      }}
                    >
                      {item.name}
                    </button>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
