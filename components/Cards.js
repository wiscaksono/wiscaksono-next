import React from "react";

export default function Cards({ src, name, author, href }) {
  return (
    <>
      <div className="overflow-hidden rounded hover:shadow-2xl hover:scale-105 hover:rounded-xl transition-all duration-[400ms] ">
        <div className=" aspect-square">
          <img
            src={src}
            alt=""
            className="object-cover myImage w-full h-full"
            draggable="false"
          />
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-contactbg active:translate-y-[0.12.5rem]">
          <div className="poppins">
            <h1 className="font-bold text-white">{name}</h1>
            <p className="text-darkgray">{author}</p>
          </div>
          <div>
            <a
              href={href}
              className="text-orangebg font-semibold poppins "
              rel="noreferrer"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
