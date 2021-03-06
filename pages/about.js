import IndexPage from "../components/Head";
import Navbar from "../components/Navbar";
import React, { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

export default function About() {
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
      <section className="bg-main bg-fixed bg-cover min-h-screen">
        <div className="">
          <Navbar></Navbar>
          <div className="mt-10 container atasan">
            <div className="flex flex-col items-center justify-center ">
              <div className="mb-10 lg:w-1/2 w-72  md:w-1/2 hover:scale-105 transition-transform myImage">
                <img src="mypict.webp" alt="" draggable="false" />
              </div>
              <div className="w-[192px] mb-10 lg:1/3 hover:-translate-y-2 transition-transform duration-[400ms]">
                <img
                  src="aboutme.svg"
                  alt=""
                  className="w-full myImage"
                  draggable="false"
                />
              </div>
              <p className="leading-relaxed text-center align-center text-darkgray w-[576px] poppins">
                I am an active 8th semester student at the <span> </span>
                <span className="decoration-orangebg/50 underline underline-offset-4">
                  Institute of Technology-PLN
                </span>{" "}
                majoring in{" "}
                <span className="decoration-orangebg/50 underline underline-offset-4">
                  {" "}
                  Electrical Engineering
                </span>
                . I am also a sociable person, able to work well together, and
                able to implement the material that I understand. Besides, I can
                operate various programming languages.
              </p>
              <img
                draggable="false"
                src="line.svg"
                alt=""
                className="lg:w-1/2 w-72 my-10 myImage"
              />
              <img
                draggable="false"
                src="organisasi.svg"
                alt=""
                className="lg:w-1/2 w-72 hover:-translate-y-2 transition-transform my-10 myImage"
              />

              <ul className="max-w-md  px-6 mx-auto lg:max-w-xl lg:px-0 list-disc text-darkgray mb-10 poppins">
                <li>
                  Part of Study Independent Kampus Merdeka at Artificial
                  Intelligence Center Indonesia (AICI)
                </li>
                <li>
                  Internship protection unit maintenance at PT. Indonesian Power
                </li>
                <li>
                  Head of the PDD Division 2021 student leadership basic
                  training
                </li>
                <li>
                  ITPLN control system laboratory assistant. 2020 - Present
                </li>
                <li>Charger 2020 magazine initiator & editor</li>
                <li>
                  Basic Training of HME STT-PLN Student Leadership in 2019
                </li>
                <li>
                  Member of the PDD Bubertro division (Buka Bersama Elektro) HME
                  STT-PLN in 2019
                </li>
                <li>
                  Active Member of Research and Technopreneurship 2019 - Present
                </li>
                <li>
                  Members of the PDD division for the introduction and training
                  of the early stages of electrical students (PLTAME) in 2019
                </li>
                <li>
                  Member of the 2019 PDD Electro Culture Festival (HUT HME)
                  division
                </li>
                <li>
                  PDD division member Pre-TD student management skills training
                  2019
                </li>
                <li>Pre-TD 2018 student management skills training</li>
                <li>
                  Introduction and initial training for electrical students
                  (PLTAME) HME STT-PLN in 2018
                </li>
                <li>
                  2018 industrial automation engineering competency test
                  participants
                </li>
                <li>
                  Electrical unit maintenance at PT. Krakatau Wajatama 2017
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
