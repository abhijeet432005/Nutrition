import React from "react";
import Left from "../components/Middel Section/Left";
import Right from "../components/Middel Section/Right";

const Mid = () => {
  return (
    <div className="w-full flex flex-col bg-[#E7EFE4]  h-[118vh] relative">
      <div className="flex justify-center text-center">
        <h1 className="text-[12vh] leading-[9vh] tracking-tight font-[founders]">
          <span className="text-[#335C30]">You deserve the best.</span><br /><span className="text-[#335C30]">You deserve More:</span><br /><span className="text-[#91B96D]">Iced Matcha Latte.</span></h1>
      </div>

      <div className="w-full flex mt-20">
        <Left />
        <Right />
      </div>

      <div className="absolute bottom-5 right-50 w-44 h-30 float">
        <img src="public/home page/sequence-why-people-love-it.svg" alt="" className=""  />
        <img src="public/home page/sequence-why-people-arrow.svg" className="w-20" alt="" />
      </div>
      
    </div>
  );
};

export default Mid;
