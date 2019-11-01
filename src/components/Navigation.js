import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/what">what</Link>
        </li>
        <li>
          <Link to="/why">why</Link>
        </li>
        <li>
          <Link to="/how">how</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
height: 50px;
display: flex;
align-items: center;
background-color: #f5f5f5;

ul {
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin-left: 20px;

  a {
    text-decoration: none;
    font-size: 20px;
    color: #333;
  }
}
`;

export default Navigation;
