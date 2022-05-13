import IndexPage from "../components/Head";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import React, { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

export default function artworks() {
  const porto = [
    {
      id: 1,
      title: "Travel Awal",
      image: "/artworks/travel-awal.webp",
      link: "https://travelawal.com/",
      author: "Me & Nakeusa",
      type: "Web Development",
    },
    {
      id: 2,
      title: "Arve Personal Website",
      image: "/artworks/bilal-arve.webp",
      link: "https://arve.vercel.app/",
      author: "Me & Nakeusa",
      type: "Web Development",
    },
    {
      id: 3,
      title: "A+ Studio",
      image: "/artworks/aplus.webp",
      link: "https://aplus-studio.netlify.app/",
      author: "Me",
      type: "Web Development",
    },
    {
      id: 4,
      title: "NFT Market",
      image: "/artworks/nft-market.webp",
      link: "https://nft-wisnu.netlify.app/",
      author: "Me",
      type: "Web Development",
    },
    {
      id: 5,
      title: "Sosiotech",
      image: "/artworks/sosiotech.webp",
      link: "https://sisotech.netlify.app/",
      author: "Me",
      type: "Web Development",
    },
    {
      id: 6,
      title: "Finsweet",
      image: "/artworks/sosiotech.webp",
      link: "https://finsweet-nu.vercel.app/",
      author: "Me",
      type: "Web Development",
    },
  ];

  useEffect(() => {
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false
    );
    gsap.registerPlugin(TextPlugin);
    gsap.from(".atasan", {
      duration: 1,
      delay: 0.5,
      y: 100,
      opacity: 0,
      ease: "power4",
    });
  });
  return (
    <>
      <IndexPage />
      <section className=" bg-main bg-fixed  bg-cover min-h-screen">
        <div className=" bg-fixed object-cover relative">
          <Navbar></Navbar>
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
                {porto.map(({ id, title, image, author, link, type }) => (
                  <Cards
                    key={id}
                    src={image}
                    name={title}
                    author={`By: ${author}`}
                    href={link}
                    type={type}
                  />
                ))}
              </div>
              <div className="hover:-translate-y-2 transition-transform items-center pt-5 pb-10 active:translate-y-[0.12.5rem]">
                <button className="shadow bg-contactbg focus:outline-none focus:ring-2 focus:ring-orangebg transition-all font-bold py-2 px-4 rounded btn-kirim text-darkgray poppins">
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
