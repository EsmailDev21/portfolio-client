import elearning1 from "../assets/elearningtt/elearning.png";
import elearning2 from "../assets/elearningtt/elearning2.png";
import elearning3 from "../assets/elearningtt/elearning3.png";
import bbshop1 from "../assets/barbershop/Services.png";
import bbshop2 from "../assets/barbershop/Login.png";
import bbshop3 from "../assets/barbershop/Service details.png";
import avocapp1 from "../assets/avocapp/avocapp.png";
import cityshop1 from "../assets/cityshop/main.png";
import similar from "../assets/tradingsystem/similar.png";
import home from "../assets/tradingsystem/home.png";
import signup from "../assets/tradingsystem/signup.png";
import { useState } from "react";
import Modal from "./base/Modal";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Item Trading Web App",
      description: "Built an item trading web app.",
      imageUrl: similar,
      images: [similar, home, signup],
    },
    {
      id: 2,
      title: "Barber Shop Web App",
      description:
        "Built a barber shop web app that includes various dashboards and services pages for customers to navigate and make bookings.",
      imageUrl: bbshop1,
      images: [bbshop1, bbshop2, bbshop3],
    },
    {
      id: 3,
      title: "e-Learning Platform",
      description:
        "Made UML design of an e-Learning Platform, built and deployed the platform on Vercel, wrote a report and documentation.",
      imageUrl: elearning3,
      images: [elearning1, elearning2, elearning3],
    },
    {
      id: 4,
      title: "eCommerce Mobile Application",
      description:
        "Designed and built the application with React Native on the client-side and NestJs on the server-side, wrote a report and documentation.",
      imageUrl: cityshop1,
      images: [cityshop1],
    },
    {
      id: 5,
      title: "Law Firm Management System",
      description: "Designed and built a law firm management system.",
      imageUrl: avocapp1,
      images: [avocapp1],
    },
    {
      id: 6,
      title: "Car Tracking System",
      description:
        "Contributed to a car tracking system by creating algorithms for speed tracking and parking tracking.",
      imageUrl: "",
      images: [],
    },
    {
      id: 7,
      title: "Car Assistance and SOS Maintenance Mobile App",
      description: "Built a car assistance and SOS maintenance mobile app.",
      imageUrl: "",
      images: [],
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    if (project.images.length > 0) {
      setModalOpen(true);
    } else {
      return;
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl  md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-indigo-600">
        My Recent Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleProjectClick(project)}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            {project.imageUrl.length > 0 && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal project={selectedProject} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}

export default Portfolio;
