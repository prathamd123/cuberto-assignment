import React from "react";
import { motion } from "framer-motion";
import sampleVideo from "../assets/sample.mp4"; 
import './philosophy.css'

const MarqueeWithVideo = () => {
  return (
    <div className="overflow-hidden text-black py-6 mt-30">
      <motion.div
        className="flex items-center gap-16 text-9xl font-extrabold whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }} 
      >
        {Array(10).fill(null).map((_, index) => (
          <div key={index} className="flex items-center gap-16">
            <span className="tracking-tighter design">New Day -- New Inspo</span>
            <video
              src={sampleVideo}
              className="w-[300px] h-auto rounded-4xl shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            ></video>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeWithVideo;
