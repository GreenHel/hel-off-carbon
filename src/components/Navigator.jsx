import React from "react";
import Home from "./Home";
import Pages from "./Pages";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import MainText from "./MainText";
import Twitter from "./Twitter";

export default class Navigator extends React.Component {
  render() {
    
    /* This is the main presentational component, which calls the different components*/

    return (
     <div>
          <Home />
          <MainText />
          <Pages />
          <Twitter />
          <SocialMedia />
          <Footer />
       </div>
    );
  }
}
