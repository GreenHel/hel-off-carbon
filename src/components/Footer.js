import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #2a2a2a;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border-top: 1px solid rgba(0, 0, 0, 0.0975); */
`

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const FooterLeft = styled.div`
  width: 33.333%;
  text-align: left;
  margin-left: 1em;
  margin-right: 1em;
`

const FooterCenter = styled.div`
  width: 33.333%;
  text-align: center;
`

const FooterRight = styled.div`
  width: 33.333%;
  text-align: right;
  margin-left: 1em;
  margin-right: 1em;
`

const MediaCard = styled.div`
  font-weight: bold
  margin: .5625rem auto 4.25rem;
`

const SponsorImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

function Footer () {
  return (
    <Wrapper>
      <div id='footer'>
        <MediaCard>
          <h3>In accociation with:</h3>
          <FooterContainer>
            <FooterLeft>
              <a href='https://www.metropolia.fi/'>
                <SponsorImage
                  src={require('../images/metropolia-logo-in-english-image.png')}
                  alt='Metropolia Logo'
                />
              </a>
            </FooterLeft>
            <FooterCenter>
              <a href='https://www.hel.fi/helsinki/fi'>
                <SponsorImage
                  src={require('../images/helsinki_logo-image.png')}
                  alt='Helsinki Logo'
                />
              </a>
            </FooterCenter>
            <FooterRight>
              <a href='https://hri.fi/'>
                <SponsorImage
                  src={require('../images/hri_logo-image.png')}
                  alt='Helsinki Regional Infoshare Logo'
                />
              </a>
            </FooterRight>
          </FooterContainer>
        </MediaCard>
      </div>
    </Wrapper>
  )
}

export default Footer
