import React from "react";

function Skills(props, ref) {
  const language = ["C++", "Java", "Python", "JavaScript"];

  const tech = ["React", "Next", "Spring", "Flask"];

  return (
    <>
      <div className="mx-8 md:mx-28 lg:mx-40 xl:mx-80 text-gray-300 tracking-wide">
        <div ref={ref} className="h-3"></div>
        <div className="flex items-center">
          <h1 className="text-3xl tracking-wider text-gray-100">Skills</h1>
          <div className="w-full ml-3 border-t border-gray-600"></div>
        </div>

        <div className="mt-8">
          <p className="text-gray-400">
            Here are a few technologies I've been working with:
          </p>

          <div className="mt-8 sm:mx-28 flex justify-between">
            <SkillList skills={language} />
            <SkillList skills={tech} />
          </div>
        </div>
      </div>
    </>
  );
}

const forwardedSkill = React.forwardRef(Skills);

export default forwardedSkill;

export function SkillList({ skills }) {
  return (
    <ul className="square">
      {skills.map((item) => {
        return (
          <li key={item} className="mb-3 text-blue-theme">
            <span className="text-gray-300">{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
