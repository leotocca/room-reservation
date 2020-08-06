import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filters = (props) => (
  <div className="flex w-full flex-col justify-center">
    <form className="bg-cadetgray rounded-md shadow-lg flex flex-col justify-center items-center px-5 lg:px-8 pb-10 lg:pb-16 pt-5 lg:pt-10 -mt-12 mb-12 lg:mt-10 w-5/6 lg:w-full z-10">
      <div className="flex flex-col items-start justify-center w-full ">
        <label className="text-white font-semibold">Choose a country</label>
        <select
          className="w-full mt-2 py-1 px-2 border-none "
          name="countryFilter"
          onChange={props.handleFilters}
        >
          <option
            className="font-sm px-2 border-gray-100 border-b"
            value=""
            disabled
            selected
            hidden
          >
            Select country
          </option>
          <option className="font-sm px-2 border-gray-100 border-b" value="">
            All countries
          </option>
          <option
            className="font-sm px-2 border-gray-100 border-b"
            value="Argentina"
          >
            Argentina
          </option>
          <option
            className="font-sm px-2 border-gray-100 border-b"
            value="Brasil"
          >
            Brasil
          </option>
          <option
            className="font-sm px-2 border-gray-100 border-b"
            value="Uruguay"
          >
            Uruguay
          </option>
        </select>
      </div>

      <div className="flex flex-col items-start justify-center w-full mt-10">
        <label className="text-white font-semibold">Choose a price</label>
        <select
          className="w-full mt-2 mb-12 py-1 px-2 border-none "
          name="priceFilter"
          onChange={props.handleFilters}
        >
          <option value="" disabled selected hidden>
            Select price
          </option>
          <option value="">All prices</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <DatePicker
        onChange={props.setDates}
        showPopperArrow={false}
        closeOnScroll={true}
        startDate={props.startDate}
        endDate={props.endDate}
        shouldCloseOnSelect={false}
        selectsRange
        inline
        className="mt-10 w-full"
      />
    </form>
  </div>
);

export default Filters;
