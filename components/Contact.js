import React from "react";

function Contact(props, ref) {
  return (
    <>
      <div className="mx-8 md:mx-28 lg:mx-80 mt-40 text-gray-100 tracking-wide">
        <div ref={ref} className="h-3"></div>
        <div className="flex items-center">
          <h1 className="lg:text-xl tracking-wider ">Contact</h1>
          <div className="w-60 ml-3 border-t border-gray-600"></div>
        </div>

        <div className="h-80"></div>
      </div>
    </>
  );
}

const forwardedContact = React.forwardRef(Contact);

export default forwardedContact;
