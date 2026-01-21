import React, { useEffect, useRef } from "react";
import Nutrition from "../Nutrition";
import gsap from "gsap";

const Left = () => {
  const imgRef = useRef(null);
  const bubbleRefs = useRef([]);
  const xSetters = useRef([]);
  const ySetters = useRef([]);

  const nutrition = [
    {
      quantity: 20,
      measure: "G",
      text: "of Protien",
      top: 0,
      left: 15,
    },
    {
      quantity: 95,
      measure: "%",
      text: "less Sugar",
      top: 7,
      left: 7,
    },
    {
      quantity: 85,
      measure: "MG",
      text: "of Caffien",
      top: 16,
      left: 2,
    },
  ];

  useEffect(() => {
    const startFrame = 90;
    const endFrame = 115;

    let frame = startFrame;
    let direction = 1; // 1 = forward, -1 = backward

    const interval = setInterval(() => {
      frame += direction;

      if (frame >= endFrame || frame <= startFrame) {
        direction *= -1; // reverse direction
      }

      if (imgRef.current) {
        imgRef.current.src = `/Sequence of images/seq_0_${frame}.webp`;
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const handleBubbleMove = (e, idx) => {
    const bubble = bubbleRefs.current[idx];
    if (!bubble) return;

    const rect = bubble.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const intensity = 0.4;

    xSetters.current[idx](x * intensity);
    ySetters.current[idx](y * intensity);
  };

  const resetBubble = (idx) => {
    if (!xSetters.current[idx] || !ySetters.current[idx]) return;

    xSetters.current;
    ySetters.current;
  };
  useEffect(() => {
    bubbleRefs.current.forEach((bubble, idx) => {
      if (!bubble) return;

      xSetters.current[idx] = gsap.quickTo(bubble, "x", {
        duration: 0.3,
        ease: "power4.out",
      });

      ySetters.current[idx] = gsap.quickTo(bubble, "y", {
        duration: 0.3,
        ease: "power4.out",
      });
    });
  }, []);

  return (
    <div className="w-[60vw] relative">
      <div>
        <img
          ref={imgRef}
          src="/Sequence of images/seq_0_97.webp"
          alt=""
          className="absolute -top-50 left-25 w-full h-full rotate-12 "
        />
      </div>

      <div>
        <div className="absolute left-10 -top-4">
          <img
            src="/home page/real Matcha, Origin al Taste.svg"
            className="-rotate-12 float"
            alt=""
          />
          <img
            src="/home page/stage-sketch-arrow.svg"
            className="w-15 object-contain mt-4 ml-4 float rotate-15"
            alt=""
          />
        </div>

        {nutrition.map((elem, idx) => (
          <div
            key={idx}
            ref={(el) => (bubbleRefs.current[idx] = el)}
            onMouseMove={(e) => handleBubbleMove(e, idx)}
            onMouseLeave={() => resetBubble(idx)}
            style={{ top: `${elem.top}rem`, left: `${elem.left}rem` }}
            className="absolute bg-[#E5EEE2] w-34 h-34 flex flex-col justify-center items-center rounded-full 
               transition-transform duration-200 ease-out cursor-pointer"
          >
            <h1 className="text-[3.5rem] font-[founders-semibold] leading-12 text-[#174815]">
              {elem.quantity}
              <span className="text-3xl">{elem.measure}</span>
            </h1>
            <h1 className="text-[1.2rem] tracking-tight font-[founders] leading-3 text-[#174815]">
              {elem.text}
            </h1>
          </div>
        ))}
      </div>

      <div className="stage-bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-50 0 831 818"
          fill="none"
          className="stage-bg-svg w-full"
        >
          <path
            d="M542.941 42.7702C707.951 122.986 766.918 351.375 667.592 555.698C568.265 760.021 352.233 854.727 187.223 774.512C22.2122 694.296 -36.7556 465.905 62.5711 261.582C161.898 57.2593 377.93 -37.4456 542.941 42.7702Z"
            fill="none"
            stroke="#ffffff"
            className="text-[3.5rem] font-[founders-semibold] leading-12 text-[#174815]"
            strokeWidth="28"
            style={{
              strokeDashoffset: -1170.03,
              strokeDasharray: "2340.07px, 0.105px",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Left;
