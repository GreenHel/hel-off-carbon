import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

function ScrollPage() {
  window.scrollTo({
    top: 1000,
    behavior: 'smooth',
  })
}

function Navigation(props) {

  if (props.name === "topnav") {

    return (
      <TopNavi>        
        <div className='topnavdiv'>
          <ul className='topnav'>
            <li>
              <Link className='link'  onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })}>Home</Link>
            </li>
            <li> 
              <NavLink className='link' activeClassName='topglow' onClick={() => ScrollPage() } to="/what">what</NavLink>
            </li>
            <li>
              <NavLink className='link' activeClassName='topglow' onClick={() => ScrollPage() } to="/why">why</NavLink>
            </li>
            <li>
              <NavLink className='link' activeClassName='topglow' onClick={() => ScrollPage() } to="/how">how</NavLink>
            </li>
          </ul>
        </div>
        </TopNavi>

    );


  } else {


    return (
      <Wrapper>
        <div >
          <ul className='ul'>
            <li>
              <Link className='link' onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })}>Home</Link>
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
}
const TopNavi = styled.div`
background-color: #2A2A2A;
color: #fff;
display: flex;
flex-direction: row;

  .topnavdiv {
    background-color: #2A2A2A;
  }

  .topnav {
    padding: 15px;
    list-style: none;
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    max-width: 50vh;

    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    }  
    .ul {
      list-style: none;
    }
  
    .link {
      color: #5a5a5a;
      text-decoration: none;
      }

.topglow {
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes topglow {
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

const Wrapper = styled.div`
background-color: #2A2A2A;
color: #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;

  .topnavdiv {
    background-color: #2A2A2A;
  }

  .topnav {
    padding: 15px;
    list-style: none;
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    max-width: 50vh;

    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    }

  .div {
    padding: 70px;
    font-family: Neon;
    font-size: 80px;  
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
.topglow {
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes topglow {
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
