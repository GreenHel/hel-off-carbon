import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import Countdown from "./Countdown";

const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
=======
import Navigation from "./Navigation";
>>>>>>> a50a5a840d5c78f203b6c689babe7c452e2d5119

function Home() {
  return (
    <Wrapper>
<<<<<<< HEAD
      <div className="title">HEL OFF CARBON EVENT HAPPENING IN:</div>
      <Countdown date={`${year}-12-24T00:00:00`} />
=======
    <Navigation />
      <div className="title">HELL OF CARBOOON</div>
>>>>>>> a50a5a840d5c78f203b6c689babe7c452e2d5119
      <section>
        <h1>12301253252kWh</h1>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
<<<<<<< HEAD
min-height: calc(100vh - 50px);
background-color: #2A2A2A;
=======
min-height: 100vh;
background-color: #191919;
>>>>>>> a50a5a840d5c78f203b6c689babe7c452e2d5119
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
