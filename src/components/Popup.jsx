import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const BackGroundImage = styled.div`
  background: url(${props => props.img.url});
  max-width: 100%;
  height: 290px;
`;

BackGroundImage.defaultProps = {
  img: {
    url: ""
  }
};

function PopupComponent(props) {
  const img = {
    url: props.img
  };

  return (
    <div
      style={{
        color: "black",
        margin: "0 auto",
        maxWidth: "390px",
        backgroundColor: "white",
        position: "relative"
      }}
    >
      <CloseIcon
        onClick={props.close}
        style={{
          position: "absolute",
          right: 0
        }}
      />
      <h1>{props.name.name}</h1>
      <section>
        <p>{props.name.content}</p>
      </section>
      <BackGroundImage img={img}></BackGroundImage>
    </div>
  );
}

export default PopupComponent;
