import Carousel from '@/frontend/ui/Carousel';
import CustomItService from '@/frontend/ui/CustomItService';
import Fold from '@/frontend/ui/Fold';
import Footer from '@/frontend/ui/Footer';
import FreeEvaluation from '@/frontend/ui/FreeEvaluation';
import Navbar from '@/frontend/ui/Navbar';
import OurNetworkService from '@/frontend/ui/OurNetworkService';
import WhyChooseUs from '@/frontend/ui/WhyChooseUs';
import YourNetwork from '@/frontend/ui/YourNetwork';
import Contact from '@/frontend/ui/contact';
import React from 'react';

const Welcome = () => {

    return (
        <div className='lg:mx-10'>
            <Navbar />
            <Carousel />
            <OurNetworkService />
            <Fold />
            <WhyChooseUs />
            <FreeEvaluation />
            <CustomItService />
            <YourNetwork />
            <Contact />
            <Footer />
        </div>
    );
};

export default Welcome;