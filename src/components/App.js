import React from "react";
import HotelCard from "./HotelCard";
import Filters from "./Filters";
import Header from "./Header";
import Drawings from "./drawings/Drawings";
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

  handleFilters = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  setDates = (dates) => {
    const [start, end] = dates;
    this.setState({ startDate: start, endDate: end });
  };

  filterData = () => {
    const { hotels, priceFilter, countryFilter } = this.state;

    if (priceFilter && countryFilter) {
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
    let dataToShow = this.filterData();
    console.log("Datatoshow:", dataToShow);

    return (
      <div className="w-full flex justify-center items-center flex-col bg-gray-100 antialiased text-gray-800">
        <Header />
        <div className="w-full flex flex-col items-center" id="hotels">
          <div className="w-full flex justify-center mt-10">
            <h3 className="text-cadetgray border-b-2 border-darkseagreen w-5/12 text-center pb-4 text-4xl">
              Amaze yourself with our resorts
            </h3>
          </div>
          <div className="flex w-full mt-24">
            <div className="w-1/4">
              <div className="sticky top-0 -mr-16 ml-16 z-10">
                <Filters
                  handleFilters={this.handleFilters}
                  setDates={this.setDates}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-center">
              {dataToShow ? (
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
                <div>
                  <h1>No hotels match your search! Please, try another one!</h1>
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
