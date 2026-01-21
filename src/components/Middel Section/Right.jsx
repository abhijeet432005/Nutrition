import { ArrowUpRight } from "lucide-react";
import React from "react";

const Right = () => {
  return (
    <div className="w-[40vw] flex items-center justify-center pt-15 flex-col">
      <div className="w-[30vw] text-5xl text-[#335C30] font-[founders] leading-10">
        <p>
          We want to make healthy, science-backed nutrition simple and
          accessible - so you can feel better, perform better, and enjoy life
          every single day.
        </p>
      </div>

      <div className="w-[30vw] text-2xl text-[#335C30] font-[founders] leading-5 mt-8">
        <p>
          Loved by thousands of community members, this creation contains real
          green tea powder, premium protein, and glucomannan. Irresistibly
          delicious. Heavenly creamy.
        </p>
      </div>

      <div className="w-[40vw] flex gap-5 ml-33 items-center mt-15">
        <div className="flex justify-center">
          <ArrowUpRight className="text-[#E7EFE4] w-10 rounded-full h-10 px-2 bg-[#1E4D1C]" />
          <button className="text-[#E7EFE4] h-10 text-[1.8rem] bg-[#1E4D1C] rounded-full px-3 font-[founders] tracking-wider flex justify-center items-center">
            Buy Now
          </button>
        </div>

        <div className="flex">
            {
                Array.from({length: 5}).map((_, i) => (
                    <div key={i}>
                        <img src="/Stars/icon-star.svg" alt="" srcset="" />
                    </div>
                ))
            }
            <img src="/Stars/icon-star-half.svg" alt="" srcset="" />
        </div>

        <p className="font-[founders-regular] text-xl border-b text-[#335C30]">3158 Reviews</p>
      </div>

      
    </div>
  );
};

export default Right;
