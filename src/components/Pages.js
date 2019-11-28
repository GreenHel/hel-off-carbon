import React from "react";
import styled from "styled-components"; 
import VeganChallenge from "./VeganChallenge";
import ElectricChallenge from "./ElectricChallenge";
import PageContent from "../content/PageContent";
import ElectricImage from '../images/electric.jpg'
import VeganImage from '../images/vegan.jpg'
import MovingImage from '../images/moving.jpg'



function Pages(props) {



return (

  <Background>
    <Wrapper>
    <ElectricChallenge  name={PageContent[0]} img={ElectricImage} />
    <VeganChallenge name={PageContent[1]} img={VeganImage} />
    <ElectricChallenge  name={PageContent[2]} img={MovingImage} />
    </Wrapper>
    </Background>
  );
}

const Background = styled.div`
background-color: #2a2a2a;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
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
`;


export default Pages;
