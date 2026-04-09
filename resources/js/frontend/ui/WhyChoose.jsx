import React from "react";
import {
  FaHeadset,
  FaUsers,
  FaChartLine,
  FaUserCog
} from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      title: "24/7 Support",
      description:
        "Round-the-clock technical support ensuring your systems are always operational.",
      icon: FaHeadset
    },
    {
      title: "Expert Team",
      description:
        "Certified professionals with years of experience in enterprise IT solutions.",
      icon: FaUsers
    },
    {
      title: "Proven Track Record",
      description:
        "Successfully serving businesses across Bangladesh and New York with 99.9% uptime.",
      icon: FaChartLine
    },
    {
      title: "Personalized Service",
      description:
        "Tailored IT solutions designed specifically for your business requirements.",
      icon: FaUserCog
    }
  ];

  return (
    <section className="bg-white py-6">

      {/* Header */}
      <div className="text-center px-4 max-w-3xl mx-auto mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Why Choose Aritechs?
        </h1>
        <p className="mt-3 text-sm sm:text-base lg:text-xl text-gray-600">
          We deliver reliable, scalable, and secure IT solutions that drive business growth
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10 lg:px-16">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group bg-gray-50 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition">
                <Icon className="text-4xl text-indigo-600 group-hover:text-white transition" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChoose;