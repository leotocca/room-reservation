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
    countryFilter: undefined,
  };

  componentDidMount() {
    this.setState({ hotels: data });
  }

  handleFilters = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    let dataToShow = undefined;
    const { hotels, priceFilter, countryFilter } = this.state;

    if (priceFilter && countryFilter) {
      dataToShow = hotels.filter(
        (hotel) =>
          hotel.price === Number(priceFilter) && hotel.country === countryFilter
      );
    } else if (priceFilter) {
      dataToShow = hotels.filter(
        (hotel) => hotel.price === Number(priceFilter)
      );
    } else if (countryFilter) {
      dataToShow = hotels.filter((hotel) => hotel.country === countryFilter);
    } else {
      dataToShow = hotels;
    }

    return (
      <div className="w-full flex justify-center items-center flex-col bg-gray-100 antialiased text-gray-800">
        <Header />
        <div className="w-full flex">
          <div className="w-1/4">
            <div className="sticky top-0">
              <Filters handleFilters={this.handleFilters} />
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center">
            {dataToShow &&
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
              ))}
          </div>
        </div>

        <div className="w-full h-24 bg-gray-200 flex justify-center items-center flex-col sticky top-0 z-20"></div>
        <div className="w-full md:w-5/6 flex justify-center items-center"></div>
      </div>
    );
  }
}

export default App;
