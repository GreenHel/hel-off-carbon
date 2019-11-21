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
  text-align:center;
  margin: 0 auto;
  justify-content:space-around; 
  padding: 16px  0 16px 0;
 
 
  a {
    color: pink;
    text-decoration: none;
  }
  
  i {
      width: 50px;
      height: 50px;
  }
  img{
  max-width: 50px;
  height: auto;
 
  }
`

const SomeLeft = styled.div`
  width: 33.333%;
  margin-left: 1em;
  margin-right: 1em;
`

const SomeCenter = styled.div`
  width: 33.333%;

`

const SomeRight = styled.div`
  width: 33.333%;
  margin-left: 1em;
  margin-right: 1em;
`

const MediaCard = styled.div`
  font-weight: bold
  margin: .5625rem auto 4.25rem;
  padding: 3rem;

  h2 {
      color: tomato;
      font-size: 50px;
  }
`

function SocialMedia () {
  return (
    <Wrapper>
      <div id='social-media'>
        <MediaCard>
          <h2>@heloffenergy</h2>
          <p>
            Join the discussion on the social media channels with the tag
            #hiilineutraalihelsinki.
          </p>
          <InstaGrid account='von_pessi' numberOfMediaElements={3} />
          <h3>Our social media channels:</h3>
          <SomeContainer>
            <SomeLeft>
              <a href='https://www.facebook.com/heloffenergy'>
                <img src={require('../images/f_logo_RGB-White_100.png')}
                     alt='Facebook Logo'/>
              </a>
            </SomeLeft>
            <SomeCenter>
              <a href='https://www.instagram.com/heloffenergy'>
                <img src={require('../images/instagram_logo.png')}
                     alt='Instagram Logo'/>
              </a>
            </SomeCenter>
            <SomeRight>
              <a href='https://twitter.com/heloffenergy'>
                <img src={require('../images/Twitter_Logo_WhiteOnImage.png')}
                     alt='Twitter Logo'/>
              </a>
            </SomeRight>
          </SomeContainer>
        </MediaCard>
      </div>
    </Wrapper>
  )
}

export default SocialMedia
