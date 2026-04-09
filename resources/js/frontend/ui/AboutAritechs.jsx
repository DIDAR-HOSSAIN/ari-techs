import React from "react";
import {
  FaShieldAlt,
  FaStar,
  FaLightbulb,
  FaUsers,
  FaServer,
  FaHeadset,
  FaClock,
} from "react-icons/fa";

const AboutAritechs = () => {

/* Stats Data */
const stats = [
  {
    value: "500+",
    label: "Satisfied Clients",
    icon: FaUsers,
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    icon: FaServer,
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: FaHeadset,
  },
  {
    value: "10+",
    label: "Years Experience",
    icon: FaClock,
  },
];

  const values = [
    {
      title: "Security First",
      icon: FaShieldAlt,
      desc: "We prioritize the security and integrity of your data and systems above all else.",
    },
    {
      title: "Client-Centric",
      icon: FaUsers,
      desc: "Your success is our success. We tailor our services to meet your unique business needs.",
    },
    {
      title: "Excellence",
      icon: FaStar,
      desc: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      title: "Innovation",
      icon: FaLightbulb,
      desc: "We stay ahead of technology trends to provide cutting-edge solutions for our clients.",
    },
  ];

  return (
    <section className="py-6 bg-white">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Aritechs
        </h2>
        <p className="mt-4 text-gray-600 lg:text-lg md:text-base">
          We are a leading managed service provider with a global presence, delivering innovative IT solutions that empower businesses to thrive in the digital age. With offices in Bangladesh and New York, we bridge technology gaps and drive digital transformation worldwide.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10 lg:px-16 mb-16">
  {stats.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="text-center"
      >
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-full bg-indigo-100">
          <Icon className="text-indigo-600 text-4xl" />
        </div>

        {/* Value */}
        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600">
          {item.value}
        </h3>

        {/* Label */}
        <p className="text-sm text-gray-600 mt-1">
          {item.label}
        </p>
      </div>
    );
  })}
</div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-10 lg:px-16 mb-16">

        <div className="bg-indigo-700 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3 text-white">
            Our Mission
          </h3>
          <p className="lg:text-lg text-white leading-relaxed">
            To empower businesses with reliable, secure, and innovative IT solutions that drive growth, enhance productivity, and create competitive advantages in an increasingly digital world. We are committed to being the trusted technology partner that businesses can rely on for their most critical IT needs.
          </p>
        </div>

        <div className="bg-[#0d9488] p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3 text-white">
            Our Vision
          </h3>
          <p className="lg:text-lg text-white leading-relaxed">
            To be the premier global managed service provider, recognized for excellence in IT solutions, innovation in technology services, and unwavering commitment to client success. We envision a future where businesses can focus entirely on their core operations while we handle all their technology needs seamlessly.
          </p>
        </div>

      </div>

      {/* Core Values */}
      <div className="px-4 md:px-10 lg:px-16 mb-16">
        <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Our Core Values
        </h2>
        <p className="mt-4 text-gray-600 lg:text-lg md:text-base">
          The principles that guide everything we do and shape our relationships with clients and partners
        </p>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-6 rounded-2xl text-center"
              >
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-full bg-indigo-100">
                  <Icon className="text-4xl text-indigo-600" />
                </div>

                <h4 className="font-semibold lg:text-xl text-gray-800">
                  {item.title}
                </h4>

                <p className="lg:text-lg text-gray-600 mt-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutAritechs;
