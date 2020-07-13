import React from "react";

const Filters = (props) => {
  return (
    <form className="flex w-full flex-col justify-center items-center">
      <div className="bg-grey rounded-md shadow-lg flex flex-col justify-center px-8 py-8 mt-10">
        <div className="flex flex-col items-start justify-center w-full ">
          <label className="text-white">País</label>
          <select
            className="w-full mt-2"
            name="countryFilter"
            onChange={props.handleFilters}
          >
            <option value="" disabled selected hidden>
              Ingresar valor
            </option>
            <option value="">Todos los paises</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Uruguay">Uruguay</option>
          </select>
        </div>

        <div className="flex flex-col items-start justify-center w-full mt-10">
          <label className="text-white">Precio</label>
          <select
            className="w-full mt-2"
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
        </div>
      </div>
    </form>
  );
};

export default Filters;
