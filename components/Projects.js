import React from "react";
import SmallProjectCard from "../components/Projects/SmallProjectCard";

import projectJson from "../projects/projects.json";

function Projects(props, ref) {
  return (
    <>
      <div className="mx-8 md:mx-28 lg:mx-40 xl:mx-80 mt-40 text-gray-100 tracking-wide">
        <div ref={ref} className="h-3"></div>
        <div className="flex items-center">
          <h1 className="text-3xl tracking-wider ">Projects</h1>
          <div className="w-full ml-3 border-t border-gray-600"></div>
        </div>

        <div className="mt-8">
          {projectJson.map((item) => {
            return (
              <div className="mb-8">
                <SmallProjectCard project={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const forwardedProject = React.forwardRef(Projects);

export default forwardedProject;
