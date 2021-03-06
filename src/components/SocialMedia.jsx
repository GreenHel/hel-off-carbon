import React from 'react'
import styled from 'styled-components'
import InstaGrid from './InstaGrid'

const Wrapper = styled.div`
  background-color: #2a2a2a;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const SomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  justify-content: space-around;
  padding: 16px 0 16px 0;

  i {
    width: 50px;
    height: 50px;
  }
  img {
    max-width: 50px;
    height: auto;
  }
`

const SomeLeft = styled.div`
  width: 33.333%;
  margin-left: 1em;
  margin-right: 1em;
  text-align: right;
`

const SomeCenter = styled.div`
  width: 33.333%;
`

const SomeRight = styled.div`
  width: 33.333%;
  margin-left: 1em;
  margin-right: 1em;
  text-align: left;
`

const MediaCard = styled.div`
  font-weight: bold
  margin: .5625rem auto 4.25rem;
  /* padding: 3rem; */

  h3 {
    font-family: 'futura-pt-bold', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 300;
  }
`

function SocialMedia () {
  return (
    <Wrapper>
        <MediaCard>
          <InstaGrid account='von_pessi' numberOfMediaElements={3} />
          <h3>Contact us on social media:</h3>
          <SomeContainer>
            <SomeLeft>
              <a href='https://www.facebook.com/heloffenergy'>
                <img
                  src={require('../images/f_logo_RGB-White_100.png')}
                  alt='Facebook Logo'
                />
              </a>
            </SomeLeft>
            <SomeCenter>
              <a href='https://www.instagram.com/heloffenergy'>
                <img
                  src={require('../images/instagram_logo.png')}
                  alt='Instagram Logo'
                />
              </a>
            </SomeCenter>
            <SomeRight>
              <a href='https://twitter.com/HiilineutraaliH'>
                <img
                  src={require('../images/Twitter_Logo_WhiteOnImage.png')}
                  alt='Twitter Logo'
                />
              </a>
            </SomeRight>
          </SomeContainer>
        </MediaCard>
    </Wrapper>
  )
}

export default SocialMedia
