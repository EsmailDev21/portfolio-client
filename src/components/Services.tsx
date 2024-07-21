import { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "./base/ServiceModal";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and high-quality web applications.",
    detailedDescription:
      "I will build for you highly performant, scalable and visually appealing fullstack web applications.",
    icon: "fas fa-laptop-code",
  },
  {
    title: "Mobile Development",
    description: "Creating cross-platform mobile apps with React Native.",
    detailedDescription:
      "I will build for you highly performant, scalable and visually appealing mobile applications.",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "Backend Development",
    description: "Developing robust backend systems using Node.js and Nest.js.",
    detailedDescription: "I will build customized web API's",
    icon: "fas fa-server",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly and visually appealing interfaces.",
    detailedDescription:
      "I will create stunning user interfaces and user experience for both mobile and web applications",
    icon: "fas fa-palette",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-turquoise">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-slate-900 p-4 rounded-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <i className={`${service.icon} text-4xl mb-4 text-turquoise`}></i>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-center mb-4">
              {service.description}
            </p>
            <button
              className="bg-turquoise hover:bg-teal-400 text-slate-950 font-bold py-2 px-4 rounded-full"
              onClick={() => handleOrderClick(service)}
            >
              Order
            </button>
          </motion.div>
        ))}
      </div>
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </section>
  );
};

export default Services;
