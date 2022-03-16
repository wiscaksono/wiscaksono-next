import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <div className="bg-main bg-fixed">
        <div className="flex justify-center items-center h-screen flex-col">
          <div className="w-1/4 mb-10 hover:-translate-y-1 transition-transform">
            <img
              src="/404.svg"
              alt=""
              className="w-full h-full"
              draggable="false"
            />
          </div>
          <Link href="/" passHref>
            <button
              className="shadow bg-contactbg focus:outline-none focus:ring-2 focus:ring-orangebg transition-all text-darkgray font-bold py-2 px-4 rounded btn-kirim"
              type="submit"
            >
              Go back home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
