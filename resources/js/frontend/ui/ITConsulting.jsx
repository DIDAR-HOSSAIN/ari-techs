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
      bg: "bg-blue-600",
      iconBg: "bg-blue-600",
      text: "text-white",
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
      bg: "bg-red-600",
      iconBg: "bg-purple-600",
      text: "text-white",
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
      bg: "bg-indigo-600",
      iconBg: "bg-indigo-600",
      text: "text-white",
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
      bg: "bg-green-600",
      iconBg: "bg-green-600",
      text: "text-white",
      description:
        "Transform your data into actionable insights.",
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
      bg: "bg-yellow-700",
      iconBg: "bg-yellow-500",
      text: "text-white",
      description:
        "Modernize and automate your business processes.",
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
      bg: "bg-purple-600",
      iconBg: "bg-red-600",
      text: "text-white",
      description:
        "Ensure compliance and strong IT governance.",
      points: [
        "ITIL Implementation",
        "Regulatory Compliance (GDPR, HIPAA)",
        "IT Policy Development",
        "Audit Preparation & Support",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          IT Consulting Services
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Strategic IT consulting to drive digital transformation and business growth.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-16">

        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >

              {/* 🔥 TOP COLORED SECTION */}
              <div className={`${item.bg} p-5`}>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${item.iconBg} p-2 rounded-lg`}>
                    <Icon className="text-white text-lg" />
                  </div>

                  <h3 className={`text-lg font-bold ${item.text}`}>
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className={`text-sm ${item.text} opacity-90`}>
                  {item.description}
                </p>
              </div>

              {/* ⚪ BOTTOM WHITE SECTION */}
              <div className="p-5">
                <ul className="space-y-2 text-sm text-gray-700">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-indigo-500">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          );
        })}
      </div>
      {/* 🔥 Consulting Process Section */}
<div className="mt-20">

  {/* Header */}
  <div className="text-center max-w-3xl mx-auto px-4 mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
      Our Consulting Process
    </h2>
    <p className="mt-3 text-sm sm:text-base text-gray-600">
      A proven methodology that ensures successful outcomes for every consulting engagement
    </p>
  </div>

  {/* Steps */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 md:px-10 lg:px-16">

    {[
      {
        step: "01",
        title: "Discovery & Assessment",
        desc: "Comprehensive analysis of your current IT infrastructure and business goals.",
      },
      {
        step: "02",
        title: "Strategy Development",
        desc: "Create tailored strategies and roadmaps based on best practices.",
      },
      {
        step: "03",
        title: "Implementation Planning",
        desc: "Detailed execution plans with timelines and risk mitigation.",
      },
      {
        step: "04",
        title: "Execution Support",
        desc: "Ongoing guidance and support during implementation.",
      },
      {
        step: "05",
        title: "Optimization & Review",
        desc: "Continuous monitoring and improvement for long-term success.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="relative bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
      >

        {/* Step Number */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
          {item.step}
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>

      </div>
    ))}
  </div>

</div>
    </section>
  );
};

export default ITConsulting;