import React from 'react'
import styled from 'styled-components'
import { TwitterHashtagButton } from 'react-twitter-embed'

/* Styled Components */

const Background = styled.div`
  background-color: #2a2a2a;
  width: 100%;
  height: auto;
`

const Wrapper = styled.div`
  text-align: left;
  padding: 10%;

@media only screen and (min-width: 768px) {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
`

const Content = styled.div`
  background-color: #2a2a2a;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 15px;

  h1.hashtag-title {
    font-size: 32px;
    font-family: 'futura-pt-bold', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 300;
    color: #00D8AC
  }

  p.hashtag-text {
    height: auto;
    font-family: 'futura-pt', sans-serif;
    font-weight: 400;
    font-size: 22px;
  }
`

function MainText () {
  return (
    <Background>
      <Wrapper>
        <Content>
          <h1 className='hashtag-title'>#hiilineutraalihaaste</h1>
          <p className='hashtag-text'>
            Mikä meitä estää tekemästä Helsingistä hiilineutraalia nyt?
            Hiilineutraalin Helsingin saamiseksi meidän täytyy yksilöinä tehdä
            tärkeitä asioita tavoitteen saamiseksi. 
            Alempana on kolme haastetta,
           <span style={{color:"#00B8AC"}}> joihin haastamme juuri Sinut.</span>
            <br></br>
            <br></br>
            Kun olet tehnyt tietyn haasteen, twiittaa hashtagilla #hiilineutraalihaaste,
            Arvomme kaikkien osaallistujien kesken huikeita hiilineutraaleita palkintoja.
          </p>
          <TwitterHashtagButton
            tag={'hiilineutraalihaaste'}
            options={{ size: 'small', screenName: null, buttonHashtag: null }}
          />
        </Content>
      </Wrapper>
    </Background>
  )
}

export default MainText
