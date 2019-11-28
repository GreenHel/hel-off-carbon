import React from "react";
import Home from "./Home";
import Pages from "./Pages";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

export default class PageSlider extends React.Component {
  render() {
    
    return (
     <div>
          <Home />
          <Pages />
          <SocialMedia />
          <Footer />
       </div>
    );
  }
}
