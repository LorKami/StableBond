import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { animateScroll } from "react-scroll";

import "../Navbar/Navbar.css";

import BarMenu from "../../images/barmenu.png"
import Meat from "../../images/meat.png"
import LogoNavbar2 from "../../images/logonotext.png"
import MeatRight from "../../images/meat2.png"


const Navbar = () => {
  return (
    <div>

    <div className='NavbarSuper'>
      <div className='LogoLeft'>
      <img src={LogoNavbar2}></img>
      </div>

      <div className='Menu'>
        <div className='BarMenu'>
        <img src={BarMenu}></img>
        <div className='BarMenuIcons'>
          {/* <a href='link1' target="_blank"><img src={Meat}></img></a>
          <a href='link1' target="_blank"><img src={Meat}></img></a>
          <a href='link1' target="_blank"><img src={Meat}></img></a>
          <a href='link1' target="_blank"><img src={Meat}></img></a> */}
        <Link to="Home" smooth={true} spy={true} duration={1500}><img src={Meat} /></Link>
        </div>

        </div>

      </div>
      <div className='SpaceRight'>
      <a href='ButtonHiden' target="_blank"><img src={MeatRight}></img></a>
      </div>
    </div>

    </div>
  )
}

export default Navbar