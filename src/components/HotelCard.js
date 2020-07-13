import React from "react";

const HotelCard = (props) => (
  <div className="w-3/4 md:w-1/3 mx-10 my-8">
    <div className="relative rounded-sm overflow-hidden pb-3/4 shadow">
      <img
        className="h-full w-full absolute top-0 object-cover object-center"
        src={props.photo}
        alt={props.name}
      />
    </div>
    <div className="px-8 -mt-10 relative">
      <div className="p-6 rounded-md bg-white shadow-md h-auto flex flex-col items-start justify-center">
        <div className="flex">
          <p className="text-sm font-semibold uppercase text-gray-600 tracking-wide">
            {props.rooms} rooms - Price:
          </p>
          <div className="flex ml-1 items-center">
            {Array(props.price).fill(
              <svg
                className="h-4 w-4 fill-current text-teal-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
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
          className="text-center py-2 w-full bg-teal-500 text-white uppercase tracking-wider mt-10 font-semibold hover:bg-teal-400"
        >
          Reservar
        </a>
      </div>
    </div>
  </div>
);

export default HotelCard;
