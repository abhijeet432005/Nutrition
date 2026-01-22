import React, { useEffect, useRef } from 'react'
import Left from './Left'
import Right from './Right'
import gsap from 'gsap';

const Bottom = ({ animate }) => {
  const bottomRef = useRef(null);
  console.log(animate)

  useEffect(() => {
    if (!animate) return;

    gsap.fromTo(
      bottomRef.current,
      {
        y: 120,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        delay: 0.05,
      }
    );
  }, [animate]);

  return (
    <div
      ref={bottomRef}
      className="w-full flex pt-16 will-change-transform opacity-0"
    >
      <Left />
      <Right />
    </div>
  );
};

export default Bottom