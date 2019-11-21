import React from "react";
import styled from "styled-components"; 


function Pages(props) {



return (
    <Wrapper>
      <h1>{props.name.name}</h1>
      <section>
        <p>{props.name.content1}</p>
        <p>{props.name.content2}</p>
      </section>

    </Wrapper>
  );
}
Pages.defaultProps = {name:'content'};


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
`;

const LogoText = styled.div`
  padding: 70px;
  font-family: Neon;
  font-size: 50px;  
  color: #5a5a5a;
`;

export default Pages;
