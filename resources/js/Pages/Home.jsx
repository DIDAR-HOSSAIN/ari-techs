import React from "react";
import FrontendLayout from "@/frontend/Layout/FrontendLayout";
import { Head } from "@inertiajs/react";
import Carousel from "@/frontend/ui/Carousel";
import OurNetworkService from "@/frontend/ui/OurNetworkService";
import CTASection from "@/frontend/ui/CTASection";
import ITConsulting from "@/frontend/ui/ITConsulting";
import WhyChooseConsulting from "@/frontend/ui/WhyChooseConsulting";
import AboutAritechs from "@/frontend/ui/AboutAritechs";
import Certifications from "@/frontend/ui/Certifications";
import GlobalPresence from "@/frontend/ui/GlobalPresence";
import WhyChoose from "@/frontend/ui/WhyChoose";
import ContactSection from "@/frontend/ui/ContactSection";

const Home = ({ auth, sliders }) => {
    console.log("sliders", sliders);
    return (
        <FrontendLayout
            user={auth.user}
            header={
                <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                    Home
                </h1>
            }
        >
            <Head title="Home" />
            <Carousel sliders={sliders} />
            <div id="services">
            <OurNetworkService />
            </div>
            <div id="consulting">
            <ITConsulting />
            </div>
            <div id="whyChoose">
            <WhyChoose />
            </div>
            <div id="ctaSection">
            <CTASection />
            </div>
            <div id="chooseConsulting">
            <WhyChooseConsulting />
            </div>
            <div id="aboutAritechs">
            <AboutAritechs />
            </div>
            <div id="certification">
            <Certifications />
            </div>
            <div id="globalPresence">
            <GlobalPresence />
            </div>
            <div id="contactSection">
            <ContactSection />
            </div>
        </FrontendLayout>
    );
};

export default Home;
