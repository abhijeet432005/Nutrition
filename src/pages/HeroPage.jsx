import React from "react"
import Navbar from "../components/Hero/Navbar"
import Main from "../components/Hero/Main"

const HeroPage = () => {
  return (
    <div className="relative w-full h-[120vh] bg-[#ADC59B] overflow-hidden">
      <Navbar />
      <Main />
      <div className="bg-[#E7EFE4] w-64 h-30 absolute -bottom-20" />
      <div className="bg-[#E7EFE4] w-84 h-35 absolute -bottom-20 right-0" />

      {/* BOTTOM CURVE */}
      {/* <div className="absolute -bottom-10 left-0 w-full h-[25vh] overflow-hidden">
        <svg
          viewBox="0 0 1440 385"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >

          <path id="#mypath" d="M1440 310
            C1440 310 1180 40 920 15
            C660 -10 300 240 0 310
            L0 360
            L1440 360
            Z" 
            class="shape-fill" fill="#ffff"
           />

           <text>
            <textPath fu href="#mypath">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio quos sint eaque sapiente voluptatem nostrum aspernatur sunt provident unde sit veritatis libero, magnam, nobis dolor dolorum cumque quis vel ducimus consequatur modi nisi quo magni! Itaque porro autem quam deserunt rem officia, natus tempore laudantium impedit vitae nesciunt quas.
            </textPath>
           </text>
        </svg>

      </div> */}
    </div>
  )
}

export default HeroPage


