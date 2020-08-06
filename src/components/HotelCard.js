import React from "react";

const HotelCard = (props) => (
  <div className="w-5/6 md:w-1/3 lg:mx-10 mt-12 lg:my-8">
    <div className="relative rounded-sm overflow-hidden pb-3/4 shadow">
      <img
        className="h-full w-full absolute top-0 object-cover object-center"
        src={props.photo}
        alt={props.name}
      />
    </div>
    <div className="px-2 lg:px-8 -mt-10 relative">
      <div className="p-6 rounded-md bg-white shadow-md h-auto flex flex-col items-start justify-center">
        <div className="flex">
          <p className="text-sm font-semibold uppercase text-gray-600 tracking-wide">
            {props.rooms} rooms - Price:
          </p>
          <div className="flex ml-1 items-center">
            {Array(props.price).fill(
              <svg
                className="h-4 w-4 fill-current text-darkseagreen"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z"
                />
              </svg>
            )}
          </div>
        </div>

        <h4 className="font-semibold text-xl text-gray-900 tracking-wide mt-2">
          {props.name}
        </h4>
        <p className="mt-2 text-md">{props.description}</p>

        <p className="text-sm font-semibold uppercase text-gray-600 tracking-wide mt-5">
          {props.city} - {props.country}
        </p>

        <a
          href={props.url}
          className="text-center py-2 w-full bg-flame text-white uppercase tracking-wider mt-10 font-semibold hover:bg-cadetgray hover:text-champagne cursor-pointer"
        >
          Reservar
        </a>
      </div>
    </div>
  </div>
);

export default HotelCard;
