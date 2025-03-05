import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import vid from "../assets/projects.mp4";
import cover from "../assets/cover.mp4";
import cover2 from "../assets/cover2.mp4";
import cover3 from "../assets/cover3.mp4";
import cover4 from "../assets/cover4.mp4";
import "./featuredprojects.css";

const FeatureProjects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Separate refs for each video
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="w-full h-600 bg-zinc-950 rounded-t-[120px]"
    >
      <div
        data-aos="fade-up"
        className="flex flex-col p-30 text-white text-8xl gap-8"
      >
        <h1>Featured</h1>
        <div className="flex items-center">
          <video
            src={vid}
            type="video/mp4"
            muted
            loop
            autoPlay
            preload="auto"
            playsInline
            className="rounded-full"
          ></video>
          <h1 className="design">&nbsp;projects</h1>
        </div>
      </div>

      <div className="cards flex px-50 gap-40 items-center justify-center">
        <div className="h-350 w-90 flex flex-col items-center gap-70">
          <div className="h-120 w-full">
            <video
              ref={videoRef1}
              src={cover}
              className="w-full h-full object-cover rounded-4xl"
              type="video/mp4"
              muted
              loop
              playsInline
              onMouseEnter={() => handleMouseEnter(videoRef1)}
              onMouseLeave={() => handleMouseLeave(videoRef1)}
            ></video>
            <h2 className="font-semibold text-2xl text-white">
              <span className="font-bold">Punto Pago</span> - The First
              Super-App in Latin America
            </h2>
          </div>

          <div className="h-120 w-full">
            <video
              ref={videoRef2}
              src={cover2}
              className="w-full h-full object-cover rounded-4xl"
              type="video/mp4"
              muted
              loop
              playsInline
              onMouseEnter={() => handleMouseEnter(videoRef2)}
              onMouseLeave={() => handleMouseLeave(videoRef2)}
            ></video>
            <h2 className="font-semibold text-2xl text-white">
              <span className="font-bold">DaoWay</span> - Astrology planner App
              : plan,achieve,thrive
            </h2>
          </div>
        </div>

        <div className="h-350 w-90  pt-70 flex flex-col items-center gap-70">
          <div className="h-120 w-full">
            <video
              ref={videoRef3}
              src={cover3}
              className="w-full h-full object-cover rounded-4xl"
              type="video/mp4"
              muted
              loop
              playsInline
              onMouseEnter={() => handleMouseEnter(videoRef3)}
              onMouseLeave={() => handleMouseLeave(videoRef3)}
            ></video>
            <h2 className="font-semibold text-2xl text-white">
              <span className="font-bold">Kelwin Zero</span> - A digital product
              for passwordless authentication
            </h2>
          </div>

          <div className="h-120 w-full">
            <video
              ref={videoRef4}
              src={cover4}
              className="w-full h-full object-cover rounded-4xl"
              type="video/mp4"
              muted
              loop
              playsInline
              onMouseEnter={() => handleMouseEnter(videoRef4)}
              onMouseLeave={() => handleMouseLeave(videoRef4)}
            ></video>
            <h2 className="font-semibold text-2xl text-white">
              <span className="font-bold">Kelwin Zero</span> - A digital product
              for passwordless authentication
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProjects;
