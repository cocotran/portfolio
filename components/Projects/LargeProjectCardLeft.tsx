export default function LargeProjectCardLeft() {
  return (
    <>
      <div className="flex justify-between items-center relative">
        <div
          style={{ height: "300px" }}
          className="h-full flex flex-col justify-between"
        >
          <p className="text-lg">Colculator</p>

          <div>
            <div className="flex items-center text-xxs">
              <p>Next.js</p>
              <p className="ml-3">Flask</p>
              <p className="ml-3">Firebase</p>
            </div>
          </div>
        </div>

        <div className="py-5 px-5 w-1/2 bg-gray-700 rounded-md absolute left-0">
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            odio ut est tristique mollis. Donec condimentum lorem non congue
            fringilla. Ut purus justo, pretium eget nulla nec, facilisis
            efficitur diam.
          </p>
        </div>

        <div
          style={{ width: "450px", height: "300px" }}
          className="bg-gray-600 rounded-md"
        ></div>
      </div>
    </>
  );
}
