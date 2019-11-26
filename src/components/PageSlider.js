import React from "react";
import { FullPage, Slide } from "react-full-page";
import Home from "./Home";
import Pages from "./Pages";
import GraphView from "./GraphView";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import PageContent from "../content/PageContent";

export default class PageSlider extends React.Component {
  render() {
    
    return (
     <div>
          <Home />
      
          <GraphView />
      
          <Pages name={PageContent[0]} />
       
          <Pages name={PageContent[1]} />
     
          <Pages name={PageContent[2]} />
       
          <SocialMedia />
        
          <Footer />
       </div>
    );
  }
}
