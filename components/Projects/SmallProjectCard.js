import Image from "next/image";

export default function SmallProjectCard({ project }) {
  return (
    <>
      <div className="w-full py-8 px-8 bg-gray-700 rounded-md text-gray-400">
        <p className="tracking-wider text-2xl text-white">{project.name}</p>

        <p className="mt-8 leading-5">{project.description}</p>

        <div className="mt-8 flex text-base">
          {project.stack.map((item) => {
            return <p className="mr-3">{item}</p>;
          })}
        </div>

        <div className="mt-8 flex">
          <a className="mr-8">
            <Image
              src="/images/GitHub-dark.svg"
              alt="GitHub Link"
              width={20}
              height={20}
            />
          </a>
          <a>
            <Image
              src="/images/external-link.svg"
              alt="External Link"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </>
  );
}
