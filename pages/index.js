import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import IndexPage from "../components/Head";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

export default function Home() {
  useEffect(() => {
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false
    );
    gsap.registerPlugin(TextPlugin);
    gsap.from(".navbar", {
      duration: 1,
      delay: 0.5,
      y: 100,
      opacity: 0,
      ease: "power4",
    });
    gsap.from(".atasan", {
      duration: 1,
      delay: 0.5,
      y: 100,
      opacity: 0,
      ease: "power4",
    });
    gsap.from(".social-media", {
      duration: 1,
      delay: 3.5,
      y: 100,
      opacity: 0,
      ease: "power4",
    });
    gsap.to(".animated", {
      duration: 2,
      delay: 1.5,
      text: "An electrical student who likes to code.",
    });
  });

  return (
    <>
      <IndexPage />
      <section className="bg-main bg-cover bg-fixed">
        <div className="absolute  left-1/2 transform -translate-x-1/2 navbar">
          <Navbar></Navbar>
        </div>
        <div className="min-h-screen object-cover">
          <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="overflow-hidden flex gap-4 justify-center items-center flex-col text-gray-100 relative atasan">
              <p className="text-xl text-darkgray poppins">Hello, i&apos;m</p>
              <div className="lg:w-2/3 w-full px-6 lg:px-0 hover:scale-105 transition-transform">
                <img
                  src="/Wisnu-Wicaksono.svg"
                  alt=""
                  className="myImage"
                  draggable="false"
                  layout="fill"
                />
              </div>
              <div className="absolute bottom-6">
                <p className="text-xl text-darkgray mb-2 text-center animated poppins"></p>
              </div>
              <div className="flex justify-center gap-4 text-white opacity-70 social-media mt-10">
                <SocialMedia
                  href="https://www.facebook.com/wiscaksono"
                  img="facebook.svg"
                />

                <SocialMedia
                  href="https://www.instagram.com/amachoker"
                  img="instagram.svg"
                />
                <SocialMedia
                  href="https://www.github.com/wiscaksono"
                  img="github.svg"
                />
                <SocialMedia
                  href="https://www.linkedin.com/wiscaksono"
                  img="linkedin.svg"
                />
                <SocialMedia
                  href="https://www.twitter.com/wiscaksono"
                  img="twitter.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
