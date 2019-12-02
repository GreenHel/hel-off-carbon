import React from "react";
import styled from "styled-components";

function VeganChallenge(props) {
  return (
    <Card>
      <BackGroundImage image={props.img}>
        <TextCard>
          <h1>{props.name.id}</h1>
          <h1>{props.name.name}</h1>
          <p>{props.name.content}</p>
        </TextCard>
      </BackGroundImage>

      <PictureCard image={props.img}></PictureCard>
    </Card>
  );
}

const BackGroundImage = styled.div`
  background: linear-gradient(to top, transparent 30%, #2a2a2a 90%),
    linear-gradient(to bottom, transparent 30%, #2a2a2a 90%),
    linear-gradient(to left, transparent 30%, #2a2a2a 90%),
    linear-gradient(to right, transparent 30%, #2a2a2a 90%),
    url(${props => props.image});
  background-size: cover;

  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;

  @media only screen and (min-width: 768px) {
    background-image: none;
    opacity: 1;
  }
`;

const Card = styled.div`
  @media only screen and (min-width: 768px) {
    background-image: none;
    width: 650px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const TextCard = styled.div`
  text-align: left;
  margin: 10%;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  }
`;
const PictureCard = styled.div`
  @media only screen and (min-width: 768px) {
    height: 500px;
    width: 500px;
    background-image: linear-gradient(150deg, transparent 50%, #2a2a2a 90%),
      linear-gradient(0deg, transparent 50%, #2a2a2a 90%),
      linear-gradient(80deg, transparent 50%, #2a2a2a 90%),
      linear-gradient(120deg, transparent 50%, #2a2a2a 90%),
      linear-gradient(200deg, transparent 50%, #2a2a2a 90%),
      linear-gradient(109deg, transparent 50%, #2a2a2a 90%),
      linear-gradient(52deg, transparent 50%, #2a2a2a 90%),
      linear-gradient(280deg, transparent 50%, #2a2a2a 90%),
      url(${props => props.image});
    background-size: cover;
    opacity: 0.5;
  }
`;

export default VeganChallenge;
