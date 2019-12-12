import React from 'react'
import styled from 'styled-components'
import ChallengeCards from './ChallegeCards'
import PageContent from '../content/PageContent'
import ElectricImage from '../images/electric.jpg'
import VeganImage from '../images/vegan.jpg'
import MovingImage from '../images/moving.jpg'
import SlideToggle from './SlideToggle'
import LineChart from './LineChart'

class Pages extends React.Component {
  constructor (props) {
    super(props)
    this.state = { showDropdown: false }
  }

  changeDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown })
  }

  render () {
    return (
      <Background id='bg'>
        <Wrapper id='wrapper'>
          <ChallengeCards
            name={PageContent[0]}
            img={ElectricImage}
            id='electric'
          />
          <SlideToggle name={PageContent[3]} />
          <LineChart />

          <ChallengeCards name={PageContent[1]} img={VeganImage} id='vegan' />
          <SlideToggle name={PageContent[4]} />
          <ChallengeCards name={PageContent[2]} img={MovingImage} />
          <SlideToggle name={PageContent[5]} />
        </Wrapper>
      </Background>
    )
  }
}

const Background = styled.div`
  background-color: #2a2a2a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

Pages.defaultProps = { name: 'content' }

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

`

export default Pages
