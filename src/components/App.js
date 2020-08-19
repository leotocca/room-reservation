import React from "react";
import HotelCard from "./HotelCard";
import Filters from "./Filters";
import Header from "./Header";
// import Drawings from "./drawings/Drawings";
import data from "../assets/scripts/data";
import "../styles.css";

class App extends React.Component {
  state = {
    hotels: undefined,
    priceFilter: undefined,
    countryFilter: undefined,
    startDate: undefined,
    endDate: undefined,
  };

  componentDidMount() {
    this.setState({ hotels: data });
  }

  handleCountryFilter = (event) => {
    console.log(event);
    this.setState({ countryFilter: event.value });
  };

  handlePriceFilter = (event) => {
    console.log(event);
    this.setState({ priceFilter: event.value });
  };

  setStartDate = (date) => {
    this.setState({ startDate: date });
  };

  setEndDate = (date) => {
    this.setState({ endDate: date });
  };

  filterByDate = (hotels) => {
    const { startDate, endDate } = this.state;

    return hotels.filter(
      (hotel) =>
        hotel.availabilityFrom <= new Date(startDate).valueOf() &&
        hotel.availabilityTo >= new Date(endDate).valueOf()
    );
  };

  filterByPrice = (hotels) => {
    const { priceFilter } = this.state;
    return hotels.filter((hotel) => hotel.price === Number(priceFilter));
  };

  filterByCountry = (hotels) => {
    const { countryFilter } = this.state;
    return hotels.filter((hotel) => hotel.country === countryFilter);
  };

  filterData = () => {
    const {
      hotels,
      priceFilter,
      countryFilter,
      startDate,
      endDate,
    } = this.state;

    let hotelsToShow = [];

    if (priceFilter && countryFilter && startDate) {
      hotelsToShow = this.filterByPrice(
        this.filterByDate(this.filterByCountry(hotels))
      );
    }

    if (countryFilter && priceFilter) {
      hotelsToShow = this.filterByCountry(this.filterByPrice(hotels));
    }

    if (priceFilter) {
      hotelsToShow = this.filterByPrice(hotels);
    }

    return hotels;
  };

  render() {
    const dataToShow = this.filterData();

    return (
      <div className="overflow-hidden flex justify-center items-center flex-col bg-gray-100 antialiased text-gray-800">
        <Header />
        <div className="w-full flex flex-col items-center" id="hotels">
          <h3 className="text-cadetgray border-b-2 border-darkseagreen w-5/12 text-center pb-4 text-4xl mt-20 mb-16">
            Amaze yourself with our resorts
          </h3>
          <div className="w-11/12 lg:w-2/3">
            <Filters
              handleCountryFilter={this.handleCountryFilter}
              handlePriceFilter={this.handlePriceFilter}
              setStartDate={this.setStartDate}
              setEndDate={this.setEndDate}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />
          </div>
          <div className="flex w-full flex-col items-center lg:items-start lg:flex-row lg:mt-24">
            <div className="w-full flex flex-wrap justify-center">
              {dataToShow && dataToShow.length !== 0 ? (
                dataToShow.map((hotel) => (
                  <HotelCard
                    key={hotel.slug}
                    photo={hotel.photo}
                    name={hotel.name}
                    description={hotel.description}
                    rooms={hotel.rooms}
                    city={hotel.city}
                    country={hotel.country}
                    price={hotel.price}
                  />
                ))
              ) : (
                <div className="mt-10 bg-flame text-white shadow-md rounded-md h-16 flex justify-center items-center px-10">
                  <h1 className="text-lg font-semibold">
                    No hotels match your search. Please, try another one.
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-24 bg-gray-200 flex justify-center items-center flex-col sticky top-0 z-20"></div>
        <div className="w-full md:w-5/6 flex justify-center items-center"></div>
      </div>
    );
  }
  // <div className="flex flex-col items-center relative -mr-16 ml-16 mt-20">
  //   <Drawings />
  // </div>
}

export default App;
