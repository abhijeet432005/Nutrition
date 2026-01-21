import React from 'react'

const Right = () => {
  return (
    <div className='w-[30vw] flex flex-col items-center pt-0 pl-30'>
      <h1 className='text-[8vw] uppercase font-[founders-semibold] text-white leading-[7vw]'>Matcha</h1>
      <h1 className='text-[8vw] uppercase font-[founders-semibold] text-[#1E4D1C] leading-[4vw]'>meets</h1>
      <h1 className='text-[8vw] uppercase font-[founders-semibold] text-[#1E4D1C] leading-[7vw]'>Protein</h1>

      <p className='mt-10 text-center text-[1.5rem] font-[founders-semibold] leading-6 w-[25vw] text-[#1E4D1C]'>
        Our More Protein Iced Matcha Latte blends
        matcha with protein and glucomannan, a
        natural fiber that supports weight loss.
      </p>
      <div className='flex justify-end w-full'>
        <img src="public/home page/Layer_1 (3).svg" className='float' alt="" />

      </div>

    </div>
  )
}

export default Right