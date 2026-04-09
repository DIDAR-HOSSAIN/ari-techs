import React from 'react';
import {
  FaNetworkWired ,
  FaTools,
  FaShieldAlt,
  FaWifi ,
  FaLifeRing,
  FaMicrochip,
  FaServer
} from 'react-icons/fa';
import { BiSupport } from "react-icons/bi";

const OurNetworkService = () => {

  const services = [
    {
      title: "Network Design & Installation",
      description: "Custom network architecture for performance and scalability.",
      icon: FaNetworkWired
    },
    {
      title: "Network Troubleshooting",
      description: "Fast diagnosis and resolution to minimize downtime.",
      icon: FaTools
    },
    {
      title: "Firewall Installation",
      description: "Advanced protection against cyber threats.",
      icon: FaShieldAlt
    },
    {
      title: "WiFi Solutions",
      description: "High-speed wireless connectivity for businesses.",
      icon: FaWifi
    },
    {
      title: "On-site Support",
      description: "Immediate assistance for critical network issues.",
      icon: FaLifeRing
    },
    {
      title: "Hardware Upgrade",
      description: "Optimize performance with modern hardware solutions.",
      icon: FaMicrochip
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring with instant response.",
      icon: BiSupport
    },
    {
      title: "Server Installation",
      description: "Professional server setup and configuration.",
      icon: FaServer
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-gray-50">

      {/* Header */}
      <div className="text-center px-4 max-w-3xl mx-auto mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Network & Security Services
        </h1>
        <p className="mt-3 lg:text-xl sm:text-lg text-gray-600">
          Comprehensive network solutions designed to keep your business connected and secure
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 md:px-10 lg:grid-cols-4 lg:px-16">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="group relative rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Gradient Border */}
              <div className="absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

              {/* Icon */}
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 transition group-hover:bg-indigo-600">
                <Icon className="text-4xl text-indigo-600 transition group-hover:text-white" />
              </div>

              {/* Title */}
              <h2 className="mb-2 text-center text-xl font-semibold">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-center text-lg leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          );
        })}


      </div>
        <div className="text-center mt-12 px-4">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition">
          Get a Network Assesment
        </button>
      </div>
    </section>
  );
};

export default OurNetworkService;
