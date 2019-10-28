import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import NavContent from './NavContent'
 
export default class PageSlider extends React.Component {
  render() {
    return (
      <FullPage>
        <Slide>
          <NavContent />
        </Slide>
        <Slide>
          <NavContent />
        </Slide>
        <Slide>
          <NavContent />
        </Slide>
      </FullPage>
    );
  }
};