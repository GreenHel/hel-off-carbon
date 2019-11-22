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


export default Pages;
