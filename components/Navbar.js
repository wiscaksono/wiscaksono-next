import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex gap-10 justify-center text-gray-100 pt-10  w-full poppins ">
      <Link href={"/"}>
        <a
          className={`hover:-translate-y-[2px] active:translate-y-[2px] transition-transform ${
            router.pathname === "/" ? "text-gray-200" : "text-gray-500"
          }`}
        >
          Home
        </a>
      </Link>

      <Link href={"/about"}>
        <a
          className={`hover:-translate-y-[2px] active:translate-y-[2px] transition-transform ${
            router.pathname === "/about" ? "text-gray-200" : "text-gray-500"
          }`}
        >
          About
        </a>
      </Link>

      <Link href={"/artworks"}>
        <a
          className={`hover:-translate-y-[2px] active:translate-y-[2px] transition-transform ${
            router.pathname === "/artworks" ? "text-gray-200" : "text-gray-500"
          }`}
        >
          Artworks
        </a>
      </Link>

      <Link href={"/contact"}>
        <a
          className={`hover:-translate-y-[2px] active:translate-y-[2px] transition-transform ${
            router.pathname === "/contact" ? "text-gray-200" : "text-gray-500"
          }`}
        >
          Contact
        </a>
      </Link>
    </nav>
  );
}
