import React from 'react'
import { safeCoin } from '../assets'

const BuySafe = () => {
  return (
    <div className='text-poppins py-40'>
      <div className='flex flex-col gap-2 mb-10'>
        <span className='text-[#9999FF] font-bold text-2xl'>$SAFE Pre-sale is live!</span>
        <span className='text-white/80 font-medium text-2xl'>2M $SAFE at 1$ for a 1.10$ launch price</span>
      </div> 
      <div className='flex flex-col justify-center items-center px-24 gap-6 bg-gradient-to-b from-white/20 to-white/5 mb-10 text-white rounded-xl h-[20rem] w-[35vw]'>
        <div className='w-full flex  flex-col items-center '>
        <p className='text-xl w-full flex justify-start pl-5 mb-3'>Amount</p>
        <div className='text-white bg-white/20 h-16 w-full rounded-full flex justify-between items-center px-6'>
          <span>0 USDC</span>
          <span>Max.</span>
        </div>
        </div>
        <div className='flex gap-3 justify-center w-full'>
          <span className='text-white'>You will get</span>
          <span className='text-[#4CFAC7]'>0 $SAFE</span>
        </div>
        <button className='bg-[#9999FF] rounded-full text-white flex items-center justify-center w-[13rem]'>Buy $Safe</button>
      </div>
      <div className='flex  flex-col  items-center  gap-2 p-8 px-24 bg-gradient-to-b from-white/20 to-white/5 rounded-xl text-white h-[10rem] w-[35vw]'>
        <p className='text-'>Available $SAFE</p>
        <div className='text-white bg-white/20 h-6 w-full rounded-full flex justify-between items-center'>
          <div className='w-[35%] h-full rounded-full bg-[#4CFAC7]'></div>
        </div>
        <div className='flex justify-between w-full text-sm'>
          <span className='text-white'>3,355.00 $SAFE</span>
          <span className='text-[#4CFAC7]'>2M $SAFE</span>
        </div>
      </div>
      <div className='w-full flex justify-center flex-col mb-10'>
        <div className='flex items-center justify-center'>
        <img src={safeCoin} className='w-[10rem] pl-5'/>
        </div>
        <div className='flex flex-col items-center justify-center text-[#4CFAC7]'>
          <span>Stake $SAFE</span>
          <span>and get</span>
        </div>
      </div>

      <div className='text-white flex space-x-5'>
        <div className='bg-gradient-to-b from-white/20 to-white/5 rounded-xl h-[10rem] w-[15rem] flex items-start justify-center text-center p-10'>Governance power over SafeYields</div>
        <div className='bg-gradient-to-b from-white/20 to-white/5 rounded-xl h-[10rem] w-[15rem] flex items-start justify-center text-center p-10'>Early access to Emma AI up until launch</div>
        <div className='bg-gradient-to-b from-white/20 to-white/5 rounded-xl h-[10rem] w-[15rem] flex items-start justify-center text-center p-10'>Revenue share from protocol generates fees</div>
      </div>
    </div>
  )
}

export default BuySafe
