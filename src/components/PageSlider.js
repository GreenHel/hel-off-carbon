import React from "react";
import { FullPage, Slide } from "react-full-page";
import Home from './Home'
import Pages from './Pages'
import GraphView from './GraphView'
import Footer from './Footer'
import PageContent from '../content/PageContent'


export default class PageSlider extends React.Component {
  render() {
    return (
      <FullPage>
        <Slide>
         <Home />
        </Slide>
        <Slide>
          <GraphView />
        </Slide>
        <Slide>
          <Pages name={PageContent[0]}/>
        </Slide>
        <Slide>
          <Pages name={PageContent[1]}/>
        </Slide>
        <Slide>
          <Pages name={PageContent[2]}/>
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage>
    );
  }
}
