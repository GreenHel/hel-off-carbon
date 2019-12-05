import React from 'react'
import styled from 'styled-components'
import Countdown from './Countdown'
import BGimg from '../images/bg2.png'

const currentDate = new Date()
const year =
  currentDate.getMonth() === 11 && currentDate.getDate() > 23
    ? currentDate.getFullYear() + 1
    : currentDate.getFullYear()

const city = ['0% 0%', '100% 0%', '100% 70%']

const buildingHeight = ['95%', '90%', '85%', '87%']

var i
var y
var randomHeight = '70%'

for (i = 100; i >= 0; i = i - 2.5) {
  city.push(i.toString() + '% ' + randomHeight)

  randomHeight =
    buildingHeight[Math.floor(Math.random() * buildingHeight.length)]

  for (y = 1; y > 0; y--) {
    city.push(i.toString() + '% ' + randomHeight)
  }
}

const cityParams = city.toString()

function Home () {
  return (
    <Background>
      <Wrapper>
        <Content>
          <div className='title'>HIILINEUTRAALIPÄIVÄ</div>
          <p className="slogan-text">Tapahtuma jonka tavoitteena on haastaa jokainen helsinkiläinen elämään yksi päivä hiilineutraalisti.</p>
          <p className="slogan-text-end">Tapahtuma alkaa:</p>
          <Countdown date={`${year}-12-30T00:00:00`} />
        </Content>
      </Wrapper>
    </Background>
    
  )
}

  /* Styled Components */

const Background = styled.div`
  background-color: #2a2a2a;
  width: 100%;
`

const Content = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 150px;

  @media only screen and (min-width: 768px) {
  padding-top: 50px;
}
`

const Wrapper = styled.div`
  background: linear-gradient(
      to top,
      #2a2a2a 0%,
      rgba(0, 0, 0, 0.738) 19%,
      rgba(0, 0, 0, 0.541) 34%,
      rgba(0, 0, 0, 0.382) 47%,
      rgba(0, 0, 0, 0.278) 56.5%,
      rgba(0, 0, 0, 0.194) 65%,
      rgba(0, 0, 0, 0.126) 73%,
      rgba(0, 0, 0, 0.075) 80.2%,
      rgba(0, 0, 0, 0.042) 86.1%,
      rgba(0, 0, 0, 0.021) 91%,
      rgba(0, 0, 0, 0.008) 95.2%,
      rgba(0, 0, 0, 0.002) 98.2%,
      transparent 100%
    ),
    url(${BGimg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  clip-path: polygon(${cityParams});
  height: 70vh;

  div.title {
    font-size: 32px;
    font-family: 'futura-pt-bold', sans-serif;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    margin-top: 14.5%;
    margin-bottom: 0px;
    color: #00D8AC
  }

  p.slogan-text, p.slogan-text-end {
    height: auto;
    font-family: 'futura-pt', sans-serif;
    font-weight: 300;
    font-size: 14px;
    width: 80%;
    font-style: italic;
  }

  p.slogan-text-end {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  /* Media Queries for tablet version */

  @media screen and (min-width: 320px) {
    div.title {
      margin-top: 8.5%;
      font-size: 32px;
      width: 95%;
    }

    p.slogan-text {
      width: 80%;
      margin-block-start: 0.5em;
    }
  }
  @media screen and (min-width: 1000px) {
    div.title {
      font-size: 50px;
    }

    p.slogan-text {
      font-size: 22px;
    }

    p.slogan-text-end {
      font-size: 22px;
    }
  }

  /* Countdown element CCS styling */

  section {
    display: flex;
    flex-direction: row;
  }

  .Countdown {
    margin: 10px auto;
    padding-bottom: 20px;
  }

  .Countdown-col {
    display: inline-block;
  }

  .Countdown-col-element {
    display: inline-block;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
  }

  .Countdown-col-element {
    font-family: futura-pt, sans-serif;
    font-style: normal;
    font-weight: 300;
    text-transform: uppercase;
    /* font-weight: bold; */
  }

  .Countdown-col-element-span {
    font-size: 15px;
  }

  .Countdown-col-element-strong {
    font-size: 30px;
  }

  @media only screen and (min-width: 768px) {
    .Countdown-col-element {
      /* font-size: calc(22px + 6 * ((100vw - 320px) / 680)); */
      /* font-weight: bold; */
    }
  }
  @media screen and (min-width: 1000px) {
    .Countdown-col-element {
      /* font-size: 90px; */
      /* font-weight: bold; */
    }
  }
`

export default Home
