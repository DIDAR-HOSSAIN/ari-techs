import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import logo from "@/assets/images/Logo/logo-png.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
    const redirectToExternalLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <section className="bg-gray-50">

              {/* 🔥 Top Section */}
              <div className="py-16 px-4 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-10">

                {/* LEFT SIDE */}
                <div>
                  <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900">
                    Get in Touch
                  </h2>
                  <p className="mt-3 text-gray-600 text-center">
                    Ready to transform your IT infrastructure? Contact us today for a free consultation
                  </p>

                  {/* Contact Info */}
                  <div className="mt-8 space-y-6 text-sm">

                    {/* Location */}
                    <div>
                      <h4 className="font-semibold mb-2">Our Locations</h4>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-indigo-600" />
                        Bangladesh Office: Dhaka, Bangladesh
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <FaMapMarkerAlt className="text-indigo-600" />
                        706 Autumn Ave, Brooklyn, NY 11208
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <h4 className="font-semibold mb-2">Phone Numbers</h4>
                      <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-indigo-600" />
                        Bangladesh: +88-01767774027
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <FaPhoneAlt className="text-indigo-600" />
                        Brooklyn: +1-856-2638066
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <h4 className="font-semibold mb-2">Email Addresses</h4>
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="text-indigo-600" />
                        info@aritechs.com
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <FaEnvelope className="text-indigo-600" />
                        ai@aritechs.com
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE - FORM */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    Send Us a Message
                  </h3>

                  <form className="space-y-4">

                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <textarea
                      rows="4"
                      placeholder="Message"
                      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>

                    <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                      Send Message
                    </button>

                  </form>
                </div>

              </div>

              {/* 🔥 Footer */}
              <footer className="bg-gray-900 text-gray-300 pb-6 px-4 md:px-10 lg:px-16">
                {/* Bottom */}
                <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
                  © Aritechs LLC, All rights reserved.
                </div>
              </footer>
            </section>
    );
};

export default Footer;
