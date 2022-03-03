import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section className="bg-main">
      <div className="bg-background bg-fixed min-h-screen object-cover">
        <Navbar></Navbar>
        <div className="container">
          <div className="overflow-hidden flex gap-4 justify-center items-center flex-col text-gray-100">
            <p className="text-xl text-darkgray">Hello, i'm</p>
            <div className="lg:w-2/3 w-full px-6 lg:px-0">
              <img src="/Wisnu-Wicaksono.svg" alt="" className="myImage" />
            </div>
            <div>
              <p className="text-xl text-darkgray mb-4 text-center animated">
                An electrical students who likes to code.
              </p>
            </div>

            <div className="flex justify-center gap-8 text-white opacity-70 social-media">
              <a href="https://www.facebook.com/wiscaksono/">Facebook</a>
              <a href="https://www.instagram.com/amachoker/">Instagram</a>
              <a href="https://www.linkedin.com/in/wiscaksono/">Linkedin</a>
              <a href="https://twitter.com/wiscaksono">Twitter</a>
              <a href="https://github.com/wiscaksono">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
