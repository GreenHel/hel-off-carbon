import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Wrapper>
      <div >
      <ul className='ul'>
        <li>
          <NavLink className='link' to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className='link' activeClassName='glow' to="/what">what</NavLink>
        </li>
        <li>
          <NavLink className='link' activeClassName='glow' to="/why">why</NavLink>
        </li>
        <li>
          <NavLink className='link' activeClassName='glow' to="/how">how</NavLink>
        </li>
      </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
background-color: #191919;
color: #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;
padding: 70px;

  .div {
    padding: 70px;
    font-family: Neon;
    font-size: 50px;  
    color: #5a5a5a;
  }
  .ul {
    list-style: none;
  }

  .link {
    color: #5a5a5a;
    text-decoration: none;
    }

  .glow {
    font-size: 80px;
    color: #fff;
    text-align: center;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
  }
  
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f5f3f4,
        0 0 40px #f5f3f4, 0 0 50px #f5f3f4, 0 0 60px #f5f3f4, 0 0 70px #f5f3f4;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #f5f3f4, 0 0 40px #f5f3f4,
        0 0 50px #f5f3f4, 0 0 60px #f5f3f4, 0 0 70px #f5f3f4, 0 0 80px #f5f3f4;
    }
  }
}
  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;


export default Navigation;
