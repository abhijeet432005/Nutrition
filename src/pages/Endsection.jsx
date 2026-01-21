import React from 'react'
import LeftEnd from '../components/EndSection/LeftEnd'
import RightEnd from '../components/EndSection/RightEnd'

const Endsection = () => {
  return (
    <div className='w-full min-h-screen bg-[#E7EFE4] relative h-[100vh] pl-2 pr-2 pb-2'>
        
        <img src="public/End Section/Group 42.svg" alt="" className='absolute left-[50%] -top-10'/>
        <div className="wrapper w-full flex justify-between bg-white border-4 h-full border-white rounded-[5px] p-2">
            <LeftEnd />
            <RightEnd />
        </div>
    </div>
  )
}

export default Endsection