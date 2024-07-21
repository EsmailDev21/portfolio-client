import { motion } from "framer-motion";
import developerImage from "../assets/developer-3d.jpeg"; // Ensure this path is correct

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

function Hero() {
  return (
    <motion.section
      id="home"
      className="flex flex-col mt-10 md:flex-row w-full items-center justify-around relative py-12 px-4 md:px-8"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center text-center md:items-start md:text-left"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Esmail,
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-turquoise mb-4">
          Full Stack Developer
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 font-semibold text-gray-300">
          React.js | React Native | Nest.js | Next.js
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 w-full max-w-lg mb-8">
          Well-qualified Full Stack Developer familiar with a wide range of
          programming utilities and languages. Knowledgeable of backend and
          frontend development requirements. Handles any part of the process
          with ease. Collaborative team player with excellent technical
          abilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <motion.button
            className="bg-turquoise hover:bg-teal-400 hover:border-turquoise text-slate-800 font-bold py-2 px-4 rounded-full shadow-xl shadow-teal-950 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            variants={buttonVariants}
            whileHover="hover"
            onClick={() =>
              alert(
                "Soon , use the email or linkedIn accounts in the contact section instead!"
              )
            }
          >
            Order a Service
          </motion.button>
          <motion.button
            className="bg-indigo-800 hover:bg-indigo-700 text-turquoise font-bold py-2 px-4 rounded-full shadow-lg shadow-indigo-950 hover:shadow-indigo-900 transition-shadow duration-300 ease-in-out"
            variants={buttonVariants}
            whileHover="hover"
          >
            Hire Me
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 flex items-center justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Shadow layer */}
        <motion.img
          src={developerImage}
          alt="Software Developer"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
