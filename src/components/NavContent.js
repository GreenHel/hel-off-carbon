import React, { Component } from "react";
import Barometer from "./Barometer";
class NavContent extends Component {
  render() {
    return (
      <div>
        <h1 className="glow">What?</h1>
        <h1 className="glow">Why?</h1>
        <h1 className="glow">How?</h1>
        <div style={{ display: "flex" }}>
          <Barometer /> <Barometer />
          <Barometer />
        </div>
      </div>
    );
  }
}
export default NavContent;
