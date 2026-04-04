import React from "react";
import FrontendLayout from "@/frontend/Layout/FrontendLayout";
import { Head } from "@inertiajs/react";
import Carousel from "@/frontend/ui/Carousel";
import OurNetworkService from "@/frontend/ui/OurNetworkService";
import Fold from "@/frontend/ui/Fold";
import WhyChooseUs from "@/frontend/ui/WhyChooseUs";
import FreeEvaluation from "@/frontend/ui/FreeEvaluation";
import YourNetwork from "@/frontend/ui/YourNetwork";
import Contact from "@/frontend/ui/Contact";
import CTASection from "@/frontend/ui/CTASection";
import CustomITSolutions from "@/frontend/ui/CustomITSolutions";
import ITConsulting from "@/frontend/ui/ITConsulting";

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
            <OurNetworkService />
            {/* <Fold /> */}
            <WhyChooseUs />
            <CTASection />
            <CustomITSolutions />
            <ITConsulting />
            {/* <FreeEvaluation /> */}
            {/* <YourNetwork /> */}
            <Contact />
        </FrontendLayout>
    );
};

export default Home;
