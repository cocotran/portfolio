export default function SmallProjectCard() {
  return (
    <>
      <div className="w-full py-8 px-8 bg-gray-700 rounded-md text-gray-400">
        <p className="tracking-wider text-sm text-white">Colculator</p>

        <p className="mt-8 text-xs leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio
          ut est tristique mollis. Donec condimentum lorem non congue fringilla.
          Ut purus justo, pretium eget nulla nec.
        </p>

        <div className="mt-8 flex text-xxs">
          <p>Next.js</p>
          <p className="ml-3">Flask</p>
          <p className="ml-3">Firebase</p>
        </div>
      </div>
    </>
  );
}
