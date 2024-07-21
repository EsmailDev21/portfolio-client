import { useState } from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full m-4 py-4 px-8 bg-slate-900 bg-opacity-60 backdrop-blur-md z-10 flex justify-between items-center">
      <div className="flex flex-row items-end">
        <div className="text-3xl text-turquoise font-thin">StackedBy</div>
        <div className="text-lg text-gray-300 font-semibold">Esmail</div>
      </div>

      <div className="hidden md:flex space-x-4">
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

      <button
        className="md:hidden text-turquoise bg-transparent focus:outline-none"
        onClick={toggleMenu}
      >
        <i className={`fas fa-${isOpen ? "times" : "bars"} text-xl`}></i>
      </button>

      <div
        className={`fixed top-0 right-0 w-3/4 h-[40vh] bg-slate-900 bg-opacity-80 flex flex-col items-center justify-center space-y-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="text-turquoise bg-transparent absolute top-4 right-4 text-2xl"
          onClick={toggleMenu}
        >
          <i className="fas fa-times"></i>
        </button>
        <a href="#home" className="text-white text-xl" onClick={toggleMenu}>
          Home
        </a>
        <a
          href="#portfolio"
          className="text-white text-xl"
          onClick={toggleMenu}
        >
          Portfolio
        </a>
        <a href="#services" className="text-white text-xl" onClick={toggleMenu}>
          Services
        </a>
        <motion.button
          className="bg-turquoise hover:bg-teal-400 text-slate-950 font-semibold py-2 px-4 rounded-full"
          variants={buttonVariants}
          whileHover="hover"
          onClick={toggleMenu}
        >
          Contact
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
