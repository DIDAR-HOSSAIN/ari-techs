import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const GlobalPresence = () => {
  const locations = [
    {
      city: "Dhaka, Bangladesh",
      address: "House 123, Road 45, Gulshan-2, Dhaka 1212",
      phone: "+88-01767774027",
      email: "info@aritechs.com",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      city: "Brooklyn, USA",
      address: "706 Autumn Ave, Brooklyn, NY 11208",
      phone: "+1-856-2638066",
      email: "ai@aritechs.com",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="py-16 bg-white">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Our Global Presence
        </h2>
        <p className="mt-3 lg:text-xl sm:text-base text-gray-600">
          Strategically located to serve clients across different time zones and regions
        </p>
      </div>

      {/* Locations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 lg:px-20">

        {locations.map((loc, index) => (
          <div
            key={index}
            className={`${loc.color} rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300`}
          >

            {/* City */}
            <div className="flex items-center gap-3 mb-4">
              <FaGlobe className={`${loc.iconColor} text-xl`} />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {loc.city}
              </h3>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 mb-3">
              <FaMapMarkerAlt className={`${loc.iconColor} mt-1`} />
              <p className="text-sm text-gray-700">
                {loc.address}
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-3">
              <FaPhoneAlt className={`${loc.iconColor}`} />
              <p className="text-sm text-gray-700">
                {loc.phone}
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope className={`${loc.iconColor}`} />
              <p className="text-sm text-gray-700">
                {loc.email}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default GlobalPresence;
