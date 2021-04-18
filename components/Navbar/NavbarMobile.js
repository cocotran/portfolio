import Image from "next/image";

function NavbarMobile({ display }) {
  return (
    <>
      <nav
        className={
          display +
          " fixed top-0 w-full px-8 md:px-28 lg:px-80 py-5 flex justify-end text-xs text-gray-100 border-b border-gray-700 shadow-xl bg-gray-900"
        }
      >
        <Image src="/images/menu.svg" alt="Arrow" width={30} height={30} />
      </nav>
    </>
  );
}

export default NavbarMobile;
