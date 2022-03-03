import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex gap-10 justify-center text-gray-100 pt-10  w-full poppins ">
      <button
        type="button"
        className="hover:opacity-100 opacity-50 hover:-translate-y-1 transition-all"
        onClick={() => router.push("/")}
      >
        Home
      </button>
      <button
        type="button"
        className="hover:opacity-100 opacity-50 hover:-translate-y-1 transition-all"
        onClick={() => router.push("/about")}
      >
        About
      </button>
      <button
        type="button"
        className="hover:opacity-100 opacity-50 hover:-translate-y-1 transition-all"
        onClick={() => router.push("/artworks")}
      >
        Artworks
      </button>
      <button
        type="button"
        className="hover:opacity-100 opacity-50 hover:-translate-y-1 transition-all"
        onClick={() => router.push("/contact")}
      >
        Contact
      </button>
    </nav>
  );
}
