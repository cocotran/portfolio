import React from "react";
import SmallProjectCard from "./Projects/SmallProjectCard";

import projectJson from "../projects/projects.json";
import style from "../styles/style.json";

function Projects(props, ref) {
  return (
    <>
      <div className={style.margin + " mt-40 text-gray-100 tracking-wide"}>
        <div ref={ref} className="h-3"></div>
        <div className="flex items-center">
          <h1 className="text-3xl tracking-wider ">Projects</h1>
          <div className="w-full ml-3 border-t border-gray-600"></div>
        </div>

        <div className="mt-8">
          {projectJson.map((item, index: number) => {
            return (
              <div key={index} className="mb-8">
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
