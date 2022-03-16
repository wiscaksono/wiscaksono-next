import Navbar from "../components/Navbar";
export default function contact() {
  return (
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
