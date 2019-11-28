import React from 'react'
import styled from 'styled-components'
import ElectricImage from '../images/electric.jpg'





const BackGroundImage = styled.div`

    background:
    linear-gradient(to top, transparent 30%, #2a2a2a 90%),
    linear-gradient(to bottom, transparent 30%, #2a2a2a 90%),
    linear-gradient(to left, transparent 30%, #2a2a2a 90%),
    linear-gradient(to right, transparent 30%, #2a2a2a 90%),
    url(${props => props.img.url});    

    background-size: cover;

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

@media only screen and (min-width: 768px) {

  position: relative;
  z-index: 0;
  height: 400px;
  width: 45%;
  }
  `

const PictureCard = styled.div`

@media only screen and (min-width: 768px) {
    height: 500px;
    width: 500px;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 20%;
    background-image:  
    linear-gradient(150deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(0deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(80deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(120deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(200deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(109deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(52deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(280deg, transparent 50%, #2a2a2a 90%),
    url(${ElectricImage}) ;
    
    background-size: cover;
    opacity: 0.5;


} 
`

const TextCard = styled.div`

  text-align: left;
  margin: 10%;

  @media only screen and (min-width: 768px) {

  position: absolute;
  z-index: 2;
  height: 250px;
  width: 350px;
  right: 0;
  text-align: left;
  align-content: right;
  }
`
BackGroundImage.defaultProps = {
  img: {
    url: "../images/electric.jpg"
  }
}

function ElectricChallenge (props) {
  
  const img = {
    url: props.img
  };

  console.log(img.url)
  return (
    <Card div id='Uloin laatikko'>
                  <BackGroundImage img={img}>
              <PictureCard>
            </PictureCard>
      <TextCard>
        <h1>{props.name.id}</h1>
        <h1>{props.name.name}</h1>
        <section>
          <p>
            {props.name.content}
          </p>
        </section>
      </TextCard>
      </BackGroundImage>
    </Card>
  )
}

export default ElectricChallenge
