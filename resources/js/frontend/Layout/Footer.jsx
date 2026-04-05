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
                        New York Office: New York, NY, USA
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <h4 className="font-semibold mb-2">Phone Numbers</h4>
                      <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-indigo-600" />
                        Bangladesh: +880-XXX-XXXX
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <FaPhoneAlt className="text-indigo-600" />
                        New York: +1-XXX-XXX-XXXX
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
                        support@aritechs.com
                      </div>
                    </div>

                    {/* Hours */}
                    <div>
                      <h4 className="font-semibold mb-2">Business Hours</h4>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-indigo-600" />
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </div>
                      <p className="mt-1 text-gray-600">
                        24/7 Emergency Support Available
                      </p>
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
              <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4 md:px-10 lg:px-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                  {/* About */}
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-3">
                      Aritechs
                    </h3>
                    <p className="text-sm">
                      Leading managed service provider offering comprehensive IT solutions across Bangladesh and New York. We help businesses grow with reliable, secure, and scalable technology infrastructure.
                    </p>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Services</h4>
                    <ul className="space-y-2 text-sm">
                      <li>Network Design</li>
                      <li>IT Support</li>
                      <li>Cybersecurity</li>
                      <li>Managed IT</li>
                      <li>24/7 Monitoring</li>
                    </ul>
                  </div>

                  {/* Company */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Company</h4>
                    <ul className="space-y-2 text-sm">
                      <li>About Us</li>
                      <li>Careers</li>
                      <li>Case Studies</li>
                      <li>Blog</li>
                      <li>Contact</li>
                    </ul>
                  </div>

                  {/* Legal */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm">
                      <li>Privacy Policy</li>
                      <li>Terms of Service</li>
                      <li>Cookie Policy</li>
                    </ul>
                  </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
                  © 2025 Aritechs. All rights reserved.
                </div>

              </footer>

            </section>


        // <footer className="bg-cyan-800 text-white text-center">
        //     <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        //         {/* Logo */}
        //         <div className="justify-center">
        //             <img className="h-44" src={logo} alt="" />
        //         </div>

        //         {/* First Row */}
        //         <div className="flex justify-center mb-8">
        //             <ul className="text-lg flex flex-wrap gap-6 justify-center">
        //                 <li>About Us</li>
        //                 <li>Blog</li>
        //                 <li>Jobs</li>
        //                 <li>Press</li>
        //                 <li>Accessibility</li>
        //                 <li>Partners</li>
        //             </ul>
        //         </div>
        //         {/* Add more columns for other sections in the first row */}

        //         {/* Second Row */}
        //         <div className="flex justify-center mb-8">
        //             <div className="flex items-center space-x-4">
        //                 <Link
        //                     onClick={() =>
        //                         redirectToExternalLink(
        //                             "https://www.facebook.com"
        //                         )
        //                     }
        //                 >
        //                     <FaFacebook className="text-3xl cursor-pointer" />
        //                 </Link>
        //                 <Link
        //                     onClick={() =>
        //                         redirectToExternalLink(
        //                             "https://www.twitter.com"
        //                         )
        //                     }
        //                 >
        //                     <FaTwitter className="text-3xl cursor-pointer" />
        //                 </Link>
        //                 <Link
        //                     onClick={() =>
        //                         redirectToExternalLink(
        //                             "https://www.instagram.com"
        //                         )
        //                     }
        //                 >
        //                     <FaInstagram className="text-3xl cursor-pointer" />
        //                 </Link>
        //                 <Link
        //                     onClick={() =>
        //                         redirectToExternalLink(
        //                             "https://www.linkedin.com"
        //                         )
        //                     }
        //                 >
        //                     <FaLinkedin className="text-3xl cursor-pointer" />
        //                 </Link>
        //             </div>
        //         </div>
        //         {/* Add more columns for other sections in the second row */}

        //         {/* Third Row */}
        //         <div className="text-sm">
        //             <p>
        //                 Developed by : Ari-Techs | ©2024 Created by JT All
        //                 rights reserved.
        //             </p>
        //         </div>
        //     </div>
        // </footer>
    );
};

export default Footer;
