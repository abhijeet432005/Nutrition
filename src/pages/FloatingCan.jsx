import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CanFloating() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const [frame, setFrame] = useState(0);
  gsap.registerPlugin(ScrollTrigger);

  const TOTAL_FRAMES = 200;

  const frames = Array.from(
    { length: TOTAL_FRAMES },
    (_, i) => `/Sequence of images/seq_0_${i}.webp`,
  );

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 12}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,   // 🔥 IMPORTANT
    pinSpacing: true,
      onUpdate: (self) => {
        const index = Math.floor(self.progress * (TOTAL_FRAMES - 1));
        setFrame(index);
      },
    });

    return () => st.kill();
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 12}`,
        scrub: 0.3,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    
    <section className="can-floating bg-[#E7EFE4] relative" ref={sectionRef}>

      <div className="svg-container absolute inset-0 pointer-events-none z-0 top-0 flex justify-center items-center h-full w-[2000px]">
        <svg
          ref={svgRef}
          width="4989"
          height="2205"
          viewBox="0 0 4989 3205"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
           d="M6035.09 0.45343C6035.09 0.45343 4318.09 725.953 3620.09 788.953C2922.09 851.953 1991.81 136.285 1254.09 244.953C873.815 300.969 111.845 -203.93 47.0895 174.953C-14.9657 538.035 1092.57 547.632 1059.09 914.453C1024.97 1288.22 347.101 881.931 110.09 1172.95C-499.351 1921.28 1588.51 1716.11 2545.59 1591.95C3540.69 1462.86 4372.76 689.939 5274.09 1130.95C5681.06 1330.08 5952.78 1537.7 6069.59 1975.45C6312.35 2885.2 4620 1610.76 3843.59 2143.45C3020.09 2708.45 2526.5 1612.95 1709 2143.45"
            stroke="#ffff"
            strokeWidth="45"
          />
        </svg>
      </div>
      
      <img src={frames[frame]} className="can-img" alt="Can rotation" />
    </section>
  );
}


