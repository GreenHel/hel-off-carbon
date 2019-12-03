import React from 'react'
import styled from 'styled-components'
import { TwitterHashtagButton } from 'react-twitter-embed'

function MainText () {
  return (
    <Background>
      <Wrapper>
        <Content>
          <h1 className='hashtag-title'>00</h1>
          <h1 className='hashtag-title'>Hiilineutraalihaaste</h1>
          <p className='hashtag-text'>
            Mikä meitä estää tekemästä Helsingistä hiilineutraalia nyt?
            Hiilineutraalin Helsingin saamiseksi meidän täytyy yksilöinä tehdä
            tärkeitä asioita tavoitteen saamiseksi. Ohessa kolme haastetta, jotka auttavat hiilijalanjälkesi pienentämisessä.
          </p>
          <TwitterHashtagButton tag={'hiilineutraalihaaste'} options={{size: 'small',screenName: null,buttonHashtag: null}}/>
        </Content>
      </Wrapper>
    </Background>
  )
}

const Background = styled.div`
  background-color: #2a2a2a;
  width: 100%;
  height: auto;
`

const Wrapper = styled.div`
  text-align: left;
  padding: 10%;

@media only screen and (min-width: 768px) {
  width: 45%;
  margin-left: auto;
  margin-right: auto;
`

const Content = styled.div`
  background-color: #2a2a2a;
  color: #fff;
  display: flex;
  flex-direction: column;

  h1.hashtag-title {
    font-size: 32px;
    font-family: 'futura-pt-bold', sans-serif;
    font-style: normal;
    font-weight: 700;
  }

  p.hashtag-text {
    height: auto;
    font-family: 'futura-pt', sans-serif;
    font-weight: 400;
  }
`

export default MainText
