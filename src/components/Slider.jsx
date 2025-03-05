import React, { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "cuberto", img: "https://cuberto.com/assets/smfeed/dribbble/still-4d3e129d6f6533551995e6677b65c078.png" },
  { id: 2, title: "cuberto", img: "https://cuberto.com/assets/smfeed/dribbble/still-2222ffa965c7262265daa03dc7bf7dc1.png" },
  { id: 3, title: "cuberto", img: "https://cuberto.com/assets/smfeed/dribbble/original-8992ba4f8649be62a1a842166b8f0225.png" },
  { id: 4, title: "cuberto", img: "https://cuberto.com/assets/smfeed/dribbble/original-d6dc6cadea94be3deaece2d70312f0d2.png" },
  { id: 5, title: "cuberto", img: "https://cuberto.com/assets/smfeed/dribbble/still-5d021d032012f4c7ea5420e02900f273.png" },
  { id: 6, title: "cuberto", img: "https://cuberto.com/assets/smfeed/dribbble/original-8a16b91a6fd7c1a7423c5926f97b60cc.jpg" },
];

const Slider = () => {
  const sliderRef = useRef(null);

  return (
    <div className="w-full overflow-hidden  p-10 mt-30">
      <motion.div
        ref={sliderRef}
        className="cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }} // Adjust based on content
          className="flex gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="min-w-[400px] bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover rounded-md"
              />
             
              <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
