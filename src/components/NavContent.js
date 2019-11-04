import React, { Component, useState, useEffect } from "react";
import Barometer from "./Barometer";
import axios from "axios";
class NavContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentMonth: new Date().getMonth()
    };
  }

  componentDidMount = async () => {
    const { currentMonth } = this.state;

    const response = await axios.get(
    );

    this.setState({
      data: response.data
    });
  };

  render() {
    const { currentMonth, data } = this.state;
    const currentYear = new Date().getFullYear();
    return (
      <div>
        <h1 className="glow">What?</h1>
        <h1 className="glow">Why?</h1>
        <h1 className="glow">How?</h1>
        {this.state.data.length > 0 && (
          <div style={{ display: "flex" }}>
            <Barometer
              kWh={data[0].Value}
              date={currentMonth - 2 + "-" + currentYear}
            />
            <Barometer
              kWh={data[1].Value}
              date={currentMonth - 1 + "-" + currentYear}
            />
            <Barometer
              kWh={data[2].Value}
              date={currentMonth + "-" + currentYear}
            />
          </div>
        )}
      </div>
    );
  }
}
export default NavContent;
