import React from "react";
import BannerCard from "../home/BannerCard";

function Banner() {
  return (
    <div className="px-4 1g:px-24 bg-teal-100 flex items-center overflow-hidden">
      <div className="flex w-full flex-col md:flex-row justify-evenly items-center gap-12 py-40">
        {/* left side */}
        <div className="md: w-1/2 space-y-8 h-full">
          <h2 className="text-5x1 font-bold leading-snug ☐ text-black">
            Buy and Sell Your Books{" "}
            <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md: w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            perspiciatis repellat omnis, officia dolore deleniti excepturi
            sapiente error incidunt odit optio? Ipsum nulla deserunt quia enim.
            Corporis labore distinctio alias?
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2
    px-2 rounded-s-sm outline-none"
            />
            <button
              className="☐ bg-blue-700 px-6 py-2 ■text-white font-medium ☐ hover:bg-black
    transition-all ease-in duration-200"
            >
              Search
            </button>
          </div>
        </div>
        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
}

export default Banner;
