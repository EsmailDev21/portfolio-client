import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "./base/ServiceModal";

const services = [
  {
    title: "Website & Web App Development",
    description: "Building responsive and high-quality web applications.",
    detailedDescription:
      "I will build highly performant, scalable, and visually appealing full-stack web applications tailored to your business needs. Whether you need a dynamic website, a single-page application, or a complex web platform, I use modern technologies like React, Node.js, and Nest.js to deliver a seamless user experience and robust functionality.",
    icon: "fas fa-laptop-code",
    faq: [
      {
        question: "What technologies do you use?",
        answer: "I use React, Node.js, Nest.js, HTML, CSS, and JavaScript.",
      },
      {
        question: "How long does it take to build a web application?",
        answer:
          "The timeframe varies depending on the project's complexity, but typically it takes 4-12 weeks.",
      },
    ],
    reviews: [],
    pricing: [
      {
        package: "Basic",
        price: "$500",
        description: "Includes a simple website with up to 5 pages.",
      },
      {
        package: "Standard",
        price: "$1000",
        description:
          "Includes a dynamic web application with user authentication.",
      },
      {
        package: "Premium",
        price: "$1500",
        description:
          "Includes a full-stack web application with advanced features.",
      },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Creating cross-platform mobile apps with React Native.",
    detailedDescription:
      "I will build highly performant, scalable, and visually appealing mobile applications for both iOS and Android platforms. Using React Native, I ensure your app has a native look and feel, while also providing smooth performance and a consistent user experience across different devices.",
    icon: "fas fa-mobile-alt",
    faq: [
      {
        question: "What platforms do you support?",
        answer: "I develop apps for both iOS and Android using React Native.",
      },
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "The timeframe varies depending on the project's complexity, but typically it takes 6-14 weeks.",
      },
    ],
    reviews: [],
    pricing: [
      {
        package: "Basic",
        price: "$800",
        description:
          "Includes a simple cross-platform app with basic features.",
      },
      {
        package: "Standard",
        price: "$1500",
        description:
          "Includes a full-featured mobile app with user authentication.",
      },
      {
        package: "Premium",
        price: "$2000",
        description:
          "Includes a complex mobile app with advanced features and integrations.",
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing robust backend systems using Node.js and Nest.js.",
    detailedDescription:
      "I will develop customized web APIs and backend systems to power your applications. Using Node.js and Nest.js, I create scalable and efficient server-side solutions that handle your data and business logic securely and effectively. From RESTful APIs to real-time data processing, I ensure your backend is reliable and maintainable.",
    icon: "fas fa-server",
    faq: [
      {
        question: "What technologies do you use?",
        answer:
          "I use Node.js, Nest.js, and various databases like MongoDB and PostgreSQL.",
      },
      {
        question: "How do you ensure the security of the backend?",
        answer:
          "I follow best practices for security, including data encryption, secure authentication, and regular security audits.",
      },
    ],
    reviews: [],
    pricing: [
      {
        package: "Basic",
        price: "$400",
        description:
          "Includes a simple RESTful API with basic CRUD operations.",
      },
      {
        package: "Standard",
        price: "$800",
        description:
          "Includes a full-featured API with user authentication and real-time capabilities.",
      },
      {
        package: "Premium",
        price: "$1200",
        description:
          "Includes a complex backend system with advanced features and integrations.",
      },
    ],
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly and visually appealing interfaces.",
    detailedDescription:
      "I will create stunning user interfaces and user experiences for both mobile and web applications. My design process focuses on usability and aesthetics, ensuring that your product is not only visually appealing but also intuitive and easy to use. From wireframes to high-fidelity designs, I bring your vision to life.",
    icon: "fas fa-palette",
    faq: [
      {
        question: "What tools do you use for design?",
        answer:
          "I use tools like Figma, Sketch, and Adobe XD for UI/UX design.",
      },
      {
        question: "How do you ensure the usability of the designs?",
        answer:
          "I conduct user testing and iterate on feedback to ensure the designs are user-friendly.",
      },
    ],
    reviews: [],
    pricing: [
      {
        package: "Basic",
        price: "$300",
        description: "Includes basic UI/UX design for up to 3 screens.",
      },
      {
        package: "Standard",
        price: "$600",
        description: "Includes full UI/UX design for a small application.",
      },
      {
        package: "Premium",
        price: "$900",
        description:
          "Includes comprehensive UI/UX design for a large application.",
      },
    ],
  },
  {
    title: "Utility Scripts",
    description: "Developing custom utility scripts to automate tasks.",
    detailedDescription:
      "I will develop custom utility scripts to automate repetitive tasks and streamline your workflows. Whether you need data processing scripts, automation tools, or integration scripts, I use various scripting languages and frameworks to create efficient and reliable solutions tailored to your specific requirements.",
    icon: "fas fa-wrench",
    faq: [
      {
        question: "What types of scripts can you develop?",
        answer:
          "I can develop scripts for data processing, automation, integrations, and more.",
      },
      {
        question: "How do you ensure the reliability of the scripts?",
        answer:
          "I thoroughly test all scripts to ensure they perform reliably and handle errors gracefully.",
      },
    ],
    reviews: [],
    pricing: [
      {
        package: "Basic",
        price: "$200",
        description:
          "Includes a simple utility script for basic automation tasks.",
      },
      {
        package: "Standard",
        price: "$400",
        description:
          "Includes a more complex script with additional features and error handling.",
      },
      {
        package: "Premium",
        price: "$600",
        description:
          "Includes a comprehensive utility script with advanced features and integrations.",
      },
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-indigo-600">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <i
              className={`${service.icon} text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-teal-400`}
            ></i>
            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-teal-400">
              {service.title}
            </h3>
            <p className="text-gray-400 text-center mb-4">
              {service.description}
            </p>
            <button
              className="hover:shadow-lg hover:shadow-turquoiseDark bg-gradient-to-r from-turquoise to-teal-400  text-slate-950 font-bold py-2 px-4 rounded-full"
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
