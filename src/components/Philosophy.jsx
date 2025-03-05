import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./philosophy.css";
import phil from "../assets/2.mp4";

const Philosophy = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-300 w-full bg-zinc-950 relative">
      <div
        data-aos="fade-up"
        className="h-300 w-full bg-white rounded-t-[90px] absolute"
      >
        <div className="p-25 mt-15 mx-15 text-9xl">
          <h1>Our</h1>
          <h1 className="design">Philosophy</h1>
        </div>

        <div className="flex w-full h-200 p-25 gap-15">
          <div className="h-120 w-1/2">
            <video
              src={phil}
              type="video/mp4"
              muted
              autoPlay
              playsInline
              preload=""
              loop
              className="w-full h-full"
            ></video>
          </div>
          <div className="h-120 w-1/2 p-10 text-2xl">
            <h2>
              In our team, developers work alongside designers, strategists and
              analysts. Cuberto doesn't do cookie-cutter solutions and we build
              products exactly as they were during the design phase, no short
              cuts or simplifications.
              <br />
              <br />
               We're driven by user‑centered design that
              drives productivity and increases revenue. Our expertise and
              ingenuity are remarkable, yet we always strive to outdo and
              outperform our previous achievements.{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
