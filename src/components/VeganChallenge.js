import React from "react";
import styled from "styled-components";
import VeganImage from "../images/vegan.jpg"

function VeganChallenge() {

    return (
        <Card>
            <BackroundImage>
            <TextCard>
                <h1>02</h1>
                <h2>VEGAN</h2>
                <p>Edullista vegaaniruokaa
                Perusraaka-aineista tehty vegaaniruoka voi olla hyvinkin edullista.\
        </p>
            </TextCard>
            </BackroundImage>

            <PictureCard>
            </PictureCard>
        </Card>

    );
}


const BackroundImage = styled.div`

background-image: url(${VeganImage});
    opacity: 0.5;
    background-size: cover;

    background-repeat: no-repeat;
    background-size: contain;
    height: 60vh;
    width: 100%;

    @media only screen and (min-width: 768px) {
    background-image: none;
    }

`

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


@media only screen and (min-width: 768px) {

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    text-align: left;
}
`;
const PictureCard = styled.div`
  


@media only screen and (min-width: 768px) {
    height: 500px;
    width: 500px;
    background-image:  
    linear-gradient(150deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(0deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(80deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(120deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(200deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(109deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(52deg, transparent 50%, #2a2a2a 90%),
    linear-gradient(280deg, transparent 50%, #2a2a2a 90%),url(${VeganImage}) ;
    background-size: cover;
    opacity: 0.5;


}
`;

export default VeganChallenge;