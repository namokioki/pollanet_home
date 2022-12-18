import React from 'react'
import { FaInstagram,FaDiscord,FaYoutube,FaTwitter,FaFacebook,FaGooglePlay,FaApple } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
            <div className='footer_top'>
                <img src="/logo.png" className='footer_img' />
                <h4 className='footer_top_title'>Pollanet</h4>
                <p className='footer_top_info'>세상을 바꾸는 가장 작은 습관</p>
                <button className='app_download'><span className='google_icon'><FaGooglePlay/></span><span className='google_play'>Google Play</span></button>
                <button className='app_download'><span className='google_icon'><FaApple/></span><span className='google_play'>App Store</span></button>
            </div>

            <div className='footer_bottom'>
                <div className='icons_border'>
                    <span className='footer_icons'><FaInstagram/></span>
                </div>
                <div className='icons_border'>
                    <span className='footer_icons'><FaDiscord/></span>
                </div>
                <div className='icons_border'>
                    <span className='footer_icons'><FaYoutube/></span>
                </div>
                <div className='icons_border'>
                    <span className='footer_icons'><FaTwitter/></span>
                </div>
                <div className='icons_border'>
                    <span className='footer_icons'><FaFacebook/></span>
                </div>
            
                <p className='footer_bottom_info'>Copyright © 2022 Pollanet, Ltd. All rights reserved. Site credit.</p>
            </div>
        </div>
  )
}

export default Footer