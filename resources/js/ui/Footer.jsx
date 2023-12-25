import React from "react";
import logo from "@/assets/images/Logo/logo-transparent.png";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="footer mt-4 p-10 bg-base-200 text-base-content place-items-center">
            <div>
                <Link to={"/"}>
                    <img src={logo} alt="" width={150} height={150} />
                </Link>
                <p>
                    ARI Techs.
                    <br />
                    Providing Reliable tech since 2022
                </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to="" className="link link-hover">
                    Branding
                </Link>
                <Link to="" className="link link-hover">
                    Design
                </Link>
                <Link to="" className="link link-hover">
                    Marketing
                </Link>
                <Link to="" className="link link-hover">
                    Advertisement
                </Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="/about" className="link link-hover">
                    About us
                </Link>
                <Link to="/contact" className="link link-hover">
                    Contact
                </Link>
                <Link to="" className="link link-hover">
                    Jobs
                </Link>
                <Link to="" className="link link-hover">
                    Press kit
                </Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="" className="link link-hover">
                    Terms of use
                </Link>
                <Link to="" className="link link-hover">
                    Privacy policy
                </Link>
                <Link to="" className="link link-hover">
                    Cookie policy
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
