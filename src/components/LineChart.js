import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "straight",
          colors: ["#fff", "transparent"]
        },
        title: {
          text: "Energy Consumption",
          align: "left"
        },
        grid: {
          show: false
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      series: [
        {
          name: "Desktops",
          data: []
        }
      ]
    };
  }
  componentDidMount = async () => {
    const currentMonth = new Date().getMonth();
    const startMonth = currentMonth - 7;
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://nuukacustomerwebapi" +
        ".azurewebsites.net/api/v2.0/GetMonthlyKPIs/" +
        "?&building=1748&starttime=2019-" +
        startMonth +
        "-1&endtime=2019-" +
        currentMonth +
        "-31&kpiids=2&$format=json&$token=" +
        API_KEY
    );
    const data = response.data.map(item => Math.round(item.Value));
    this.setState({
      series: [
        {
          name: "Desktops",
          data: data
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="500"
        />
      </div>
    );
  }
}

export default LineChart;
