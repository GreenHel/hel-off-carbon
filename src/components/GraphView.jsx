import React from "react";
import styled from "styled-components";
import LineChart from "./LineChart";
import Grid from "@material-ui/core/Grid";

/* Styled Components */

const Background = styled.div`
background-color: #f2f1ed;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
  min-width:95%;
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

  .Countdown {
    margin: 10px auto;
    padding-bottom: 20px;
  }

  .Countdown-col {
    display: inline-block;
  }

  .Countdown-col-element {
    display: inline-block;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
  }

  .Countdown-col-element strong {
    font-size: 95px;
  }
`;

function GraphView() {
  return (
    <Background>
    <Wrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <div className="heltext">
            Hel
            <br />
            Off
            <br />
            Carbon
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LineChart />
        </Grid>
      </Grid>
    </Wrapper>
    </Background>
  );
}

export default GraphView;
