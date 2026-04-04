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

  const team = [
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    location: "New York",
    skills: "Cloud Architecture, Cybersecurity",
    image: "/images/team/sarah.jpg",
  },
  {
    name: "Ahmed Rahman",
    role: "Regional Director",
    location: "Bangladesh",
    skills: "Network Infrastructure, IT Strategy",
    image: "/images/team/ahmed.jpg",
  },
  {
    name: "Michael Chen",
    role: "Senior Consultant",
    location: "New York",
    skills: "Digital Transformation, Process Automation",
    image: "/images/team/michael.jpg",
  },
  {
    name: "Fatima Khan",
    role: "Security Specialist",
    location: "Bangladesh",
    skills: "Cybersecurity, Compliance",
    image: "/images/team/fatima.jpg",
  },
];

  return (
    <section className="py-16 bg-white">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Aritechs
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
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
        className="bg-gray-50 rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition"
      >
        {/* Icon */}
        <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-indigo-100">
          <Icon className="text-indigo-600 text-lg" />
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

        <div className="bg-indigo-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-3 text-indigo-700">
            Our Mission
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            To empower businesses with reliable, secure, and innovative IT solutions that drive growth, enhance productivity, and create competitive advantages in an increasingly digital world. We are committed to being the trusted technology partner that businesses can rely on for their most critical IT needs.
          </p>
        </div>

        <div className="bg-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-3 text-purple-700">
            Our Vision
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            To be the premier global managed service provider, recognized for excellence in IT solutions, innovation in technology services, and unwavering commitment to client success. We envision a future where businesses can focus entirely on their core operations while we handle all their technology needs seamlessly.
          </p>
        </div>

      </div>

      {/* Core Values */}
      <div className="px-4 md:px-10 lg:px-16 mb-16">
        <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Core Values
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          The principles that guide everything we do and shape our relationships with clients and partners
        </p>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-indigo-100">
                  <Icon className="text-indigo-600" />
                </div>

                <h4 className="font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600 mt-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team */}
      <div className="px-4 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our Leadership Team
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
         Experienced professionals dedicated to delivering exceptional IT solutions and services
        </p>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {team.map((member, index) => (
    <div
      key={index}
      className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition duration-300"
    >
      {/* 🔥 Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full object-cover border-4 border-indigo-100 shadow-md"
        />
      </div>

      {/* Name */}
      <h4 className="font-semibold text-gray-800 text-lg">
        {member.name}
      </h4>

      {/* Role */}
      <p className="text-sm text-indigo-600">
        {member.role}
      </p>

      {/* Location */}
      <p className="text-xs text-gray-500 mt-1">
        {member.location}
      </p>

      {/* Skills */}
      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
        {member.skills}
      </p>
    </div>
  ))}
</div>
      </div>

    </section>
  );
};

export default AboutAritechs;