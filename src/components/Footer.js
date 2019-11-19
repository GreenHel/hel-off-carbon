import React from "react";
import styled from "styled-components";
import InstaGrid from  "./InstaGrid";
import { HelsinkiLogo as HSLogo } from "../images/helsinki_logo-image.png";

function Footer() {
  return (
    <Wrapper>
      <div id="footer">
        <MediaCard>
          <h2>@heloffenergy</h2>
          <p>Join the event on the social media channels with the tag #hiilineutraalihelsinki.</p>
          <InstaGrid account="von_pessi" numberOfMediaElements={3} />
          <h3>Our social media channels:</h3>
          <ul class="some__list">
				    <li>
				      <a href="https://www.facebook.com/heloffenergy" class="some__list__link" target="_blank" rel="noopener noreferrer">
					      <span class="some__list__icon"><i class="facebook-f"></i></span> Facebook  
				      </a>
			      </li>
					  <li>
				      <a href="https://www.instagram.com/heloffenergy" class="some__list__link" target="_blank" rel="noopener noreferrer">
					      <span class="some__list__icon"><i class="instagram"></i></span> Instagram  
				      </a>
			      </li>
					  <li>
				      <a href="https://twitter.com/heloffenergy" class="some__list__link" target="_blank" rel="noopener noreferrer">
					      <span class="some__list__icon"><i class="twitter"></i></span> Twitter  
				      </a>
			      </li>
			    </ul>
          
        </MediaCard>
        <MediaCard>
        <h3>In accociation with:</h3>
          <FooterColumns>
            <Column>
              <a href="https://www.metropolia.fi/">
              <SponsorImage src={require('../images/metropolia-logo-in-english-image.png')} alt="Metropolia Logo" />
              </a>
            </Column>
            <Column>
              <a href="https://www.hel.fi/helsinki/fi">
              <SponsorImage src={require('../images/helsinki_logo-image.png')} alt="Helsinki Logo" />
              </a>
            </Column>
            <Column>
              <a href="https://hri.fi/">
              <SponsorImage src={require('../images/hri_logo-image.png')} alt="Helsinki Regional Infoshare Logo" />
              </a>
            </Column>
          </FooterColumns>        
        </MediaCard>
      </div>
    </Wrapper>
  );
}

const SomeList = styled.ul`

`;

const FooterColumns = styled.div`
  display: flex;
    align-content: flex-start;
`;

// Remmit vittuun
const Column = styled.div`
  flex-basis: calc(33.32% - 6.25rem);
  width: calc(33.32% - 6.25rem);
  margin-right: 6.25rem;
  margin-left: 6.25rem;
`;

const MediaCard = styled.div`
  font-weight: bold
  margin: .5625rem auto 4.25rem;
  padding: 3rem;
`;

const SponsorImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
background-color: #2A2A2A;
min-height: 100vh;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

  div.title {
    font-size: 40px;
    font-weight: bold;
  }
  section {
    display: flex;
    flex-direction: row;
  
  }
  
  .heltext {
    font-family: Neon;
    font-size: 50px;
    text-align: left;
    
  }

  .Countdown{
    margin: 10px auto;
    padding-bottom: 20px;
  }
  
  .Countdown-col{
    display: inline-block;
  }
  
  .Countdown-col-element{
    display: inline-block;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
  }
  
  .Countdown-col-element strong{
    font-size: 95px;
  }
`;

export default Footer;
