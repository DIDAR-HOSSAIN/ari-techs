import React from "react";
import {
  FaMicrosoft,
  FaNetworkWired,
  FaShieldAlt,
  FaAws,
  FaCogs,
  FaServer,
} from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified Solutions Expert (MCSE)",
      icon: FaMicrosoft,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Cisco Certified Network Professional (CCNP)",
      icon: FaNetworkWired,
      bg: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: "CompTIA Security+",
      icon: FaShieldAlt,
      bg: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      title: "AWS Certified Solutions Architect",
      icon: FaAws,
      bg: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      title: "ITIL Foundation Certified",
      icon: FaCogs,
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "VMware Certified Professional (VCP)",
      icon: FaServer,
      bg: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Certifications & Expertise
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Our team holds industry-leading certifications ensuring the highest standards of service delivery
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-16">

        {certifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`${item.bg} rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition`}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow">
                <Icon className={`${item.iconColor} text-xl`} />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          );
        })}

      </div>

    </section>
  );
};

export default Certifications;
