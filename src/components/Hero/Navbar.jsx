import gsap from "gsap";
import { ArrowBigRight, ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef } from "react";

const Navbar = () => {
  const wrapperRef = useRef(null);
  const arrowRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const arrow = arrowRef.current;
    const btn = btnRef.current;

    const enter = () => {
      gsap.to(arrow, {
        x: 100,
        // rotate: 45,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(btn, {
        x: -50,
        y: -3,
        rotate: -5,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(arrow, {
        x: 0,
        rotate: 0,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(btn, {
        x: 0,
        y: 0,
        rotate: 0,
        // duration: 0.4,
        ease: "power3.out",
      });
    };

    wrapper.addEventListener("mouseenter", enter);
    wrapper.addEventListener("mouseleave", leave);

    return () => {
      wrapper.removeEventListener("mouseenter", enter);
      wrapper.removeEventListener("mouseleave", leave);
    };
  }, []);
  return (
    <div className="w-full flex justify-between items-center p-12">
      <div className="flex gap-1.5">
        <img
          src="/home page/instagram.svg"
          alt=""
          className=" bg-[#E7EFE4] rounded-full px-1.5 py-1.5 hover:-translate-y-3 duration-300"
        />
        <img
          src="/home page/tiktok.svg"
          alt=""
          className=" bg-[#E7EFE4] rounded-full px-1.5 py-1.5 hover:-translate-y-3 duration-300"
        />
        <img
          src="/home page/youtube-svgrepo-com.svg"
          alt=""
          className="w-10 bg-[#E7EFE4] rounded-full px-1.5 py-1.5 hover:-translate-y-3 duration-300"
        />
      </div>

      <div className="flex gap-2">
        <button className="font-[founders] bg-[#95B085] text-white px-2.5 py-0 rounded-2xl text-[1.5rem] hover:-translate-y-3 hover:-rotate-8 duration-300">
          Nutrition
        </button>
        <button className="font-[founders] bg-[#95B085] text-white px-2.5 py-0 rounded-2xl text-[1.5rem] hover:-translate-y-3 duration-300">
          Benefits
        </button>
        <button className="font-[founders] bg-[#95B085] text-white px-2.5 py-0 rounded-2xl text-[1.5rem] hover:-translate-y-3 hover:rotate-8 duration-300">
          Reviews
        </button>
      </div>

      <div ref={wrapperRef} className="flex cursor-pointer">
        <ArrowUpRight
          ref={arrowRef}
          className="bg-[#E7EFE4] w-10 h-10 px-2 rounded-full text-[#335C30]"
        />
        <button
          ref={btnRef}
          className="bg-[#E7EFE4] h-10 text-[1.8rem] text-[#335C30] rounded-full px-3 font-[founders] tracking-wider flex items-center"
        >
          Shop all
        </button>
      </div>
    </div>
  );
};

export default Navbar;
