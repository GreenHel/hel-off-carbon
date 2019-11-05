import React, { Component } from "react";
import Chart from "react-apexcharts";

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
                    enabled: true,
                },
                stroke: {
                    curve: 'straight',
                    colors: ['#fff', 'transparent']
                },
                title: {
                    text: 'Energy Consumption',
                    align: 'left'
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
            series: [{
                name: "Desktops",
                data: [50, 41, 45, 51, 44, 62, 49, 71, 58]
            }],
          }
        }
  
      
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
      
      export default LineChart
      