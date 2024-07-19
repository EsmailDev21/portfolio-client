import { motion } from "framer-motion";
import React from "react";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};
function Navbar() {
  return (
    <nav
      style={{ width: "98%" }}
      className="fixed top-0 left-0 m-4 rounded-full py-4 px-8 bg-slate-900 bg-opacity-60 backdrop-blur-md z-10 flex justify-between items-center"
    >
      <div className="flex flex-row items-end">
        <div className="text-3xl text-turquoise  font-thin">Esmail</div>
        <div className="text-lg text-gray-300  font-semibold">Dev</div>
      </div>

      <div className="space-x-4">
        <a href="#home" className="hover:text-turquoise transition-colors">
          Home
        </a>
        <a href="#portfolio" className="hover:text-turquoise transition-colors">
          Portfolio
        </a>
        <a href="#services" className="hover:text-turquoise transition-colors">
          Services
        </a>
        <motion.button
          className="bg-turquoise hover:bg-teal-400 text-slate-950 font-semibold py-1 px-4 rounded-full"
          variants={buttonVariants}
          whileHover="hover"
        >
          Contact
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
