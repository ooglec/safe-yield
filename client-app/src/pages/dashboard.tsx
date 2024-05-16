import React from 'react'
import Chart from '../components/chart'


const Dashboard = () => {
  return (
    <div className='font-poppins'>
       <div className='text-white flex space-x-5'>
        <div className='flex flex-col gap-3 items-center justify-center bg-gradient-to-b from-white/20 to-white/5 rounded-xl h-[10rem] w-[15rem] text-center p-10'>
          <span className='text-xs'>Staked Safe</span>
          <span className='text-[#4CFAC7] font-bold text-2xl'>36.20</span>
        </div>
        <div className='flex flex-col gap-3 items-center justify-center bg-gradient-to-b from-white/20 to-white/5 rounded-xl h-[10rem] w-[15rem] text-center p-5'>
          <span className='text-xs'>Emma AI Rewards (Early Access)</span>
          <div className='text-[#4CFAC7] font-bold text-xl flex justify-between w-full'>
            <span>12.72 $SAFE</span>
            <button className='bg-[#9999FF] rounded-full text-white h-[1.5rem] text-xs flex items-center justify-center'>Claim</button></div>
        </div>
        <div className='flex flex-col gap-3 items-center justify-center bg-gradient-to-b from-white/20 to-white/5 rounded-xl h-[10rem] w-[15rem] text-center px-5'>
          <span className='text-xs'>Referral rewards</span>
          <div className='text-[#4CFAC7] font-bold text-xl w-full flex justify-between'>
            <span>12.72 $SAFE</span>
            <button className='bg-[#9999FF] rounded-full text-white h-[1.5rem] text-xs flex items-center justify-center'>Claim</button></div>
          <div className='text-[#4CFAC7] font-bold text-xl w-full flex justify-between'>
          <span>12.72 $SAFE</span>
            <button className='bg-[#9999FF] rounded-full text-white h-[1.5rem] text-xs flex items-center justify-center'>Claim</button>
          </div>
        </div>
      </div>

      <div className='text-white font-bold text-2xl my-10'>Emma AI early access <span className='text-[#4CFAC7]'>performance</span></div>
      <div className='w-full flex items-center justify-center'>
      <div className='bg-gradient-to-b from-white/20 to-white/5 rounded-xl h-[20rem]  text-white w-[35rem] flex items-start justify-center text-center '>
        <Chart />
      </div>
      </div>
    </div>
  )
}

export default Dashboard
