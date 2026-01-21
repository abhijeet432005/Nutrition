import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const LeftEnd = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Initial state (hidden line)
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Scroll-triggered draw animation
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 40%",
        end: "top 90%",
        scrub: 1,
        // markers: true
      },
    });
  }, []);
  return (
    <div
      ref={containerRef}
      className="w-[40vw] h-full bg-[#D7E4DB] rounded-[5px] relative"
    >
      <img
        src="public/End Section/cup.webp"
        alt=""
        className="w-full absolute z-99"
      />
      <div className="absolute z-10 w-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 575 559"
          width="100%"
          className="benefit-svg"
        >
          <path
            ref={pathRef}
            id="benefit-path"
            d="M-56.447 495.508
                C-26.61 513.052 53.628 569.352 87 532.069
                c46.24-51.66 4.952-146.571-102.084-223.636
                -107.035-77.065-70.703-150.5-16.274-179.818
                C100.1 57.804 196.947 412.744 398.5 290.569
                583.168 178.628 665 -36.931 945 24.953"
            fill="none"
            stroke="#ffff"
            strokeWidth="27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <img
        src="public/End Section/cup2.webp"
        alt=""
        className="w-full absolute"
      />
    </div>
  );
};

export default LeftEnd;
