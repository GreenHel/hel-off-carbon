import React from 'react'
import styled, { css } from 'styled-components'

const BackGroundImage = styled.div`
  background: linear-gradient(to top, transparent 30%, #2a2a2a 90%),
    linear-gradient(to bottom, transparent 30%, #2a2a2a 90%),
    linear-gradient(to left, transparent 30%, #2a2a2a 90%),
    linear-gradient(to right, transparent 30%, #2a2a2a 90%),
    url(${props => props.image});

  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;

  @media only screen and (min-width: 768px) {
    background-image: none;
    opacity: 1;
  }
`

const Card = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    ${props =>
    props.other &&
      css`
        position: relative;
        z-index: 0;
        height: 500px;
        width: 45%;
      `}

    ${props =>
    props.vegan &&
      css`
        background-image: none;
        width: 650px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      `}
  }
`

const PictureCard = styled.div`
  @media only screen and (min-width: 768px) {
    ${props =>
    props.other &&
      css`
        z-index: 1;
        position: absolute;
        top: 0;
        left: 20%;
      `}

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
`

const TextCard = styled.div`
  text-align: left;
  margin: 10%;

  @media only screen and (min-width: 768px) {
    ${props =>
    props.other &&
      css`
        position: absolute;
        z-index: 2;
        height: 250px;
        width: 350px;
        right: 0;
        text-align: left;
        align-content: right;
      `}

    ${props =>
    props.vegan &&
      css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 50%;
      `}
  }
`

function ElectricChallenge (props) {
  if (props.name.id === '02') {
    return (
      <Card vegan>
        <BackGroundImage vegan image={props.img}>
          <TextCard vegan>
            <h1>{props.name.id}</h1>
            <h1>{props.name.name}</h1>
            <p>{props.name.content}</p>
          </TextCard>
        </BackGroundImage>
        <PictureCard vegan image={props.img} />
      </Card>
    )
  } else {
    return (
      <Card other>
        <BackGroundImage other image={props.img}>
          <PictureCard other image={props.img} />
          <TextCard other>
            <h1>{props.name.id}</h1>
            <h1>{props.name.name}</h1>
            <p>{props.name.content}</p>
          </TextCard>
        </BackGroundImage>
      </Card>
    )
  }
}

export default ElectricChallenge
