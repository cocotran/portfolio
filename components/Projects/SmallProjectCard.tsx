import Image from "next/image";

export default function SmallProjectCard({ project }) {
  return (
    <>
      <div className="w-full py-8 px-8 bg-gray-700 rounded-md text-gray-400">
        <p className="tracking-wider text-2xl text-white">{project.name}</p>

        <p className="mt-8 leading-5">{project.description}</p>

        <div className="mt-8 flex text-base">
          {project.stack.map((item: string, index: number) => {
            return <p key={index} className="mr-3">{item}</p>;
          })}
        </div>

        <div className="mt-8 flex">

          {project.github != "" && 
            <a href={project.github} target="_blank" className="mr-8">
              <Image
                src="/images/GitHub-dark.svg"
                alt="GitHub Icon"
                width={20}
                height={20}
              />
            </a>}

          {project.url != "" &&
            <a href={project.url} target="_blank">
              <Image
                src="/images/external-link.svg"
                alt="External Icon"
                width={20}
                height={20}
              />
            </a>}

        </div>
      </div>
    </>
  );
}
