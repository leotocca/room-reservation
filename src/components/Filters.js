import React from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

const countryOptions = [
  { value: "allCountries", label: "All countries" },
  { value: "Argentina", label: "Argentina" },
  { value: "Uruguay", label: "Uruguay" },
  { value: "Brasil", label: "Brasil" },
  { value: "Chile", label: "Chile" },
];

const priceOptions = [
  { value: "allPrices", label: "All prices" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

const sizeOptions = [
  { value: "allSizes", label: "All sizes" },
  { value: "small", label: "- 10 rooms" },
  { value: "medium", label: "+ 10 rooms" },
  { value: "big", label: "+ 20 rooms" },
];

const Filters = (props) => (
  <div className="w-full">
    <form className="bg-cadetgray rounded-md shadow-lg flex flex-col justify-start items-center px-5 pt-8 pb-8">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col items-start justify-center w-full my-3 lg:my-0 lg:w-1/4 mx-2">
          <p className="mb-2 text-white font-semibold">Select a size</p>
          <Select
            placeholderText="Select a size"
            options={sizeOptions}
            onChange={props.handleSizeFilter}
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full my-3 lg:my-0 lg:w-1/4 mx-2">
          <p className="mb-2 text-white font-semibold">Select a price</p>
          <Select
            placeholderText="Select a price range"
            options={priceOptions}
            onChange={props.handlePriceFilter}
            isSearchable
            className="w-full"
          />
        </div>

        <div className="flex flex-col items-start justify-center w-full my-3 lg:my-0 lg:w-1/4 mx-2">
          <p className="mb-2 text-white font-semibold">Select a country</p>
          <Select
            placeholderText="Select a destination"
            options={countryOptions}
            onChange={props.handleCountryFilter}
            isSearchable
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-center mx-2 w-full my-3 lg:my-0 lg:w-1/4">
          <p className="mb-2 text-white font-semibold">Start date</p>
          <DatePicker
            selected={props.startDate}
            onChange={props.setStartDate}
            selectsStart
            isClearable
            startDate={props.startDate}
            endDate={props.endDate}
            placeholderText="Click to select a date"
            className="rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col justify-center mx-2 w-full my-3 lg:my-0 lg:w-1/4">
          <p className="mb-2 text-white font-semibold">End date</p>
          <DatePicker
            selected={props.endDate}
            onChange={props.setEndDate}
            selectsEnd
            isClearable
            startDate={props.startDate}
            endDate={props.endDate}
            minDate={props.startDate}
            placeholderText="Click to select a date"
            className="rounded p-2 w-full"
          />
        </div>
      </div>
      {props.endDate && props.startDate && (
        <div className="text-white mt-6 text-lg ">
          Available hotels from {dayjs(props.startDate).format("MMMM D, YYYY")}{" "}
          to {dayjs(props.endDate).format("MMMM D, YYYY")}
        </div>
      )}
    </form>
  </div>
);

export default Filters;
