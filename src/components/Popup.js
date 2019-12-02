import React from "react";
import styled from "styled-components";
import ElectricImage from "../images/electric.jpg";

const BackGroundImage = styled.div`
  background: url(${props => props.img.url});
  max-width: 100%;
  height: 290px;
`;

const TextCard = styled.div`
  text-align: left;
  margin: 10%;
`;
BackGroundImage.defaultProps = {
  img: {
    url: "../images/electric.jpg"
  }
};

function PopupComponent(props) {
  const img = {
    url: props.img
  };

  return (
    <div style={{ color: "black", margin: "0 auto", maxWidth: "390px" }}>
      <h1>{props.name.name}</h1>
      <section>
        <p>{props.name.content}</p>
      </section>
      <BackGroundImage img={img}></BackGroundImage>
    </div>
  );
}

export default PopupComponent;
