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
    startDate: new Date("2014/02/10"),
    endDate: new Date("2014/02/20"),
  };

  componentDidMount() {
    this.setState({ hotels: data });
  }

  handleFilters = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  setStartDate = (date) => {
    const [start] = date;
    this.setState({ startDate: start });
  };

  setEndDate = (date) => {
    const [end] = date;
    this.setState({ endDate: end });
  };

  filterData = () => {
    const {
      hotels,
      priceFilter,
      countryFilter,
      startDate,
      endDate,
    } = this.state;

    if (priceFilter && countryFilter && startDate) {
      return hotels.filter((hotel) => {
        if (!endDate) {
          return (
            hotel.price === Number(priceFilter) &&
            hotel.country === countryFilter &&
            hotel.availabilityFrom <= new Date(startDate).valueOf()
          );
        } else {
          return (
            hotel.price === Number(priceFilter) &&
            hotel.country === countryFilter &&
            hotel.availabilityFrom <= new Date(startDate).valueOf() &&
            hotel.availabilityTo >= new Date(endDate).valueOf()
          );
        }
      });
    } else if (priceFilter && countryFilter) {
      return hotels.filter(
        (hotel) =>
          hotel.price === Number(priceFilter) && hotel.country === countryFilter
      );
    } else if (priceFilter) {
      return hotels.filter((hotel) => hotel.price === Number(priceFilter));
    } else if (countryFilter) {
      return hotels.filter((hotel) => hotel.country === countryFilter);
    } else {
      return hotels;
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
          <div className="w-11/12 lg:w-2/3">
            <Filters
              handleFilters={this.handleFilters}
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
