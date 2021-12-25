import React from 'react'
import Logo from '../../assets/logo.png'
import Twitter from '../../assets/twitter.png'
import Discord from '../../assets/discord.png'
import './index.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper-navbar">
        <img src={Logo} alt="Doodle Punks" className="logo" />
        <div className="sosmed">
          <a href="https://discord.gg/cU3CHBRKzp" target="_blank" rel="noreferrer">
            <img src={Discord} alt="Twitter" className="discord-icon" />
          </a>
          <a href="https://twitter.com/SOLdoodlepunks_" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="Twitter" className="twitter-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
