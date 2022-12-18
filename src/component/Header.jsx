import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { GiCoconuts } from "react-icons/gi";
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
  const onClick = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    history.push(href)
  }

  return (
    <div className='header_top'>
      <nav>
        <a href='/'>
          <img src='/logo.png' style={{ width: '30px', marginRight: '10px' }} />
          <span>POLLANET</span>
        </a>
        <div class='nav_box'>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/point/rankListWeb">RANK</a></li>
            <li><a href="/mission/listTotal">MISSION</a></li>
            <li><a href="/board/list">NOTICE</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Header)