import CustomItService from '@/ui/CustomItService';
import Fold from '@/ui/Fold';
import FreeEvaluation from '@/ui/FreeEvaluation';
import Navbar from '@/ui/Navbar';
import OurNetworkService from '@/ui/OurNetworkService';
import Slider from '@/ui/Slider';
import WhyChooseUs from '@/ui/WhyChooseUs';
import React from 'react';

const Welcome = () => {

    return (
        <div className='mx-20'>
            <Navbar />
            <Slider />
            <OurNetworkService />
            <Fold />
            <WhyChooseUs />
            <FreeEvaluation />
            <CustomItService />
        </div>
    );
};

export default Welcome;