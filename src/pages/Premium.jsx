import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Verified } from "lucide-react";

const Premium = () => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  const content = [
    {
      main: "Highly Recommended",
      text: "Very tasty, dissolves perfectly. No clumps and a proper matcha flavor.",
      name: "Carolin S.",
    },
    {
      main: "Clean Energy Boost",
      text: "Gives smooth energy without jitters. Perfect for my morning routine.",
      name: "Aman K.",
    },
    {
      main: "Love the Taste",
      text: "Honestly the best matcha I’ve tried. Creamy, fresh and not bitter at all.",
      name: "Sophia M.",
    },
    {
      main: "No Sugar Crash",
      text: "I feel focused for hours. No sugar crash like coffee.",
      name: "Rahul P.",
    },
    {
      main: "Premium Quality",
      text: "You can tell the quality instantly. Worth every penny.",
      name: "Emily R.",
    },
    {
      main: "Daily Ritual",
      text: "This has replaced my coffee completely. Super smooth and calming.",
      name: "Daniel W.",
    },
    {
      main: "Perfect Blend",
      text: "Matcha + protein combo is genius. Tastes great and keeps me full.",
      name: "Neha S.",
    },
  ];

useEffect(() => {
  const track = trackRef.current;
  const cards = track.querySelectorAll(".carousel-card");
  const totalWidth = track.scrollWidth / 2;

  tweenRef.current = gsap.to(track, {
    x: -totalWidth,
    duration: 45,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: (x) => `${parseFloat(x) % totalWidth}px`,
    },
    onUpdate: () => {
      const centerX = window.innerWidth / 2;

      let closestCard = null;
      let closestDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = card;
        }
      });

      cards.forEach((card) => {
        card.classList.remove("is-active");
      });

      closestCard?.classList.add("is-active");
    },
  });

  gsap.to('.Image', {
    y: -100,
    scrollTrigger: {
        trigger: ".Image",
        scrub: true,
        start: "top 40%"
    }
  })
}, []);

  const pause = () => tweenRef.current?.pause();
  const play = () => tweenRef.current?.play();

  return (
    <div className="relative w-full h-[160vh] bg-[#E7EFE4] overflow-hidden">

        <div className="absolute top-10 w-56 float left-[50%] -translate-x-1/2 z-30 ">
            <img src="/End Section/testimonial-signature.svg" alt=""  />
        </div>
      {/* BACKGROUND */}
      <div className="absolute inset-0 h-[160vh] overflow-hidden">
        <img
          src="/End Section/premium.webp"
          className="absolute Image -top-20 h-[200vh] w-full object-cover"
          alt=""
        />
        <img
          src="/End Section/2.webp"
          className="absolute Image -top-20 h-[200vh] w-full object-cover z-40"
          alt=""
        />
      </div>

      {/* TITLE */}
      <div className="absolute top-40 w-full flex justify-center z-20">
        <h1 className="text-center text-white text-[12vw] leading-[9vw] font-[founders]">
          Clean. Green. <br /> Goodness.
        </h1>
      </div>

      {/* CAROUSEL */}
      <div className="absolute bottom-0 w-full h-[45vh] overflow-hidden z-30">
        <div
          ref={trackRef}
          className="flex gap-10 px-10 will-change-transform"
        >
          {[...content, ...content].map((elem, idx) => (
            <div
              key={idx}
              onMouseEnter={pause}
              onMouseLeave={play}
              className="
              carousel-card
                group
                bg-transparent
                border border-white
                w-[30vw] min-w-[30vw] h-[25vw]
                flex flex-col justify-center
                p-8 rounded-2xl shrink-0
                
              "
            >
              <div className="text-[#335C30] transition-opacity duration-300 group-hover:opacity-100 opacity-80">
                <h1 className="font-[founders] text-[3vw] leading-tight">
                  {elem.main}
                </h1>

                <p className="mt-6 text-xl leading-6">
                  {elem.text}
                </p>

                <div className="w-full h-px bg-[#335C30] mt-15" />
              </div>

              <div className="w-full flex justify-between items-center mt-8 text-[#335C30]">
                <h1>{elem.name}</h1>
                <div className="flex gap-2 items-center">
                  <Verified size={18} /> Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Premium;