import React from 'react'
import styled from 'styled-components'
import ElectricImage from '../images/electric.jpg'

const Container = styled.div`
  position: relative;
  z-index: 0;
  height: 400px;
  width: 45%;
  /* border: 2px solid #fff; */
`

const PictureCard = styled.div`

@media only screen and (min-width: 768px) {
    height: 500px;
    width: 500px;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 30%;
    background-image:  
    linear-gradient(150deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(0deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(80deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(120deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(200deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(109deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(52deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(280deg, transparent 50%, #2a2a2a 90%),url(${ElectricImage}) ;
    background-size: cover;
    opacity: 0.5;


} 
`

const TextCard = styled.div`
  position: absolute;
  z-index: 2;
  height: 250px;
  width: 350px;
  bottom: 30%;
  right: 0;
  text-align: left;
`

function ElectricChallenge () {
  return (
    <Container div id='Uloin laatikko'>
              <PictureCard>
            </PictureCard>
      <TextCard div id='Tekstilaatikko'>
        <h1>01</h1>
        <h1>Ilman Sähköä</h1>
        <section>
          <p>
            Pyri elämään tunti ilman sähkölaitteita. Tämä tarkoittaa
            televisiota, tietokonetta ja tärkeimmiten, kännykkää
          </p>
        </section>
      </TextCard>
    </Container>
  )
}

export default ElectricChallenge
