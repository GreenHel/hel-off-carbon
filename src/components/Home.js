import React from "react";
import styled from "styled-components";
import Countdown from "./Countdown";

const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

function Home() {
  return (
    <Wrapper>
      <div className="title">HEL OFF CARBON EVENT</div>
      <Countdown date={`${year}-12-24T00:00:00`} />
      <section>
        <h1>12301253252kWh</h1>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
min-height: calc(100vh - 50px);
background-color: #2A2A2A;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 70px;

  div.title {
    font-size: 40px;
    font-weight: bold;
  }
  section {
    p {
      font-size: 20px;
    }
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

export default Home;
