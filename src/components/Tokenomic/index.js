import React from 'react'
import '../Tokenomic/Tokenomic.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomic = () => {

  const data = {
    labels: ['Burn Wallet', 'Fair Launch', 'Liquidity', 'Giveaways & Airdrops', 'Marketing', 'Treasury & Research', 'Listings & Liquidity Providers', 'Team & Advisors'],
    datasets: [
      {
        label: '% Total Supply',
        data: [30, 25, 15, 10, 5, 5, 5, 5],
        backgroundColor: [
          'rgba(61, 25, 10, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
    
  };

  return (
    <div>
      <div className='TokenomicSection'>
        <div className='TokenomicInfo'>
          <h3>1,000,000,000 BOND</h3>
          <h2>Our Bondnomics</h2>
          <p>Each wallet is public and has a specific role which we disclose in a 100% transparent manner.</p>
        </div>
        <div className='Pie'>
          <Pie data={data} />
        </div>
      </div>
    </div>
  )
}

export default Tokenomic