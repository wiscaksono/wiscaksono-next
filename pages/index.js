import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <section className="bg-main bg-fixed">
      <div className="absolute  left-1/2 transform -translate-x-1/2 ">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen object-cover">
        <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="overflow-hidden flex gap-4 justify-center items-center flex-col text-gray-100">
            <p className="text-xl text-darkgray">Hello, i&apos;m</p>
            <div className="lg:w-2/3 w-full px-6 lg:px-0 ">
              <img
                src="/Wisnu-Wicaksono.svg"
                alt=""
                className="myImage"
                draggable="false"
                layout="fill"
              />
            </div>
            <div>
              <p className="text-xl text-darkgray mb-2 text-center animated">
                An electrical students who likes to code.
              </p>
            </div>
            <div className="flex justify-center gap-4 text-white opacity-70 social-media">
              <SocialMedia
                href="https://www.facebook.com/wiscaksono"
                Image="facebook.svg"
              />

              <SocialMedia
                href="https://www.instagram.com/amachoker"
                Image="instagram.svg"
              />
              <SocialMedia
                href="https://www.github.com/wiscaksono"
                Image="github.svg"
              />
              <SocialMedia
                href="https://www.linkedin.com/wiscaksono"
                Image="linkedin.svg"
              />
              <SocialMedia
                href="https://www.twitter.com/wiscaksono"
                Image="twitter.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
