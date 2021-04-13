export default function Skills() {
  const language = ["C++", "Java", "Python", "JavaScript"];
  const languageList = language.map(function (item) {
    return <p className="mb-3">{item}</p>;
  });

  const tech = ["React", "Next", "Spring", "Flask"];
  const techList = tech.map(function (item) {
    return <p className="mb-3">{item}</p>;
  });

  return (
    <>
      <div className="mx-80 md:mx-28 text-gray-100 tracking-wide">
        <div className="flex items-center">
          <h1 className="text-xl tracking-wider ">Skills</h1>
          <div className="w-60 ml-3 border-t border-gray-600"></div>
        </div>

        <div className="mt-8">
          <p className="text-sm">
            Here are a few technologies I've been working with:
          </p>

          <div className="mt-8 flex justify-center text-sm">
            <div>{languageList}</div>
            <div className="ml-40">{techList}</div>
          </div>
        </div>
      </div>
    </>
  );
}
