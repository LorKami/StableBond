import React from 'react'
import '../Stake/Stake.css'

import ImageStake from '../../images/Stakeandearn.png'
import ImageWaves from '../../images/waves.png'

const Stake = () => {
  return (
    <div>
        
    <div className='StakeSection'>
        <div className='StakeSeparation'>
        <img src={ImageWaves}></img>
        </div>
        <div className='StakeInfo'>
        <img src={ImageStake}></img>
        </div>
    </div>

    </div>
  )
}

export default Stake