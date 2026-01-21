import React from "react";
import Magnet from "../Magnet/Magnet";

const Left = () => {
  const video = [
    {
      url: "/Videos/SnapInsta.to_3.mp4",
      top: 20,
      left: 25,
      rotate: 12,
      index: 9,
    },
    {
      url: "/Videos/SnapInsta.to_2.mp4",
      top: 40,
      left: 10,
      rotate: -10,
      index: 8,
    },
    {
      url: "/Videos/SnapInsta.to_1.mp4",
      top: 25,
      left: 0,
      rotate: 0,
      index: 7,
    },
  ];
  return (
    <div className="w-[60vw] ralative">
      {video.map((elem, idx) => (
        <div
          className="absolute w-[25vw] h-[70vh]"
          style={{
            top: `${elem.top}rem`,
            left: `${elem.left}rem`,
            transform: `rotate(${elem.rotate}deg)`,
            zIndex: `${elem.index}`,
          }}
          key={idx}
        >
          <Magnet padding={0} disabled={false} magnetStrength={5}>
            <video
              src={elem.url}
              autoPlay
              muted
              className="w-full h-full object-cover border-[1rem] border-white"
            ></video>
          </Magnet>
        </div>
      ))}
    </div>
  );
};

export default Left;
