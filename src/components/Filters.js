import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filters = (props) => (
  <div className="flex w-full flex-col justify-center items-end">
    <form className="bg-cadetgray rounded-md shadow-lg flex flex-col justify-center px-8 pb-16 pt-10 mt-10 w-full">
      <div className="flex flex-col items-start justify-center w-full ">
        <label className="text-white">País</label>
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
            Ingresar valor
          </option>
          <option className="font-sm px-2 border-gray-100 border-b" value="">
            Todos los paises
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
        <label className="text-white">Precio</label>
        <select
          className="w-full mt-2 mb-12 py-1 px-2 border-none "
          name="priceFilter"
          onChange={props.handleFilters}
        >
          <option value="" disabled selected hidden>
            Ingresar valor
          </option>
          <option value="">Todos los precios</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
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
      </div>
    </form>
  </div>
);

export default Filters;
