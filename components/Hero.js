export default function Hero() {
  return (
    <>
      <div className="mx-80 md:mx-28 h-screen flex flex-col justify-center text-gray-100">
        <div className="tracking-wider">
          <p className="text-blue-theme">Hi, my name is</p>
          <h1 className="mt-8 text-6xl tracking-widest">Quang Tran.</h1>
        </div>

        <div className="mt-40 flex justify-center items-center">
          <button className="w-32 py-3 border-t-2 border-gray-100">
            Skills
          </button>
          <button className="ml-24 w-32 py-3 border-t-2 border-gray-100">
            Projects
          </button>
          <button className="ml-24 w-32 py-3 border-t-2 border-gray-100">
            Contact
          </button>
        </div>
      </div>
    </>
  );
}
