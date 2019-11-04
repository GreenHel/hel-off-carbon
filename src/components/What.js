import React from "react";
import styled from "styled-components"; 
import Navigation from "./Navigation";


function What() {
  return (
    <Wrapper>
     <Navigation />
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Fusce imperdiet suscipit posuere. Aliquam sed consectetur eros.
          Praesent nec malesuada est. Quisque vel turpis viverra, condimentum
          mauris at, imperdiet ex. Duis vitae velit vestibulum, bibendum justo
          vitae, pellentesque velit. Morbi quis posuere ante. Nulla consequat
          condimentum dolor, sed ullamcorper mi condimentum et. Sed vitae
          efficitur metus. Donec vitae bibendum metus. Maecenas ultrices
          hendrerit enim a porttitor. Mauris vitae ante vel metus fermentum
          lacinia. In non placerat metus, vitae laoreet felis. Cras aliquet erat
          ut placerat molestie. Ut tristique orci a leo tempus condimentum.
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
min-height: 100vh;
background-color: #191919;
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

export default What;
