import React from "react";
import styled from "styled-components";
import VeganChallenge from "./VeganChallenge";
import ElectricChallenge from "./ElectricChallenge";
import PageContent from "../content/PageContent";
import ElectricImage from "../images/electric.jpg";
import VeganImage from "../images/vegan.jpg";
import MovingImage from "../images/moving.jpg";
import Popup from "reactjs-popup";
import PopupComponent from "./Popup";
import EatLessImage from "../images/eatLess.jpg";

function Pages(props) {
  return (
    <Background>
      <Wrapper>
        <ElectricChallenge name={PageContent[0]} img={ElectricImage} />
        <VeganChallenge name={PageContent[1]} img={VeganImage} />
        <Popup
          trigger={<h2 className="button"> Did you know ? </h2>}
          modal
          closeOnDocumentClick
          className="popup"
        >
          <div>
            <PopupComponent name={PageContent[3]} img={EatLessImage} />
          </div>
        </Popup>
        <ElectricChallenge name={PageContent[2]} img={MovingImage} />
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  background-color: #2a2a2a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

Pages.defaultProps = { name: "content" };

const Wrapper = styled.div`

min-height: 100vh;
min-width: 95%;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-betweens;
text-align: center;

}

@media only screen and (max-width: 610px) {
    flex-direction: column;
    justify-content: center;
  }

`;

export default Pages;
