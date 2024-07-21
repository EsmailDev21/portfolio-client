import { motion, AnimatePresence } from "framer-motion";
import Carousel from "./Carousel";

const Modal = ({ project, onClose }: any) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-white rounded-lg overflow-hidden w-full  max-w-2xl relative">
          <button
            className="absolute w-12 top-2 right-2 text-gray-500 text-lg p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <Carousel images={project.images} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
