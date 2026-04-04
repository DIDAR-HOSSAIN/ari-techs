import React from "react";
import {
  FaLightbulb,
  FaShieldAlt,
  FaCloud,
  FaDatabase,
  FaSyncAlt,
  FaBalanceScale,
} from "react-icons/fa";

const ITConsulting = () => {
  const services = [
    {
      title: "IT Strategy & Planning",
      icon: FaLightbulb,
      description:
        "Develop comprehensive IT roadmaps aligned with your business objectives.",
      points: [
        "Technology Assessment & Gap Analysis",
        "Digital Transformation Strategy",
        "IT Budget Planning & Optimization",
        "Technology Roadmap Development",
      ],
    },
    {
      title: "Cybersecurity Consulting",
      icon: FaShieldAlt,
      description:
        "Comprehensive security assessments and planning to protect your assets.",
      points: [
        "Security Risk Assessment",
        "Compliance Framework Implementation",
        "Incident Response Planning",
        "Security Awareness Training",
      ],
    },
    {
      title: "Cloud Migration Strategy",
      icon: FaCloud,
      description:
        "Expert guidance for seamless cloud adoption and optimization.",
      points: [
        "Cloud Readiness Assessment",
        "Migration Planning & Execution",
        "Multi-Cloud Strategy",
        "Cost Optimization Analysis",
      ],
    },
    {
      title: "Data Management & Analytics",
      icon: FaDatabase,
      description:
        "Transform your data into actionable insights with expert strategies.",
      points: [
        "Data Architecture Design",
        "Business Intelligence Strategy",
        "Data Governance Framework",
        "Analytics Implementation",
      ],
    },
    {
      title: "Digital Transformation",
      icon: FaSyncAlt,
      description:
        "Guide your organization through modern digital transformation initiatives.",
      points: [
        "Process Automation Strategy",
        "Legacy System Modernization",
        "Change Management",
        "Technology Integration",
      ],
    },
    {
      title: "IT Governance & Compliance",
      icon: FaBalanceScale,
      description:
        "Ensure strong governance and regulatory compliance for your IT systems.",
      points: [
        "ITIL Implementation",
        "Regulatory Compliance (GDPR, HIPAA)",
        "IT Policy Development",
        "Audit Preparation & Support",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          IT Consulting Services
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Strategic IT consulting to drive digital transformation, optimize operations, and accelerate business growth. Our expert consultants help you navigate complex technology decisions with confidence.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center mb-12">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition">
          Schedule a Consultation
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-16">

        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 group-hover:bg-indigo-600 mb-4 transition">
                <Icon className="text-xl text-indigo-600 group-hover:text-white transition" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Points */}
              <ul className="space-y-2 text-sm text-gray-700">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-indigo-500">✔</span>
                    {point}
                  </li>
                ))}
              </ul>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ITConsulting;
