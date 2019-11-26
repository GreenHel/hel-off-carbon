import React from "react";
import styled from "styled-components"; 


function Pages(props) {



return (
  <Background>
    <Wrapper>
      <Card>
      <h1>{props.name.name}</h1>
      <section>
        <p>{props.name.content1}</p>
        <p>{props.name.content2}</p>
      </section>
      </Card>
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
`;

Pages.defaultProps = {name:'content'};

const Card = styled.div`
width: 100vh;
min-height: 90vh;
background-color: #d0cfcf;
opacity: 0.8;
box-shadow: 2px 5px 5px #2a2a2a;`;

const Wrapper = styled.div`

background-color: #7a7d7d;
min-height: 100vh;
min-width: 95%;
color: #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;

h1{
font-family: Neon;
}
`;


export default Pages;
