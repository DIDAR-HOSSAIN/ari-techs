import React from "react";
import FrontendLayout from "@/frontend/Layout/FrontendLayout";
import { Head } from "@inertiajs/react";
import Carousel from "@/frontend/ui/Carousel";
import OurNetworkService from "@/frontend/ui/OurNetworkService";
import Fold from "@/frontend/ui/Fold";
import WhyChooseUs from "@/frontend/ui/WhyChooseUs";
import FreeEvaluation from "@/frontend/ui/FreeEvaluation";
import CustomItService from "@/frontend/ui/CustomItService";
import YourNetwork from "@/frontend/ui/YourNetwork";
import Contact from "@/frontend/ui/Contact";

const Home = ({ auth }) => {
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

            <Carousel />
            <OurNetworkService />
            <Fold />
            <WhyChooseUs />
            <FreeEvaluation />
            <CustomItService />
            <YourNetwork />
            <Contact />

        </FrontendLayout>
    );
};

export default Home;
