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
    <section className="bg-white py-12 md:py-16">

      {/* Header */}
      <div className="text-center px-4 max-w-3xl mx-auto mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Why Choose Aritechs?
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
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
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition">
                <Icon className="text-2xl text-indigo-600 group-hover:text-white transition" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-12 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your IT Infrastructure?
        </h2>

        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>

    </section>
  );
};

export default WhyChoose;


// import React from "react";
// import servicesBg from "@/assets/images/our_technologies_bg.png";
// import service1 from "@/assets/images/reasons/certified.png";
// import service2 from "@/assets/images/reasons/good_value.png";
// import service3 from "@/assets/images/reasons/yrs_of_xp.png";
// import service4 from "@/assets/images/reasons/response_time.png";
// import service5 from "@/assets/images/reasons/satisfaction.png";

// const WhyChooseUs = () => {
//     const reasons = [
//         {
//             image: service1,
//             title: "Industry leading vendor, certified engineers",
//             description: "Cisco, Microsoft, Meraki, Fortinet, Paloalto, AWS.",
//         },
//         {
//             image: service2,
//             title: "Good Value",
//             description:
//                 "Great rates and someone you can trust to make sure you are taken care of without overspending.",
//         },
//         {
//             image: service3,
//             title: "Years of Experience",
//             description: "Serving multiple industries since 2011.",
//         },
//         {
//             image: service4,
//             title: "Fast Response Times",
//             description:
//                 "You can count on a quick response, and 24-hour remote support and onsite support when needed.",
//         },
//         {
//             image: service5,
//             title: "100 % Satisfaction Guarantee",
//             description:
//                 "You can rely on us for safe, reliable, and cost-effective IT support and solutions. Your satisfaction is our top priority, that's why we work to exceed your expectations.",
//         },
//     ];

//     return (
//         <>
//         <div className="grid gap-4 mx-auto justify-center md:full"
//             style={{
//                 backgroundImage: `url(${servicesBg})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 padding: "20px",
//                 textAlign: "center",
//             }}
//         >
//             <h1 className="text-lg font-bold text-blue-300">WHY CHOOSE US</h1>
//             <h1 className="lg:text-4xl font-bold text-blue-600">5 Reasons to partner with</h1>
//             <h1 className="lg:text-4xl font-bold text-blue-600 mb-8">Aritechs</h1>

//             {/* Grid items */}
//             <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
//                 {reasons.map((service, index) => (
//                     <div
//                         key={index}
//                         className="flex rounded-xl p-4 justify-center items-center"
//                     >
//                         {/* Left column (Image) */}
//                         <div className="flex-none mr-4" style={{ width: "80px", height: "80px" }}>
//                             <img
//                                 className="w-full h-full object-contain"
//                                 src={service.image}
//                                 alt={`Service ${index + 1}`}
//                             />
//                         </div>
//                         {/* Right column (Text) */}
//                         <div className="flex-grow flex flex-col justify-center">
//                             <h2 className="text-2xl font-bold mb-2">
//                                 {service.title}
//                             </h2>
//                             <p className="text-base text-lg justify-center">{service.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         {/* Rest of the JSX remains unchanged */}
//     </>
//     );
// };

// export default WhyChooseUs;
