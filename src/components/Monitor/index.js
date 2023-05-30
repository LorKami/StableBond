import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { animateScroll } from "react-scroll";
import  Chart  from "react-apexcharts";

import '../Monitor/Monitor.css'
import '../Monitor/Navbar.css'
import '../Monitor/Stake.css'
import '../Monitor/Footer.css'
import '../Monitor/Tokenomics.css'
import '../Monitor/Roadmap.css'

// Navbar
import BarMenu from "../../images/barmenu2.png"
import Meat from "../../images/meat.png"
import MeatHome from "../../images/Home.png"
import MeatTokenomic from "../../images/Tokenomics.png"
import MeatRoadmap from "../../images/Roadmap.png"
import MeatPaper from "../../images/Whitepaper.png"
import LogoNavbar2 from "../../images/logonotext.png"
import MeatRight from "../../images/meat2.png"

// Monitor 
import ImageLeft2 from '../../images/stablebland2.png'

// Footer
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import { BsLink45Deg } from 'react-icons/bs';
import { GiEgyptianBird } from 'react-icons/gi';

const Monitor = () => {

  return (

    <div>

          {/* NAVBAR */}
<div className='NavbarSuper'>
      <div className='LogoLeft'>
      <img src={LogoNavbar2}></img>
      </div>

      <div className='Menu'>
        <div className='BarMenu'>
        <img src={BarMenu}></img>
        <div className='BarMenuIcons'>
        <Link to="Home" smooth={true} spy={true} duration={500}><img src={MeatHome} /></Link>
        <Link to="Tokenomics" smooth={true} spy={true} duration={500} offset={-100}><img src={MeatTokenomic} /></Link>
        <Link to="Roadmap" smooth={true} spy={true} duration={500}><img src={MeatRoadmap} /></Link>
        <a href='https://stablebond.gitbook.io/untitled/' target='_blank'><img src={MeatPaper} /></a>
        </div>

        </div>

      </div>
      <div className='SpaceRight'>
      <a href='https://twitter.com/stable_bond' target="_blank"><img src={MeatRight}></img></a>
      </div>
    </div>

          {/* MONITOR */}
          <section id='Home'>
    <div className='Monitor'>
      <div className='MonitorBox'>
      <div className='InfoCenter'>
        <div className='InfoLeft'>
            <h2>StableBond $SBOND</h2>
            <p>Stablebond focuses on providing all users on the PulseChain network a flawless user experience while using our customized dashboards</p>
            {/* <a href="#" class="ButtonTelegram">Join our Telegram</a> */}
        </div>
        <div className='InfoRight'>
          <img src={ImageLeft2}></img>
        </div>
      </div>
      </div>
      </div>
      </section>

      {/* Tokenomics */}
      <section id='Tokenomics'>
      <div className='TokenomicSec'>
        <div className='TokenomicInfo'>
          <h2>Tokenomics</h2>
          <p>100 Million total supply</p>
        </div>
        <div className='TokenmomicBox'>

        <div className="boxToke">
          <p>4% Buy Tax</p>
        </div>

        <div className="boxToke">
          <p>4% Sell Tax</p>
        </div>

        <div className="boxToke">
          <p>3% of all transactions will be goind towards rewarding investors of I-Stable with USDT/BUSD</p>
        </div>

        <div className="boxToke">
          <p>1% of all transactions will be goind towards marketing and the future of the project</p>
        </div>

        </div>

      </div>
      </section>

      <div className='Graph'>

                <Chart 
                type="pie"
                width={600}
                height={500}

                series={ [4,4,3,1] }       
                         

                options={{
                        title:{ text:""
                        } , 
                       noData:{text:"Empty Data"},                        
                      colors:["#c63637","#e2504c", '#ff9688', '#ffbfb0'],
                      labels: ['Buy Tax', 'Sell Tax', 'Rewarding Investors', 'Marketing'],
                      dataLabels: {
                        style: {
                          fontSize: '1rem',
                          colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
                        },
                      },
                      legend: {
                        show: true,
                        showForSingleSeries: false,
                        showForNullSeries: true,
                        showForZeroSeries: true,
                        position: 'bottom',
                        horizontalAlign: 'center', 
                        floating: false,
                        fontSize: '17px',
                        fontFamily: 'Helvetica, Arial',
                        fontWeight: 400,
                        formatter: undefined,
                        inverseOrder: false,
                        width: undefined,
                        height: undefined,
                        tooltipHoverFormatter: undefined,
                        customLegendItems: [],
                        offsetX: 0,
                        offsetY: 0,
                        labels: {
                            colors: '#ffffff',
                            useSeriesColors: false
                        },
                      }
                                     
                 }}
                >
                </Chart>


        </div>

      {/* Roadmap */}
      
      <section id='Roadmap'>
        <div className='RoadMapSec'>
          <div className='RoadmapInfo'>
          <h2>Roadmap</h2>
          </div>
            <div className='RoadmapBox'>

              <div className='RoadmapToke'>
                <h2>╞ Phase 1</h2>
                <p>■ Website design and construction</p>
                <p>■ Dashboard development (swap and staking)</p>
                <p>■ Contract deployment</p>
                <p>■ Telegram channel creatation</p>
                <p>■ Community building</p>
                <p>■ Further social media platforms</p>
                <p>■ Telegram promotions</p>
              </div>

              <div className='RoadmapToke'>
                <h2>╞ Phase 2</h2>
                <p>■ StableBond public presale on ?</p>
                <p>■ StableBond launch on ?</p>
                <p>■ Launch of staking platform</p>
              </div>

              <div className='RoadmapToke'>
                <h2>╞ Phase 3</h2>
                <p>■ CEX listings</p>
                <p>■ Further development of dashboard(s)</p>
                <p>■ Further marketing techniques</p>
                <p>■ Further partnership</p>
              </div>

            </div>
        </div>
      </section>

      <div className="custom-shape-divider-bottom-1685379302">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>

      {/* FOOTER */}

<div className='FooterSec'>

<div className='InfoSocial'>   
<a className='buttontwitter' href='https://twitter.com/stable_bond' target='_blank'><FaTwitter size='2rem'/></a>
<a className='buttontelegram' href='Telegram' target='_blank'><FaTelegramPlane size='2rem'/></a>
<a className='buttonmedium' href='https://stablebond.gitbook.io/untitled/' target='_blank'><BsLink45Deg size='2rem'/></a>
<a className='buttonpanda' href='Chart' target='_blank'><GiEgyptianBird size='2rem'/></a>
</div>

<div className='Copy'>
<p>StableBond® 2023</p>
</div>

</div>

    </div>
  )
}

export default Monitor