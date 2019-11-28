import React from "react";
import styled from "styled-components"; 
import VeganChallenge from "./VeganChallenge";
import ElectricChallenge from "./ElectricChallenge";


function Pages(props) {

  console.log(props.dark)


return (

  <Background>
    <Wrapper>
    <ElectricChallenge />
    <VeganChallenge />
    </Wrapper>
    </Background>
  );
}

const Background = styled.div`
background-color: #2a2a2a;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 15px;
`;

Pages.defaultProps = {name:'content'};


const Wrapper = styled.div`

min-height: 100vh;
min-width: 95%;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-betweens;
text-align: center;

}

@media only screen and (max-width: 610px) {
    flex-direction: column;
    justify-content: center;
  }

`;


export default Pages;
