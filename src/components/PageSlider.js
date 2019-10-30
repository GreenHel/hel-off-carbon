import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import NavContent from './NavContent'


export default class PageSlider extends React.Component {
  render() {
    return (
      <div>
      <FullPage  >
        <Slide>
          <NavContent />
          <p >looremipsumia</p>
        </Slide><Slide  >
          <NavContent />
          <p>looremipsumia2</p>
        </Slide>
        <Slide  >
          <NavContent />
          <p>looremipsumia3</p>
        </Slide>
      </FullPage>
      </div>
    );
  }
};