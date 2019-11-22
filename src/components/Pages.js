import React from "react";
import styled from "styled-components"; 


function Pages(props) {



return (
    <Wrapper>
    <TextBox>
      <h1>{props.name.name}</h1>
      <section>
        <p>{props.name.content1}</p>
        <p>{props.name.content2}</p>
      </section>
      </TextBox>
    </Wrapper>
  );
}
Pages.defaultProps = {name:'content'};

const TextBox = styled.div`
  max-width: 610px
`;

const Info = styled.div`
  font-size: 20px;
  line-height: 30px;
  max-width: 600px;
`;

const Wrapper = styled.div`
min-height: 100vh;
background-color: #2A2A2A;
color: #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;

h1{
font-family: Neon;
  margin-left: 1em;
  margin-right: 1em;
}
p {
  margin-left: 1em;
  margin-right: 1em;
  text-align: left;
}

@media only screen and (max-width: 610px) {
    flex-direction: column;
    justify-content: center;
  }

`;

const LogoText = styled.div`
  padding: 70px;
  font-family: Neon;
  font-size: 50px;  
  color: #5a5a5a;
`;

export default Pages;
