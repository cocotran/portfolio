import Image from "next/image";
import React from "react";

function Contact(props, ref) {
  return (
    <>
      <div className="mx-8 md:mx-28 lg:mx-80 my-40 text-gray-100 tracking-wide">
        <div ref={ref} className="h-3"></div>
        <div className="flex items-center">
          <h1 className="lg:text-xl tracking-wider ">Contact</h1>
          <div className="w-60 ml-3 border-t border-gray-600"></div>
        </div>

        <p className="mt-8 text-xs lg:text-sm text-gray-400">Connect with me</p>

        <div className="mt-12 flex justify-center items-center">
          <LogoImage url="/images/GitHub.svg" style="" />
          <LogoImage url="/images/LinkedIn.svg" style="ml-12" />
          <LogoImage url="/images/Twitter.svg" style="ml-12" />
        </div>
      </div>
    </>
  );
}

const forwardedContact = React.forwardRef(Contact);

export default forwardedContact;

export function LogoImage({ url, style }) {
  return (
    <div className={style}>
      <Image src={url} alt={url} width={40} height={40} />
    </div>
  );
}
