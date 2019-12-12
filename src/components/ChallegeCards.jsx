import React from 'react'
import styled, { css } from 'styled-components'

/* Styled Components */

const CardContainer = styled.div`

  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 65%;

    ${props =>
    props.other &&
      css`
        display: flex;
        justify-content: flex-start;
      `}

    ${props =>
    props.vegan &&
      css`
        display: flex;

        justify-content: flex-end;
      `}
  }
`

const BackGroundImage = styled.div`

  background: linear-gradient(to top, transparent 30%, #2a2a2a 90%),
    linear-gradient(to bottom, transparent 30%, #2a2a2a 90%),
    linear-gradient(to left, transparent 30%, #2a2a2a 90%),
    linear-gradient(to right, transparent 30%, #2a2a2a 90%),
    url(${props => props.image});

  background-repeat: no-repeat;
  background-size: cover;

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

        position: relative;
        right: 0;
        z-index: 0;
        height: 500px;
        width: 650px;

  }
`

const ImageCard = styled.div`

    

    background-image: linear-gradient(150deg, transparent 65%, #2a2a2a 90%),
      linear-gradient(0deg, transparent 65%, #2a2a2a 90%),
      linear-gradient(80deg, transparent 65%, #2a2a2a 90%),
      linear-gradient(120deg, transparent 65%, #2a2a2a 90%),
      linear-gradient(200deg, transparent 65%, #2a2a2a 90%),
      linear-gradient(109deg, transparent 65%, #2a2a2a 90%),
      linear-gradient(52deg, transparent 65%, #2a2a2a 90%),
      linear-gradient(280deg, transparent 65%, #2a2a2a 90%),
      url(${props => props.image});

    background-size: cover;
    opacity: 0.7;


  @media only screen and (min-width: 768px) {

    height: 500px;
    width: 500px;

    ${props =>
    props.other &&
      css`
        z-index: 1;
        position: absolute;
        left: 0;
      `}
      ${props =>
    props.vegan &&
      css`
        z-index: 1;
        position: absolute;
        right: 0;
      `}
    
    
  }
`

const TextCard = styled.div`

  text-align: left;
  max-width: 65%;
  margin: 10%;

  @media only screen and (min-width: 768px) {

    margin: 0;
    height: 250px;
    width: 350px;
    position: absolute;
    z-index: 2;
    text-align: left;

    
    ${props =>
    props.other &&
      css`
        right: 0;
        top: 25%;
        align-content: right;
      `}

    ${props =>
    props.vegan &&
      css`
        left: 0;
        top: 25%;
        align-content: left;
      `}
  }
`

function ElectricChallenge (props) {
  if (props.name.id === '02') {
    return (
      <CardContainer vegan>
        <Card vegan>
          <BackGroundImage vegan image={props.img}>
          <ImageCard other image={props.img} />
            <TextCard vegan>
              <h1>{props.name.id}</h1>
              <h1 style={{color: '#00D8AC'}}>{props.name.name}</h1>
              <p>{props.name.content}</p>
            </TextCard>
          </BackGroundImage>
        </Card>
      </CardContainer>
    )
  } else {
    return (
      <CardContainer other>
        <Card other>
          <BackGroundImage other image={props.img}>
            <ImageCard other image={props.img} />
            <TextCard other>
              <h1>{props.name.id}</h1>
              <h1 style={{color: '#00D8AC'}}>{props.name.name}</h1>
              <p>{props.name.content}</p>
            </TextCard>
          </BackGroundImage>
        </Card>
      </CardContainer>
    )
  }
}

export default ElectricChallenge
