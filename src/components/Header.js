import React from "react";

const backgroundImg = "./src/assets/images/header.png";

const Header = () => (
  <div
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(${backgroundImg})`,
    }}
    className="w-full h-screen bg-red-200 flex items-center justify-center flex-col mb-20 shadow-md bg-scroll bg-center bg-no-repeat bg-cover"
  >
    <div className="w-1/2 flex flex-col items-start justify-center">
      <h1 className="text-white text-4xl">
        Spectacular escenery one click away
      </h1>

      <p className="text-white text-lg mt-4">
        Get ready to love your weekends one more time. <br /> Stay in the best
        and most unknown resorts in South America.
      </p>
    </div>
  </div>
);

export default Header;
