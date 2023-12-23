import Navbar from '@/ui/Navbar';
import OurNetworkService from '@/ui/OurNetworkService';
import Slider from '@/ui/Slider';
import React from 'react';

const Welcome = () => {

    return (
        <div className='mx-20'>
            <Navbar />
            <Slider />
            <OurNetworkService />
        </div>
    );
};

export default Welcome;