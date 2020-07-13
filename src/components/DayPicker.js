import React from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

export default class DayPicker extends React.Component {
  state = {
    startDate: new Date(),
    endDate: null,
    key: "selection",
  };

  handleOnChange = (item) => {
    console.log(item);
  };

  render() {
    return (
      <div>
        <DateRange
          editableDateInputs={true}
          onChange={this.handleOnChange}
          moveRangeOnFirstSelection={false}
          ranges={this.state}
        />
      </div>
    );
  }
}
