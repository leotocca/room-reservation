import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filters = (props) => (
  <div className="w-full">
    <form className="bg-cadetgray rounded-md shadow-lg flex justify-center items-center px-5 py-10">
      <div className="flex flex-col items-start justify-center w-1/4 mx-2">
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

      <div className="flex flex-col items-start justify-center w-1/4 mx-2">
        <label className="text-white font-semibold">Choose a price</label>
        <select
          className="w-full mt-2 py-1 px-2 border-none "
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
      <div className="flex flex-col justify-center mx-2 w-1/4">
        <p className="mb-2 text-white font-semibold">Start date</p>
        <DatePicker
          selected={props.startDate}
          onChange={props.setStartDate}
          selectsStart
          startDate={props.startDate}
          endDate={props.endDate}
        />
      </div>

      <div className="flex flex-col justify-center mx-2 w-1/4">
        <p className="mb-2 text-white font-semibold">End date</p>
        <DatePicker
          selected={props.endDate}
          onChange={props.setEndDate}
          selectsEnd
          startDate={props.startDate}
          endDate={props.endDate}
          minDate={props.startDate}
        />
      </div>

      {/*<DatePicker
        onChange={props.setDates}
        showPopperArrow={false}
        closeOnScroll={true}
        startDate={props.startDate}
        endDate={props.endDate}
        shouldCloseOnSelect={false}
        selectsRange
        inline
        className="mt-10 w-full"
      />*/}
    </form>
  </div>
);

export default Filters;
