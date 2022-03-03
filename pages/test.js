import Link from "next/link";
import Scroller from "../components/scroller";
import Lorem from "../components/lorem";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Box = () => {
  const $box = useRef();

  useEffect(() => {
    gsap.to($box.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: $box.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinType: "transform",
        scrub: true,
        pinSpacing: false,
      },
    });
  }, []);

  return <div className="box" ref={$box} />;
};

export default function test() {
  return (
    <Scroller>
      <h1>Home</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <hr />
      <Box />
      <Lorem />
    </Scroller>
  );
}
