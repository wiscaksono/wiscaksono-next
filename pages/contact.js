import Navbar from "../components/Navbar";
export default function contact() {
  return (
    <section className="bg-main no-scrollbar">
      <div className="bg-background bg-fixed min-h-screen object-cover">
        <Navbar></Navbar>
        <div className="mt-10 container">
          <div className="flex items-center justify-center flex-col">
            <img
              src="contactme.svg"
              alt=""
              className="w-1/3 mb-10 lg:w-1/3 hover:-translate-y-2 transition-transform  myImage animate-bounce mt-10"
            />
            <p className="px-6 mb-10 text-center lg:px-0 text-darkgray">
              Send me a message and don't be shy!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
