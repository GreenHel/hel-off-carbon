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
      `https://cors-anywhere.herokuapp.com/https://nuukacustomerwebapi.azurewebsites.net/api/v2.0/GetMonthlyKPIs/?&building=1748&starttime=2019-${currentMonth -
        2}-1&endtime=2019-${currentMonth}-31&kpiids=2&$format=json&$token=dUlWYjY3T0l3b2MrSTVOWlFkM1hQUG5vL1Q4MEZjdnFERDZvVmxwRFUwUT06anVoby5wZXNzaTo2MzcwODM4MzI4NjU4MjAwNjc6VHJ1ZQ==`
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
