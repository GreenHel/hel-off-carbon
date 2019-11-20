import React from "react";
import styled from "styled-components";
import LineChart from "./LineChart";

function GraphView() {
    return (
        <Wrapper>
          <section>
            <div className="heltext">
            Hel<br />Off<br />Carbon
            </div>
            <LineChart />
          </section>
        </Wrapper>
      );
    }
    
    const Wrapper = styled.div`
background-color: #2A2A2A;
min-height: 100vh;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

  div.title {
    font-size: 40px;
    font-weight: bold;
  }
  section {
    display: flex;
    flex-direction: row;
  
  }
  
  .heltext {
    font-family: Neon;
    font-size: 50px;
    text-align: left;
    
  }

  .Countdown{
    margin: 10px auto;
    padding-bottom: 20px;
  }
  
  .Countdown-col{
    display: inline-block;
  }
  
  .Countdown-col-element{
    display: inline-block;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
  }
  
  .Countdown-col-element strong{
    font-size: 95px;
  }
`;

    export default GraphView;