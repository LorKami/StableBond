import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import '../Footer/Footer.css'

import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { SiFoodpanda } from 'react-icons/si';

const Footer = () => {
  return (
    <div>

<section id='Test'>
        
    <div className='FooterSec'>

    <div className='InfoSocial'>   
<a className='buttontwitter' href='LinkTwitter' target='_blank'><FaTwitter size='2rem'/></a>
<a className='buttontelegram' href='LinkTelegram' target='_blank'><FaTelegramPlane size='2rem'/></a>
<a className='buttonmedium' href='LinkMedium' target='_blank'><BsMedium size='2rem'/></a>
<a className='buttonpanda' href='LinkPanda' target='_blank'><SiFoodpanda size='2rem'/></a>
</div>

<div className='Copy'>
    <p>StableBond® 2023</p>
</div>

    </div>
    </section>

    </div>
  )
}

export default Footer