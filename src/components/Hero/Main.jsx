import React from "react";
import More_SVG from "./More_SVG";
import { ArrowUpRight } from "lucide-react";
import Bottom from "./Bottom/Bottom";

const Main = ({ animate }) => {
  
  return (
    <div className="w-full relative">
      {/* More svg  */}
      <div className="h-[30vh]">
        <div className="absolute -top-15 -left-2 w-full h-full">
            <More_SVG className="w-full h-full" />
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <ArrowUpRight className="text-[#E7EFE4] w-10 rounded-full h-10 px-2 bg-[#1E4D1C]" />
          <button className="text-[#E7EFE4] h-10 text-[1.8rem] bg-[#1E4D1C] rounded-full px-3 font-[founders] tracking-wider flex justify-center items-center">
            Buy Now
          </button>
        </div>
      </div>

      {/* bottom */}

      <Bottom animate={animate} />
    </div>
  );
};

export default Main;
