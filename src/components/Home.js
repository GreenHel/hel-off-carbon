import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <div className="title">HELL OF CARBOOON</div>
      <section>
        <h1>12301253252kWh</h1>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
min-height: calc(100vh - 50px);
background-color: #191919;
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
`;

export default Home;
