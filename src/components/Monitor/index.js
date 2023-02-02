import React from 'react'
import '../Monitor/Monitor.css'
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { SiFoodpanda } from 'react-icons/si';

import ImageLeft from '../../images/stablebland.png'
import ImageLeft2 from '../../images/stablebland2.png'
import Twitter from '../../images/twitter.png'
import Telegram from '../../images/telegram.png'

const Monitor = () => {
  return (
    <div>

    <div className='Monitor'>
      <div className='InfoCenter'>
        <div className='InfoLeft'>
            <h2>StableBond POWER! of community!</h2>
            <p>BOND is a deflationary community token that equally rewards every participant in its ecosystem</p>
            <a href="#" class="ButtonTelegram">Join our Telegram</a>
        </div>
        <div className='InfoRight'>
          <img src={ImageLeft2}></img>
        </div>
      </div>
      <div className='InfoSocial'>
        {/* <div className='InfoSocialLinks'> */}
          {/* <a className='buttontwitter' href='LinkTwitter' target='_blank'><img src={Twitter}></img></a>
          <a className='buttontwitter' href='LinkTelegram' target='_blank'><img src={Telegram}></img></a>
          <a className='buttontwitter' href='LinkTelegram' target='_blank'><img src={Telegram}></img></a> */}

          <a className='buttontwitter' href='LinkTwitter' target='_blank'><FaTwitter size='2rem'/></a>
          <a className='buttontelegram' href='LinkTelegram' target='_blank'><FaTelegramPlane size='2rem'/></a>
          <a className='buttonmedium' href='LinkMedium' target='_blank'><BsMedium size='2rem'/></a>
          <a className='buttonpanda' href='LinkPanda' target='_blank'><SiFoodpanda size='2rem'/></a>
        {/* </div> */}
      </div>
    </div>

    </div>
  )
}

export default Monitor