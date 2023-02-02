import React from 'react'
import Navbar from "../components/Navbar"
import Monitor from "../components/Monitor"
import Stake from '../components/Stake'
import Tokenomic from '../components/Tokenomic'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Monitor />
        <Stake />
        <Tokenomic />
    </div>
  )
}

export default Home