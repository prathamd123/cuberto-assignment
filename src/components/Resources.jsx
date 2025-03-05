import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./philosophy.css";
import { motion } from "framer-motion";
import img1 from '../assets/cub1.png'
// import img2 from '../assets/cub2.png'
// import img3 from '../assets/cub3.png'

const resources = [
    { id: 1, title: "How to Make UI/UX Website // HTML and CSS development", img: "https://cdn.cuberto.com/cb/upload/b73b0d2feb001c8bd719c808c40ce28b.png" },
    { id: 2, title: "How to cook an Emotional Site // Web Development", img: "https://cdn.cuberto.com/cb/upload/bc24961ad4410b4202a2277bc1c487fb.png" },
    { id: 3, title: "How to Make Epic Website // Frontend Development", img: "https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png" },
    { id: 4, title: "cuberto Mouse Follower", img: "https://cdn.cuberto.com/cb/upload/885fbbc555395f745746b23b73f539f5.png" },
    { id: 5, title: "Making Switch with SVG Distortion Effect", img: "https://cdn.cuberto.com/cb/upload/99d9ee549abf01940d4b1cfa04734b7d.jpg" },
    { id: 6, title: "UI/UX Design Tips/ Volume 9", img: "https://cdn.cuberto.com/cb/upload/ef20532e8de88a471d4bd1338dc93414.png" },
  ];

const Resources = () => {

    const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-300 w-full bg-white relative">
      <div
        data-aos="fade-up"
        className="h-300 w-full bg-zinc-950 rounded-t-[90px] absolute text-white"
      >
        <div className="p-25 mt-7 mx-15 text-9xl">
          <h1>Development</h1>
          <h1>and design</h1>
          <h1 className="design">resources</h1>
        </div>


        <div className="w-90% overflow-hidden ml-30 p-10">
              <motion.div
                ref={sliderRef}
                className="cursor-grab overflow-hidden"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -1000 }} // Adjust based on content
                  className="flex gap-6"
                >
                  {resources.map((resources) => (
                    <motion.div
                      key={resources.id}
                      className="min-w-[400px]  rounded-lg shadow-lg p-4"
                    >
                      <img
                        src={resources.img}
                        alt={resources.title}
                        className="w-full h-50 object-cover rounded-md"
                      />
                      <h3 className="text-xl  font-semibold mt-5">{resources.title}</h3>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
      </div>
    </div>
  );
};

export default Resources;
