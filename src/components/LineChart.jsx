import React from "react";
import axios from "axios";
import LineChart from "react-linechart";
import "../../node_modules/react-linechart/dist/styles.css";
import { SlideToggleContent } from "./SlideToggle";
import "../styles/chart.css";

// Importing API-key from Heroku CVARS.
const API_KEY = process.env.REACT_APP_API_KEY;
class LineChartComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isVisible: false
    };
  }
  componentDidMount = async () => {
    const currentMonth = new Date().getMonth();
    const startMonth = currentMonth - 7;
    try {
      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://nuukacustomerwebapi" +
          ".azurewebsites.net/api/v2.0/GetMonthlyKPIs/" +
          "?&building=1748&starttime=2019-" +
          startMonth +
          "-1&endtime=2019-" +
          currentMonth +
          "-30&kpiids=2&$format=json&$token=" +
          API_KEY
      );
      const data = response.data.map((item, i) => ({
        color: "steelblue",

        x: startMonth + i,
        y: Math.round(item.Value)
      }));

      this.setState({
        data: [{ color: "steelblue", points: data }]
      });
    } catch (e) {
      console.log(e);
    }
  };

  setIsVisible = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <button type="button" onClick={() => this.setIsVisible()}>
          {this.state.isVisible ? "Close" : "Open"} content
        </button>
        <SlideToggleContent isVisible={this.state.isVisible}>
          <div>
            <LineChart
              width={500}
              height={400}
              data={this.state.data}
              xLabel="Month"
              yLabel="kWh"
              labelClass="label"
            />

            <p>
              Helsingin rakennuksen kuukausittainen sähkönkulutus viimeisen 8
              kuukauden aikana.
            </p>
          </div>
        </SlideToggleContent>
      </div>
    );
  }
}

export default LineChartComponent;
