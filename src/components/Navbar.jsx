import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 w-full">
      <div>
        <img src={logo} alt="logo" className="w-20 h-5" />
      </div>
      <div className="flex justify-center items-center gap-2">
        <h6 className="font-bold">Menu</h6>
        <button
          className="p-2 rounded-full bg-black text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed top-0 right-0 w-full h-full bg-white p-10 flex flex-col md:flex-row md:justify-between shadow-lg px-120 z-50"
            >
              <button
                className="self-end p-2 text-black absolute top-5 right-5"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>
              <div className="flex flex-col space-y-6 text-lg text-gray-600">
                <span className="text-sm uppercase text-gray-400">
                  Social media
                </span>
                <a href="#">LinkedIn</a>
                <a href="#">Behance</a>
                <a href="#">Dribbble</a>
                <a href="#">Instagram</a>
                <a href="#">YouTube</a>
                <a href="#">Twitter</a>
                <a href="#">GitHub</a>
              </div>
              <div className="flex flex-col space-y-6 text-2xl font-medium text-black">
                <span className="text-sm uppercase text-gray-400">Menu</span>
                <a href="#">What we do</a>
                <a href="#">Projects</a>
                <a href="#">Company</a>
                <a href="#">Tutorials</a>
                <a href="#">Contacts</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
