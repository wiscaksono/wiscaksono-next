import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

export default function Cards({ src, name, author, href, type }) {
  const [showModal, setShowModal] = React.useState(false);

  // useEffect(() => {
  //   const close = (e) => {
  //     if (e.keyCode === 27) {
  //       setShowModal(true);
  //     }
  //   };
  //   console.log("wakwaw");
  //   return () => window.removeEventListener("keydown", close);
  // }, []);

  return (
    <>
      <div onClick={() => setShowModal(true)} className="cursor-pointer">
        <div className="overflow-hidden relative rounded hover:shadow-2xl hover:scale-105 hover:rounded-xl transition-all duration-[400ms] ">
          <div>
            <p className="absolute top-0 left-0 px-3 py-1 bg-orangebg/70 rounded-br-2xl poppins text-xs text-white font-medium">
              {type}
            </p>
          </div>
          <div className=" aspect-square">
            <img
              src={src}
              alt=""
              className="object-cover myImage w-full h-full"
              draggable="false"
            />
          </div>
          <div className="flex items-center justify-center px-4 py-2 bg-contactbg active:translate-y-[0.12.5rem]">
            <div className="poppins text-center">
              <h1 className="font-bold text-white">{name}</h1>
              <p className="text-darkgray">{author}</p>
            </div>
            {/* <div>
              <a
                href={href}
                className="text-orangebg font-semibold poppins cursor-pointer"
                rel="noreferrer"
                target="_blank"
              >
                Demo
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl ">
              <div className="flex items-center justify-center gap-3 flex-col">
                <h1 className="playfair text-white text-4xl">{name}</h1>
                <div className="relative">
                  <i
                    className="las la-times-circle text-white absolute top-[1%] right-[1%] cursor-pointer text-3xl"
                    onClick={() => setShowModal(false)}
                  ></i>
                  <img src={src} alt="" className="rounded-xl w-full h-full" />
                </div>
                <button className="shadow bg-contactbg focus:outline-none focus:ring-2 focus:ring-orangebg transition-all font-bold py-2 px-4 rounded btn-kirim text-darkgray poppins">
                  <a
                    href="https://drive.google.com/file/d/16mwWPNsXXwSDnxrV8KpidrdHnUTMF1KE/preview"
                    target="_blank"
                  >
                    Download
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-[85%] fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
