import React from "react";
import styled from "styled-components";
import Countdown from "./Countdown";

const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

function Home() {
  return (
    <Wrapper>
      <div className="title">HELSINKI CLIMATE DAY</div>
      <Countdown date={`${year}-12-24T00:00:00`} />
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
    font-family: neon;
    font-size: 16px;
    font-weight: bold; 
  }

  @media screen and (min-width: 320px) {
    div.title {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }
  }
  @media screen and (min-width: 1000px) {
    div.title {
      font-size: 40px;
    }
  }


  section {
    display: flex;
    flex-direction: row;
  
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
  
 
  .Countdown-col-element {
    font-size: 20px;
    font-weight: bold; 
  }

  @media screen and (min-width: 320px) {
    .Countdown-col-element {
      font-size: calc(22px + 6 * ((100vw - 320px) / 680));
      font-weight: bold; 

    }
  }
  @media screen and (min-width: 1000px) {
    .Countdown-col-element {
      font-size: 90px;
      font-weight: bold;
    }
  }
`;

export default Home;
