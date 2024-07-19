import React from "react";
import { CarouselComp } from "./base/Carousel";
import elearning1 from "../assets/elearningtt/elearning.png";
import elearning2 from "../assets/elearningtt/elearning2.png";
import elearning3 from "../assets/elearningtt/elearning3.png";
import bbshop1 from "../assets/barbershop/Services.png";
import bbshop2 from "../assets/barbershop/Login.png";
import bbshop3 from "../assets/barbershop/Service details.png";
import avocapp1 from "../assets/avocapp/avocapp.png";
function Portfolio() {
  const projects = [
    {
      title: "Item Trading Web App",
      description: "Built an item trading web app.",
      imageUrl: "/path/to/item-trading-app.png",
      images: [],
    },
    {
      title: "Barber Shop Web App",
      description:
        "Built a barber shop web app that includes various dashboards and services pages for customers to navigate and make bookings.",
      imageUrl: bbshop1,
      images: [bbshop1, bbshop2, bbshop3],
    },
    {
      title: "e-Learning Platform",
      description:
        "Made UML design of an e-Learning Platform, built and deployed the platform on Vercel, wrote a report and documentation.",
      imageUrl: elearning3,
      images: [elearning1, elearning2, elearning3],
    },
    {
      title: "eCommerce Mobile Application",
      description:
        "Designed and built the application with React Native on the client-side and NestJs on the server-side, wrote a report and documentation.",
      imageUrl: "/path/to/ecommerce-app.png",
    },
    {
      title: "Law Firm Management System",
      description: "Designed and built a law firm management system.",
      imageUrl: avocapp1,
      images: [avocapp1],
    },
    {
      title: "Car Tracking System",
      description:
        "Contributed to a car tracking system by creating algorithms for speed tracking and parking tracking.",
      imageUrl: "/path/to/car-tracking-system.png",
    },
    {
      title: "Car Assistance and SOS Maintenance Mobile App",
      description: "Built a car assistance and SOS maintenance mobile app.",
      imageUrl: "/path/to/car-assistance-app.png",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        My Recent Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <CarouselComp
              images={project.images ?? []}
              preview={project.imageUrl}
            />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
