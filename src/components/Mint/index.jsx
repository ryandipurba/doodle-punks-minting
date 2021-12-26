import React from 'react'
import Giphy from '../../assets/giphy.gif'
import App from '../../App'
import './index.css'

const MintSection = () => {
  return (
    <div className="mint">
      <img src={Giphy} alt="" className="gif-doodles" />
      <h2>Mint a Doodle punks</h2>
      <span className="qty">Price 0.12 SOL</span>
      <App />
    </div>
  )
}

export default MintSection