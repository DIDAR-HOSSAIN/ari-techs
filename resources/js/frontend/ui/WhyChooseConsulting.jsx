import React from "react";
import {
  FaBullseye,
  FaDollarSign,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const WhyChooseConsulting = () => {
  const features = [
    {
      title: "Strategic Alignment",
      icon: FaBullseye,
      description: "Ensure IT initiatives align with business goals",
    },
    {
      title: "Cost Optimization",
      icon: FaDollarSign,
      description: "Reduce IT costs while improving efficiency",
    },
    {
      title: "Risk Mitigation",
      icon: FaShieldAlt,
      description: "Identify and address potential IT risks",
    },
    {
      title: "Scalable Solutions",
      icon: FaChartLine,
      description: "Build infrastructure that grows with your business",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Our Consulting Services?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Partner with experienced consultants who understand both technology and business
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 lg:px-16">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
                <Icon className="text-indigo-600 text-xl" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center px-4">
        <p className="text-gray-700 text-sm sm:text-base mb-6">
          Ready to transform your IT strategy? Let's discuss your consulting needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition">
            Get Free Assessment
          </button>

          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition">
            Download Consulting Guide
          </button>
        </div>
      </div>

    </section>
  );
};

export default WhyChooseConsulting;