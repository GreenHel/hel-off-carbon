import React from "react";
import styled from "styled-components";
import ChallengeCards from "./ChallegeCards";
import PageContent from "../content/PageContent";
import ElectricImage from "../images/electric.jpg";
import VeganImage from "../images/vegan.jpg";
import MovingImage from "../images/moving.jpg";
import Popup from "reactjs-popup";
import PopupComponent from "./Popup";
import EatLessImage from "../images/eatLess.jpg";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDropdown: false };
  }

  changeDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  render() {
    return (
      <Background id="bg">
        <Wrapper id="wrapper">
          <ChallengeCards
            name={PageContent[0]}
            img={ElectricImage}
            id="electric"
          />
          <ChallengeCards name={PageContent[1]} img={VeganImage} id="vegan" />
          <div onClick={this.changeDropdown}>
            {!this.state.showDropdown && <h2>Did you know ?</h2>}
          </div>

          {this.state.showDropdown && (
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              <PopupComponent
                name={PageContent[3]}
                img={EatLessImage}
                close={this.changeDropdown}
              />
            </ReactCSSTransitionGroup>
          )}

          <ChallengeCards name={PageContent[2]} img={MovingImage} />
        </Wrapper>
      </Background>
    );
  }
}

const Background = styled.div`
  background-color: #2a2a2a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

Pages.defaultProps = { name: "content" };

const Wrapper = styled.div`

min-height: 100vh;
width: 100%;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-betweens;
text-align: center;
padding: 15px;

}

`;

export default Pages;
