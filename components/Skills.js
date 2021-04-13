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
      <div className="mx-8 md:mx-28 lg:mx-80 text-gray-100 tracking-wide">
        <div className="flex items-center">
          <h1 className="lg:text-xl tracking-wider">Skills</h1>
          <div className="w-full lg:w-60 ml-3 border-t border-gray-600"></div>
        </div>

        <div className="mt-8">
          <p className="text-xs lg:text-sm">
            Here are a few technologies I've been working with:
          </p>

          <div className="mt-8 flex justify-between lg:justify-center text-sm">
            <div>{languageList}</div>
            <div className="lg:ml-40">{techList}</div>
          </div>
        </div>
      </div>
    </>
  );
}
