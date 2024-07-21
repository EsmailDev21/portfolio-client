import React from "react";
import { motion } from "framer-motion";

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="bg-slate-800 rounded-lg p-6 shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        <p className="text-gray-300 mb-4">{service.detailedDescription}</p>
        <button
          className="bg-turquoise hover:bg-teal-400 text-slate-950 font-bold py-2 px-4 rounded-full"
          onClick={onClose}
        >
          Order now!
        </button>
      </motion.div>
    </div>
  );
};

export default ServiceModal;
