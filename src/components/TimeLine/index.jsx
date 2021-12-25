import React from 'react'
import './index.css'

const TimeLine = () => {
  return (
    <div className="roadmap">
      <h1 className="font-agent">Roadmap</h1>
      <div className="timeline">
        <div className="container left">
          <div className="arrow-left"></div>
          <div className="content">
            <p className="font-omnes">Launch a Stealth Mint of 963 Doodle punks.</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <p className="font-omnes">Sell out and get listed on major exchanges</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <p className="font-omnes">We realized NFT's are more about the friend you make, so building a nice positive welcoming community will be our main focus</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <p className="font-omnes">What is a NFT project without merch? We will release nice merch once it is ready so you can rock it and show off to all your friends!</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <p className="font-omnes">A 2nd secret NFT collection will happen sometime in 2022 so we can make even more friends and grow our community even more!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
