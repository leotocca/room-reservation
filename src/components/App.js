import React from "react";
import HotelCard from "./HotelCard";
import Filters from "./Filters";
import Header from "./Header";
import data from "../assets/scripts/data";
import "../styles.css";

class App extends React.Component {
  state = {
    hotels: undefined,
    priceFilter: undefined,
    sizeFilter: undefined,
    countryFilter: undefined,
    startDate: undefined,
    endDate: undefined,
  };

  componentDidMount() {
    this.setState({ hotels: data });
  }

  handleSizeFilter = (event) => {
    this.setState({
      sizeFilter: event.value !== "allSizes" ? event.value : undefined,
    });
  };

  handleCountryFilter = (event) => {
    this.setState({
      countryFilter: event.value !== "allCountries" ? event.value : undefined,
    });
  };

  handlePriceFilter = (event) => {
    this.setState({
      priceFilter: event.value !== "allPrices" ? event.value : undefined,
    });
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

  filterBySize = (hotels) => {
    const { sizeFilter } = this.state;

    if (sizeFilter === "small") {
      return hotels.filter((hotel) => hotel.rooms < 10);
    } else if (sizeFilter === "medium") {
      return hotels.filter((hotel) => hotel.rooms >= 10 && hotel.rooms <= 20);
    } else {
      return hotels.filter((hotel) => hotel.rooms > 20);
    }
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
      sizeFilter,
      startDate,
    } = this.state;

    if (hotels) {
      let hotelsToShow = [...hotels];

      if (sizeFilter) {
        hotelsToShow = this.filterBySize(hotelsToShow);
      }

      if (priceFilter) {
        hotelsToShow = this.filterByPrice(hotelsToShow);
      }

      if (countryFilter) {
        hotelsToShow = this.filterByCountry(hotelsToShow);
      }

      if (startDate) {
        hotelsToShow = this.filterByDate(hotelsToShow);
      }

      return hotelsToShow;
    }
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
          <div className="w-11/12 lg:w-3/4">
            <Filters
              handleSizeFilter={this.handleSizeFilter}
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
        <div className="w-full h-24 mt-32 bg-gray-200 flex justify-center items-center flex-col sticky top-0 z-20"></div>
        <div className="w-full md:w-5/6 flex justify-center items-center"></div>
      </div>
    );
  }
}

export default App;
