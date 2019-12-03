import React from 'react'
import styled from 'styled-components'
import { TwitterHashtagButton } from 'react-twitter-embed'

function MainText () {
  return (
    <Background>
      <Wrapper>
        <Content>
          <h1 className='hashtag-title'>#hiilineutraalihaaste</h1>
          <p className='hashtag-text'>
            Mikä meitä estää tekemästä Helsingistä hiilineutraalia nyt?
            Hiilineutraalin Helsingin saamiseksi meidän täytyy yksilöinä tehdä
            tärkeitä asioita tavoitteen saamiseksi. Ohessa kolme haastetta,
            jotka auttavat hiilijalanjälkesi pienentämisessä. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed fringilla mattis
            facilisis. Aenean vitae urna tempus, luctus turpis tempus, efficitur
            justo. Nullam aliquet fermentum leo bibendum commodo. Curabitur eget
            odio a felis semper venenatis et nec mi. Quisque a lacinia velit, et
            condimentum felis. Curabitur euismod dui vel lacus efficitur, ac
            sodales turpis malesuada. Aliquam auctor ante vel purus tristique, a
            feugiat ipsum accumsan. Fusce eleifend non odio vel bibendum. Aenean
            justo mi, rhoncus a quam eget, sollicitudin bibendum sapien.
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
  }
`

export default MainText
