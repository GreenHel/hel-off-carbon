import React from 'react'
import styled from 'styled-components'
import {
  TwitterTimelineEmbed,
} from 'react-twitter-embed'

function Twitter () {
  return (
    <Background>
      <Wrapper>
        <Content>
        <h1>@hiilineutraalihelsinki</h1>
          <p>
            Join the discussion on the social media channels with the tag
            #hiilineutraalihaaste or #hiilineutraalipäivä.
          </p>
          <div className='centerContent'>
            <div className='selfCenter standardWidth'>
              <TwitterTimelineEmbed
                sourceType='url'
                theme='dark'
                url='https://twitter.com/HiilineutraaliH'
                options={{ height: 450 }}
                transparent
                noHeader
                noFooter
                noBorders
              />
            </div>
          </div>
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
  padding: 5%;

@media only screen and (min-width: 768px) {
padding: 10%;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
`

const Content = styled.div`
  background-color: #2a2a2a;
  color: #fff;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
    font-family: 'futura-pt-bold', sans-serif;
    text-transform: lowercase;
    font-style: normal;
    font-weight: 700;
  }

  p {
    height: auto;
    font-family: 'futura-pt', sans-serif;
    font-weight: 400;
  }
`

export default Twitter
