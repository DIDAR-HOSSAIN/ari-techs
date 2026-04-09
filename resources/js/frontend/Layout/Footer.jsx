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
