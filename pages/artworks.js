import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
export default function artworks() {
  return (
    <section className="bg-main no-scrollbar">
      <div className="bg-background bg-fixed min-h-screen object-cover">
        <Navbar></Navbar>
        <div className="mt-10 container">
          <div className="flex items-center justify-center flex-col">
            <img
              src="artwork.svg"
              alt=""
              className="my-10 lg:w-1/2 w-80 hover:-translate-y-2 transition-transform"
            />
            <p className="px-6 mb-10 text-center lg:px-0 text-darkgray">
              I like to learn about things related to 3d design and editing.
              these are some of my works!.
            </p>

            <img
              src="line.svg"
              alt=""
              className="lg:w-1/2 w-72 my-10 myImage"
            />

            <div className="grid gap-6 px-6 pb-10 mt-8 lg:grid-cols-3 lg:px-0 md:grid-cols-2">
              <Cards src="aplus.png" name="A+ Studio" author="By: Me" />
              <Cards src="sosiotech.png" name="Sosiotech" author="By: Me" />
              <Cards
                src="nft-market.png"
                name="NFT Marketplace"
                author="By: Me"
              />
              <Cards src="moonlight.webp" name="A+ Studio" author="By: Me" />

              <Cards src="moonlight.webp" name="A+ Studio" author="By: Me" />
              <Cards src="moonlight.webp" name="A+ Studio" author="By: Me" />
            </div>
            <div className="hover:-translate-y-2 transition-transform items-center pt-5 pb-10">
              <button className="shadow bg-contactbg focus:outline-none focus:ring-2 focus:ring-orangebg transition-all text-darkgray font-bold py-2 px-4 rounded btn-kirim">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
