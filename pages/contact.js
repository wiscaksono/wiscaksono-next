import IndexPage from "../components/Head";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzkv3sdldund4wHzYM2pa23-dv4DbwJ4yM8eAzFW8v8XKes-dBTC_KM5V2Ju3Cp6mAb/exec";
    const form = document.forms["portofolio-contact-form"];
    const btnKirim = document.querySelector(".btn-kirim");
    const btnLoading = document.querySelector(".btn-loading");
    const myAlert = document.querySelector(".my-alert");
    const yukKirim = document.querySelector(".yuk-kirim");
    const silangBtn = document
      .getElementById("silang-btn")
      .addEventListener("click", resetForm);

    function resetForm() {
      form.reset();
      myAlert.classNameList.toggle("hidden");
      yukKirim.classNameList.toggle("hidden");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      btnLoading.classNameList.toggle("hidden");
      btnKirim.classNameList.toggle("pointer-events-none");

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          btnLoading.classNameList.toggle("hidden");
          btnKirim.classNameList.toggle("pointer-events-none");
          btnKirim.classNameList.toggle("focus:ring-2");
          btnKirim.classNameList.toggle("focus:ring-orangebg");
          myAlert.classNameList.toggle("hidden");
          yukKirim.classNameList.toggle("hidden");

          form.reset();
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    });
  }, []);

  return (
    <>
      <IndexPage />
      <section className="bg-main no-scrollbar bg-fixed">
        <div className="bg-background bg-fixed min-h-screen object-cover">
          <Navbar></Navbar>
          <div className="mt-10 container">
            <div className="flex items-center justify-center flex-col">
              <img
                src="contactme.svg"
                alt=""
                className="w-1/3 mb-10 lg:w-1/3 hover:-translate-y-2 transition-transform  myImage animate-bounce mt-10"
              />
              <p className="px-6 mb-10 text-center lg:px-0 text-darkgray poppins">
                Send me a message and don&apos;t be shy!
              </p>
              <div
                className="hidden mb-10 bg-contactbg border border-orangebg text-darkgray px-10 py-3 rounded relative my-alert"
                role="alert"
              >
                <span className="block sm:inline">
                  Your message have been sent!
                </span>
                <span
                  className="absolute -top-3 -right-3 bg-contactbg rounded-full"
                  id="silang-btn"
                >
                  <svg
                    className="fill-current h-6 w-6 text-orangebg"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
              <form
                autoComplete="off"
                name="portofolio-contact-form"
                className="w-full max-w-lg px-6 lg:px-0 poppins"
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      autoComplete="off"
                      name="firstname"
                      className="appearance-none block w-full bg-contactbg text-darkgray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-orangebg transition-all"
                      id="grid-first-name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      autoComplete="off"
                      name="lastname"
                      className="appearance-none block w-full bg-contactbg text-darkgray rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-orangebg transition-all"
                      id="grid-last-name"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      E-mail
                    </label>
                    <input
                      autoComplete="off"
                      name="email"
                      className="appearance-none block w-full bg-contactbg text-darkgray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-orangebg transition-all"
                      id="email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Message
                    </label>
                    <textarea
                      autoComplete="off"
                      name="message"
                      className="no-resize appearance-none block w-full bg-contactbg text-darkgray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-orangebg transition-all h-48 resize-none"
                      id="message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center flex items-center gap-1 mb-4 lg:md-0">
                  <div className="md:w-1/3 hover:-translate-y-2 transition-transform">
                    <button
                      className="shadow bg-contactbg focus:outline-none focus:ring-2 focus:ring-orangebg transition-all text-darkgray font-bold py-2 px-4 rounded btn-kirim"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                  <div>
                    <div className="loader ml-2 lg:ml-0 hidden flex gap-2 btn-loading top">
                      <div className="w-2 h-2 bg-darkgray animate-bounce rounded-full"></div>
                      <div className="w-2 h-2 bg-darkgray animate-bounce rounded-full"></div>
                      <div className="w-2 h-2 bg-darkgray animate-bounce rounded-full"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbzkv3sdldund4wHzYM2pa23-dv4DbwJ4yM8eAzFW8v8XKes-dBTC_KM5V2Ju3Cp6mAb/exec";
// const form = document.forms["portofolio-contact-form"];
// const btnKirim = document.querySelector(".btn-kirim");
// const btnLoading = document.querySelector(".btn-loading");
// const myAlert = document.querySelector(".my-alert");
// const yukKirim = document.querySelector(".yuk-kirim");
// const silangBtn = document
//   .getElementById("silang-btn")
//   .addEventListener("click", resetForm);

// function resetForm() {
//   form.reset();
//   myAlert.classNameList.toggle("hidden");
//   yukKirim.classNameList.toggle("hidden");
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   btnLoading.classNameList.toggle("hidden");
//   btnKirim.classNameList.toggle("pointer-events-none");

//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       btnLoading.classNameList.toggle("hidden");
//       btnKirim.classNameList.toggle("pointer-events-none");
//       btnKirim.classNameList.toggle("focus:ring-2");
//       btnKirim.classNameList.toggle("focus:ring-orangebg");
//       myAlert.classNameList.toggle("hidden");
//       yukKirim.classNameList.toggle("hidden");

//       // form.reset();
//       console.log("Success!", response);
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
