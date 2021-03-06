import IndexPage from "../components/Head";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import React, { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useState } from "react";

export default function artworks() {
  // useEffect(() => {
  //   window.addEventListener(
  //     "contextmenu",
  //     function (e) {
  //       e.preventDefault();
  //     },
  //     false
  //   );
  //   gsap.registerPlugin(TextPlugin);
  //   gsap.from(".atasan", {
  //     duration: 1,
  //     delay: 0.5,
  //     y: 100,
  //     opacity: 0,
  //     ease: "power4",
  //   });
  // });

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/62aecb7b402a5b38022e9b96/7")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <IndexPage />
      <section className=" bg-main bg-fixed  bg-cover min-h-screen">
        <div className=" bg-fixed object-cover relative">
          <Navbar />
          <div className="mt-10 container atasan">
            <div className="flex items-center justify-center flex-col">
              <img
                draggable="false"
                src="artwork.svg"
                className="my-10 lg:w-1/2 w-80 hover:-translate-y-2 transition-transform"
                alt=""
              />
              <p className="px-6  text-center lg:px-0 text-darkgray poppins">
                I like to learn about things related to
                <span> </span>
                <span className="decoration-orangebg/50 underline underline-offset-4">
                  3D design
                </span>
                <span> </span>
                and
                <span> </span>
                <span className="decoration-orangebg/50 underline underline-offset-4">
                  editing.
                </span>
                <span> </span>
                these are some of my works!
              </p>

              <img
                draggable="false"
                src="line.svg"
                alt=""
                className="lg:w-1/2 w-72 my-10 myImage"
              />
              <div className="grid gap-6 px-6 pb-10 mt-8 lg:grid-cols-3 lg:px-0 md:grid-cols-2">
                {items.slice(0, visible).map((item) => (
                  <Cards
                    key={item.id}
                    src={item.image}
                    name={item.title}
                    author={`By: ${item.author}`}
                    href={item.link}
                    type={item.type}
                  />
                ))}
              </div>
              <div className="hover:-translate-y-2 transition-transform items-center pt-5 pb-10 active:translate-y-[0.12.5rem]">
                <button
                  className="shadow-2xl bg-contactbg focus:outline-none focus:ring-2 focus:ring-orangebg transition-all font-bold py-2 px-4 rounded btn-kirim text-darkgray poppins"
                  onClick={showMoreItems}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
