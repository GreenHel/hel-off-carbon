import React from "react";
import styled from "styled-components";
import ElectricImage from "../images/electric.jpg";

const BackGroundImage = styled.div`
  background: url(${props => props.img.url});
  width: 100%;
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
    <div style={{ color: "black" }}>
      <h1>{props.name.name}</h1>
      <section>
        <p>{props.name.content}</p>
      </section>
      <BackGroundImage img={img}></BackGroundImage>
    </div>
  );
}

export default PopupComponent;
