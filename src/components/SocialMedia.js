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
  margin: 0 auto;
  a {
    color: pink;
    text-decoration: none;
  }
  
  i {
      width: 50px;
      height: 50px;
  }
`

const SomeLeft = styled.div`
  width: 33.333%;
  text-align: left;
  margin-left: 1em;
  margin-right: 1em;
`

const SomeCenter = styled.div`
  width: 33.333%;
  text-align: center;
`

const SomeRight = styled.div`
  width: 33.333%;
  text-align: right;
  margin-left: 1em;
  margin-right: 1em;
`

const MediaCard = styled.div`
  font-weight: bold
  margin: .5625rem auto 4.25rem;
  padding: 3rem;
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
              <a
                href='https://www.facebook.com/heloffenergy'
                class='some_link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span class='some_icon'>
                  <i class='facebook-f' />
                </span>{' '}
                Facebook
              </a>
            </SomeLeft>
            <SomeCenter>
              <a
                href='https://www.instagram.com/heloffenergy'
                class='some_link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span class='some_icon'>
                  <i class='instagram' />
                </span>{' '}
                Instagram
              </a>
            </SomeCenter>
            <SomeRight>
              <a
                href='https://twitter.com/heloffenergy'
                class='some_link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span class='some_icon'>
                  <i class='twitter' />
                </span>{' '}
                Twitter
              </a>
            </SomeRight>
          </SomeContainer>
        </MediaCard>
      </div>
    </Wrapper>
  )
}

export default SocialMedia
