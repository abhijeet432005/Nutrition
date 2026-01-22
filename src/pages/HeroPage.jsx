import React from "react"
import Navbar from "../components/Hero/Navbar"
import Main from "../components/Hero/Main"

const HeroPage = ({ bottomAnimate }) => {
  return (
    <div
      className="relative w-full h-[120vh] bg-[#ADC59B] overflow-hidden"
    >
      <Navbar />
      <Main animate={bottomAnimate} />
      <div className="bg-[#E7EFE4] w-64 h-30 absolute -bottom-20" />
      <div className="bg-[#E7EFE4] w-84 h-35 absolute -bottom-20 right-0" />
    </div>
  )
}

export default HeroPage


