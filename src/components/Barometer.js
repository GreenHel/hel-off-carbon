import ZingChart from "zingchart-react";
import React, { Component } from "react";

const Barometer = props => {
  const chartConfig = {
    graphset: [
      {
        type: "gauge",
        "background-color": "black",

        width: "70%",
        height: "100%",
        x: "0px",
        y: "0px",
        title: {
          text: "Engine RX 2564",
          bold: false,
          fontColor: "#515151",
          y: "80%"
        },
        subtitle: {
          text: "rpm",
          bold: false,
          fontSize: "15px",
          y: "59%"
        },
        plot: {
          tooltip: {
            visible: false
          },
          csize: "14%",
          size: "56%"
        },
        plotarea: {
          marginBottom: "20%"
        },
        scale: {
          sizeFactor: 0.9
        },
        scale2: {
          sizeFactor: 0.55
        },
        scaleR: {
          values: "0:10:1",
          aperture: 320,
          center: {
            visible: false
          },
          item: {
            visible: false
          },
          ring: {
            backgroundColor: "#C1C1C1",
            size: "20px"
          },
          tick: {
            visible: false
          }
        },
        scaleR2: {
          values: "0:100:10",
          aperture: 290,
          center: {
            backgroundColor: "#BEBEBE",
            borderColor: "#5F5F5F",
            borderWidth: "1px",
            size: "14px"
          },
          item: {
            fontSize: "16px",
            offsetR: -1
          },
          label: {
            text: "text"
          },
          minorTick: {
            lineColor: "#C1C1C1",
            placement: "inner",
            size: "7px"
          },
          minorTicks: 4,
          ring: {
            visible: false
          },
          tick: {
            lineColor: "#5F5F5F",
            lineWidth: "4px",
            placement: "outter",
            size: "15px"
          }
        },
        series: [
          {
            values: [50],
            valueBox: {
              text: "%v",
              fontColor: "#515151",
              fontSize: "28px",
              offsetY: "40px",
              placement: "center"
            },
            backgroundColor: "#F8B237"
          }
        ]
      }
    ]
  };

  return <ZingChart data={chartConfig} />;
};

export default Barometer;
