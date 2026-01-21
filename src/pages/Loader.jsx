import { useEffect, useRef } from "react";
import gsap from "gsap";
import More_SVG from "../components/Hero/More_SVG";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);

useEffect(() => {
  const paths = loaderRef.current.querySelectorAll("path");
  const svgWrapper = loaderRef.current.querySelector(".loader-svg");
  const bg = loaderRef.current.querySelector(".loader-bg");

  gsap.set(svgWrapper, { y: 0, scale: 1 });
  gsap.set(bg, { yPercent: 0 });

  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });

  const tl = gsap.timeline();

  tl
    // ✍️ Draw
    .to(paths, {
      strokeDashoffset: 0,
      duration: 1.4,
      stagger: 0.12,
      ease: "power3.out",
    })

    // ✨ micro bounce
    .to(
      paths,
      {
        y: -6,
        duration: 0.4,
        yoyo: true,
        repeat: 1,
        stagger: 0.04,
      },
      "-=0.3"
    )

    // 🚀 SVG UP + BG DOWN (SAME TIME = NO HOLD)
    .to(
      svgWrapper,
      {
        y: -204,
        x: -8.5,
        scale: 1,
        duration: 0.8,
        ease: "power3.inOut",
      },
      "+=0.03" // very small gap only
    )
    .to(
      bg,
      {
        yPercent: 100,
        duration: 0.8,
        ease: "power3.inOut",
      },
      "<0.8" // 👈 SAME START AS SVG
    )

    // ✅ remove loader AFTER motion is visible
    .add(() => onComplete(), "-=0.65");

}, [onComplete]);
  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none"
    >
      <div className="loader-bg absolute inset-0 bg-[#ADC59B]" />

      <div className="loader-svg absolute inset-0 flex items-center justify-center">
        <div className="w-full">
          <More_SVG />
        </div>
      </div>
    </div>
  );
};

export default Loader;