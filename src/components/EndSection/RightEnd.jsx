import React from "react";
import More_SVG from "../Hero/More_SVG";
import { Check } from "lucide-react";

const RightEnd = () => {
    const ingredients = [
        {
            ing: "Low in carbs",
            right: <Check />,
            no: "X"
        },
        {
            ing: "Low in carbs",
            right: <Check />,
            no: "X"
        },
        {
            ing: "Low in carbs",
            right: <Check />,
            no: "X"
        },
        {
            ing: "Low in carbs",
            right: <Check />,
            no: "X"
        },
        {
            ing: "Low in carbs",
            right: <Check />,
            no: "X"
        },
        {
            ing: "Low in carbs",
            right: <Check />,
            no: "X"
        },
        {
            ing: "Low in carbs",
            right: <Check />,
            no: "X"
        },
    ]

  return (
    <div className="w-[50vw] h-full flex flex-col justify-center items-start">
      <h1 className="text-6xl font-[founders] leading-13 text-[#91B96D]">
        More for you. <br />
        <span className="text-[#335C30]">See the difference.</span>
      </h1>

      <div className="flex flex-col  justify-between items-end w-[40vw] mt-15">
        <div className="flex items-end justify-between w-full">
          <div>
            <h1>Benefits</h1>
          </div>
          <div className="flex items-end">
            <div className="w-44">
              <More_SVG className="" />
            </div>
            <h1>Regular Motcha</h1>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#335C30] mt-2"></div>

        {
            ingredients.map((elem, idx) => (
                <div className={`pt-1 w-full flex flex-col ${idx < ingredients.length - 1 && "border-b"}`} key={idx}>
                    <div className="pt-3 pb-3 w-full flex justify-between items-center">
                        <h1 className="text-xl font-[founders-regular] text-[#335C30]">{elem.ing}</h1>

                        <div className="flex items-center justify-between w-64">
                            <h1 className=" w-28 flex justify-center bg-[#E7EFE4] h-12 items-center rounded-2xl">{elem.right}</h1>
                            <h1 className="w-32 text-center text-2xl">{elem.no}</h1>
                            
                        </div>

                    </div>


                </div>
            ))
        }
      </div>
    </div>
  );
};

export default RightEnd;
