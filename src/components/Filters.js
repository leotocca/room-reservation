import React from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const countryOptions = [
  { value: "argentina", label: "Argentina" },
  { value: "uruguay", label: "Uruguay" },
  { value: "brasil", label: "Brasil" },
];

const priceOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

const Filters = (props) => (
  <div className="w-full">
    <form className="bg-cadetgray rounded-md shadow-lg flex justify-center items-center px-5 py-10">
      <div className="flex flex-col items-start justify-center w-1/4 mx-2">
        <Select
          placeholderText="Select a price range"
          options={priceOptions}
          onChange={props.handlePriceFilter}
          isSearchable
          className="w-full"
        />
      </div>

      <div className="flex flex-col items-start justify-center w-1/4 mx-2">
        <Select
          placeholderText="Select a destination"
          options={countryOptions}
          onChange={props.handleCountryFilter}
          isSearchable
          className="w-full"
        />
      </div>
      <div className="flex flex-col justify-center mx-2 w-1/4">
        <p className="mb-2 text-white font-semibold">Start date</p>
        <DatePicker
          selected={props.startDate}
          onChange={props.setStartDate}
          selectsStart
          startDate={props.startDate}
          endDate={props.endDate}
          placeholderText="Click to select a date"
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
          placeholderText="Click to select a date"
        />
      </div>
    </form>
  </div>
);

export default Filters;
