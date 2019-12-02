import React from 'react'
import styled from 'styled-components'

function MainText () {
  return (
    <Background>
      <Wrapper>
        <Content>
          <h1 className='hashtag-title'>00</h1>
          <h1 className='hashtag-title'>#hiilineutraalihaaste</h1>
          <p className='hashtag-text'>
            Mikä meitä estää tekemästä Helsingistä hiilineutraalia nyt?
            Hiilineutraalin Helsingin saamiseksi meidän täytyy yksilöinä tehdä
            tärkeitä asioita tavoitteen saamiseksi.
          </p>
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

const Content = styled.div`
  background-color: #2a2a2a;
  color: #fff;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  text-align: left;
  padding: 10%;
  h1.hashtag-title {
    font-size: 32px;
    font-family: 'futura-pt-bold', sans-serif;
    text-transform: lowercase;
    font-style: normal;
    font-weight: 700;

    margin-bottom: 0%;
  }

  p.hashtag-text {
    height: auto;
    font-family: 'futura-pt', sans-serif;
    font-weight: 400;
  }
`

export default MainText
