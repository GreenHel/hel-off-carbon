import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";


function How() {
  return (
    <Wrapper>
       <Navigation />
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

export default How;
