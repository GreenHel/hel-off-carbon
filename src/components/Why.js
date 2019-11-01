import React from "react";
import styled from "styled-components";

function Why() {
  return (
    <Wrapper>
       <div>
        <ul>
          <li>What?</li>
          <li className='glow' >Why?</li>
          <li>How?</li>
        </ul>
      </div>
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

export default Why;
