import React from "react";
import { FullPage, Slide } from "react-full-page";
import Home from './Home'
import Pages from './Pages'
import GraphView from './GraphView'
import Footer from './Footer'


export default class PageSlider extends React.Component {
  render() {
    return (
      <FullPage controls>
        <Slide>
         <Home />
        </Slide>
        <Slide>
          <GraphView />
        </Slide>
        <Slide>
          <Pages name='what'/>
        </Slide>
        <Slide>
          <Pages name='why'/>
        </Slide>
        <Slide>
          <Pages name='how'/>
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage>
    );
  }
}
