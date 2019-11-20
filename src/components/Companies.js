import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";


function Companies() {
  return (
    <Wrapper>
      <Navigation />
      <section>
      <>add some company info</>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
min-height: 100vh;
background-color: #2A2A2A;
color: #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;

div {
  padding: 70px;
  font-family: Neon;
  font-size: 50px;  
  color: #5a5a5a;
}
`;


export default Companies;
