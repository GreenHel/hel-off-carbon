import React from "react";
import Home from "./Home";
import Pages from "./Pages";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import PageContent from "../content/PageContent";

export default class PageSlider extends React.Component {
  render() {
    
    return (
     <div>
          <Home />
      
          <Pages name={PageContent[0]} />
     
          <SocialMedia />
        
          <Footer />
       </div>
    );
  }
}
