import React from "react";
import {
  FaHeadset,
  FaServer,
  FaShieldAlt,
  FaWifi,
  FaTools,
  FaCloud,
} from "react-icons/fa";

const CustomITSolutions = () => {
  const services = [
    {
      title: "IT Support",
      icon: FaHeadset,
      bg: "bg-blue-50",
      iconBg: "bg-blue-600",
      description:
        "Comprehensive technical support for all your IT infrastructure needs. From hardware maintenance to software troubleshooting, our expert team ensures your systems run smoothly.",
      points: [
        "Desktop & Server Support",
        "Software Installation & Updates",
        "Hardware Diagnostics",
        "Remote Assistance",
      ],
    },
    {
      title: "Managed IT",
      icon: FaServer,
      bg: "bg-green-50",
      iconBg: "bg-green-600",
      description:
        "Complete IT management services that let you focus on your core business while we handle all your technology needs with proactive monitoring and maintenance.",
      points: [
        "Proactive Monitoring",
        "Regular Maintenance",
        "Strategic IT Planning",
        "Cost Optimization",
      ],
    },
    {
      title: "Cybersecurity",
      icon: FaShieldAlt,
      bg: "bg-purple-50",
      iconBg: "bg-purple-600",
      description:
        "Advanced security solutions to protect your business from cyber threats. We implement multi-layered security strategies to safeguard your data and systems.",
      points: [
        "Threat Detection & Response",
        "Security Audits",
        "Data Protection",
        "Compliance Management",
      ],
    },
    {
      title: "WiFi Solutions",
      icon: FaWifi,
      bg: "bg-yellow-50",
      iconBg: "bg-yellow-500",
      description:
        "High-speed wireless connectivity for seamless business operations.",
      points: [
        "Network Optimization",
        "Coverage Planning",
        "Secure WiFi Setup",
        "Performance Tuning",
      ],
    },
    {
      title: "IT Maintenance",
      icon: FaTools,
      bg: "bg-red-50",
      iconBg: "bg-red-600",
      description:
        "Regular maintenance to keep your systems running smoothly.",
      points: [
        "System Updates",
        "Hardware Checkup",
        "Bug Fixing",
        "Performance Boost",
      ],
    },
    {
      title: "Cloud Services",
      icon: FaCloud,
      bg: "bg-indigo-50",
      iconBg: "bg-indigo-600",
      description:
        "Secure and scalable cloud infrastructure solutions.",
      points: [
        "Cloud Migration",
        "Data Backup",
        "Scalable Storage",
        "Disaster Recovery",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Custom IT Solutions
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base lg:text-xl">
          Tailored IT services designed to meet your unique business requirements and drive growth
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-16">

        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index}
              className={`${item.bg} rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between`}
            >
              {/* Top Content */}
              <div>
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${item.iconBg} p-3 rounded-xl h-16 w-16 flex items-center justify-center`}>
                    <Icon className="text-white text-3xl" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Points */}
                <ul className="space-y-2 text-sm md:text-base text-gray-700 mb-6">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-gray-500">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 🔥 Bottom Button (Always Bottom) */}
              <div className="mt-auto">
                <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm md:text-base font-semibold text-white shadow hover:bg-indigo-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center my-8">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">
         Need a custom solution? Let's discuss your specific requirements.
        </h2>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Primary Button */}
          <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-red-500 transition">
            Request Custom Quote
          </button>

        </div>

      </div>

    </section>
  );
};

export default CustomITSolutions;
