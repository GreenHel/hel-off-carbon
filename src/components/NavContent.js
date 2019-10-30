import React, { Component } from 'react'
import './styles.css'

const divContent = [
  'What?',
  'Why?',
  'How?',
];


const listDivContent = divContent.map((line) =>
  <li>{line}</li>
);


class NavContent extends Component {

  render() {
    return (
      <div>
        <h1 className='neon'>{listDivContent}</h1>
      </div>
    );
  }
}
export default NavContent;