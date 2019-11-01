import React from "react";
import styled from "styled-components";

function What() {
  return (
    <Wrapper>
      <div>
        <ul>
          <li className='glow'>What?</li>
          <li>Why?</li>
          <li>How?</li>
        </ul>
      </div>
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
min-height: calc(100vh - 50px);
background-color: #191919;
color: #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;
padding: 70px;

  div {
    padding: 70px;
    font-family: Neon;
    font-size: 50px;  
    color: #5a5a5a;
  }

  .glow {
    font-size: 80px;
    color: #fff;
    text-align: center;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
  }
  
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f5f3f4,
        0 0 40px #f5f3f4, 0 0 50px #f5f3f4, 0 0 60px #f5f3f4, 0 0 70px #f5f3f4;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #f5f3f4, 0 0 40px #f5f3f4,
        0 0 50px #f5f3f4, 0 0 60px #f5f3f4, 0 0 70px #f5f3f4, 0 0 80px #f5f3f4;
    }
  }
}
  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default What;
