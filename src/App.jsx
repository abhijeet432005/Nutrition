import React, { useEffect, useState } from "react";
import HeroPage from "./pages/HeroPage";
import FloatingCan from "./pages/FloatingCan";
import Mid from "./pages/Mid";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelicity";
import Endsection from "./pages/Endsection";
import ReactLenis from "lenis/react";
import Loader from "./pages/Loader";
import Premium from "./pages/Premium";

const App = () => {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [loading]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-[#ADC59B]">
      

      {/* MAIN APP — ALWAYS MOUNTED */}
      <ReactLenis
        root
        options={{
          lerp: 0.045,
          smoothWheel: true,
        }}
      >
        {loading && <Loader onComplete={() => setLoading(false)} />}
        <HeroPage />

        <div className="h-[30vh] relative">
          <div className="bg-[#E7EFE4] w-full absolute h-64"></div>

          <div className="-rotate-10 w-[120vw] absolute -left-44">
            <ScrollVelocity
              texts={["It´s a Match(a) · It´s a Match(a) · It´s a Match(a)"]}
              velocity={100}
              className="custom-scroll-text font-[founders] uppercase bg-[#1E4D1C] text-[#B6CBA5]"
            />
          </div>

          <div className="rotate-10 w-[120vw] absolute -left-44">
            <ScrollVelocity
              texts={["It´s a Match(a) · It´s a Match(a) · It´s a Match(a)"]}
              velocity={100}
              className="custom-scroll-text font-[founders] uppercase bg-[#1E4D1C] text-[#B6CBA5]"
            />
          </div>
        </div>

        <Mid />
        <FloatingCan />
        <Endsection />
        <Premium />

      </ReactLenis>

      
    </div>
  );
};

export default App;