import React from "react";
import styled from "styled-components";

function How() {
  return (
    <Wrapper>
       <div>
        <ul >
          <li >What?</li>
          <li>Why?</li>
          <li className='glow'>How?</li>
        </ul>
      </div>
      <section>
        <p>
          Curabitur eu feugiat magna, ut malesuada est. In sit amet placerat
          erat, quis ornare augue. Proin mi nulla, pretium vel dictum vel,
          ornare sed tellus. Phasellus congue placerat metus. Cras eleifend
          justo quis hendrerit bibendum. Aliquam erat volutpat. Nulla sed neque
          at ante iaculis mollis a id sem. Suspendisse potenti.
        </p>
        <p>
          Praesent eu lorem euismod, convallis nisl in, cursus metus. Cras dolor
          eros, fringilla id erat et, sollicitudin rhoncus lectus. Phasellus non
          vestibulum massa, vel ornare ligula. Quisque accumsan leo eget nibh
          mattis tempor. Nunc imperdiet diam ut enim viverra, non porta lorem
          bibendum. Phasellus et pulvinar enim. Nunc elementum quam metus, et
          venenatis nunc viverra eget. Sed quis lacinia enim. Ut sit amet
          elementum lacus, nec porta elit. Sed dignissim feugiat vehicula. Nunc
          et commodo orci.
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

export default How;
