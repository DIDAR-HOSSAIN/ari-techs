import CustomItService from '@/ui/CustomItService';
import Fold from '@/ui/Fold';
import Footer from '@/ui/Footer';
import FreeEvaluation from '@/ui/FreeEvaluation';
import Navbar from '@/ui/Navbar';
import OurNetworkService from '@/ui/OurNetworkService';
import Slider from '@/ui/Slider';
import WhyChooseUs from '@/ui/WhyChooseUs';
import YourNetwork from '@/ui/YourNetwork';
import Contact from '@/ui/contact';
import React from 'react';

const Welcome = () => {

    return (
        <div className='lg:mx-20'>
            <Navbar />
            <Slider />
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