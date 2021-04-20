import Image from "next/image";
import React from "react";

function Contact(props, ref) {
  return (
    <>
      <div className="mx-8 md:mx-28 lg:mx-40 xl:mx-80 my-40 text-gray-100 tracking-wide">
        <div ref={ref} className="h-3"></div>
        <div className="flex items-center">
          <h1 className="text-3xl tracking-wider ">Contact</h1>
          <div className="w-full ml-3 border-t border-gray-600"></div>
        </div>

        <p className="mt-8 text-gray-400 sm:text-center">Connect with me</p>

        <div className="mt-12 flex justify-center items-center">
          <LogoImage
            url="/images/GitHub.svg"
            href="https://github.com/cocotran"
            style=""
          />
          <LogoImage
            url="/images/LinkedIn.svg"
            href="https://www.linkedin.com/in/quang-anh-tran/"
            style="ml-12 sm:ml-24 lg:ml-40"
          />
          <LogoImage
            url="/images/Twitter.svg"
            href="https://twitter.com/CoChimps"
            style="ml-12 sm:ml-24 lg:ml-40"
          />
        </div>
      </div>
    </>
  );
}

const forwardedContact = React.forwardRef(Contact);

export default forwardedContact;

export function LogoImage({ url, href, style }) {
  return (
    <a href={href} className={style}>
      <Image src={url} alt={url} width={40} height={40} />
    </a>
  );
}
