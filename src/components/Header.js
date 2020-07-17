import React from "react";

const backgroundImg = "./src/assets/images/header.jpg";

const Header = () => (
  <div
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${backgroundImg})`,
    }}
    className="w-full relative h-screen bg-red-200 flex items-center justify-center flex-col mb-20 shadow-md bg-scroll bg-center bg-no-repeat bg-cover"
  >
    <div className="flex justify-center items-center flex-col w-full">
      <div className="absolute top-0 left-0">
        <p className="text-champagne text-2xl mt-8 ml-12">
          deep<span className="font-semibold">South</span>
        </p>
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center">
        <h1 className="text-champagne text-5xl font-semibold leading-tight w-5/6 mt-8">
          Relax in some of the world's most amazing views
        </h1>

        <p className="text-champagne text-xl mt-4  w-7/12">
          Chill out in some of the most exclusive and best reviewed resorts and
          B&B of
          <span className="font-semibold"> South America</span>.
        </p>
        <a
          href="#hotels"
          className="font-semibold border-springbud border-2 text-springbud px-5 py-2 mt-8 rounded-sm hover:bg-springbud hover:text-gray-800 hover:border-springbud"
        >
          Check out the dates for your dream vacation
        </a>
      </div>
    </div>
  </div>
);

export default Header;
