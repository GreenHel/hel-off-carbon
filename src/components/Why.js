import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";


function Why() {
  return (
    <Wrapper>
      <Navigation />
      <section>
        <p>
          Morbi sodales at enim sed porttitor. Vestibulum vitae magna consequat,
          faucibus felis non, fermentum lorem. Vivamus viverra est justo.
          Suspendisse lacus nisi, ornare gravida lorem sit amet, iaculis
          vulputate elit. Vivamus non erat at nunc egestas sagittis eget ac
          urna. Proin ac iaculis ante. Proin tincidunt ipsum eu pharetra
          lobortis. Nam auctor fermentum turpis, facilisis iaculis odio
          hendrerit ac. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. In hendrerit, dolor eu consequat
          porttitor, ante nibh sodales libero, a finibus nisl diam ac tellus.
        </p>
        <p>
          Nulla ornare a dui pellentesque imperdiet. Fusce nec dolor semper,
          aliquet risus eget, dignissim nisl. Vestibulum nec iaculis metus. Nam
          vitae volutpat dui, non ultricies eros. Aenean vitae leo laoreet,
          faucibus lorem a, sagittis libero. Nulla id dignissim augue. Quisque
          laoreet tristique purus, eu rutrum mi consequat ut.
        </p>
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
export default Why;
