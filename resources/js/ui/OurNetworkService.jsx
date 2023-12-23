import React from 'react';
import servicesBg from '@/assets/images/our_network_services_bg.png';
import service1 from '@/assets/images/services/1.png';
import service2 from '@/assets/images/services/2.png';
import service3 from '@/assets/images/services/3.png';
import service4 from '@/assets/images/services/4.png';
import service5 from '@/assets/images/services/5.png';
import service6 from '@/assets/images/services/6.png';
import service7 from '@/assets/images/services/7.png';
import service8 from '@/assets/images/services/8.png';
import service9 from '@/assets/images/services/9.png';

const OurNetworkService = () => {
    return (
        <>
        <h1 className='text-5xl font-bold text-center text-blue-600/100 p-10'>Our Network Services</h1>
        
        <div className="grid grid-cols-3 gap-4"
        style={{ backgroundImage: `url(${servicesBg})` }}
        >

        <div class="relative rounded-xl overflow-hidden">
        <img class="w-96 h-64" src={service1} alt="Card Image" />
        <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 class="text-2xl font-bold">Network Design & Installation</h2>
        </div>
        </div>

        <div class="relative rounded-xl overflow-hidden">
        <img class="w-96 h-64" src={service2} alt="Card Image" />
        <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 class="text-2xl font-bold">Network Trouble-shotting</h2>
        </div>
        </div>

        <div class="relative rounded-xl overflow-hidden">
        <img class="w-96 h-64" src={service3} alt="Card Image" />
        <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 class="text-2xl font-bold">Firewall Installation</h2>
        </div>
        </div>

        <div class="relative rounded-xl overflow-hidden">
        <img class="w-96 h-64" src={service4} alt="Card Image" />
        <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 class="text-2xl font-bold">WIFI Solution</h2>
        </div>
        </div>

        <div class="relative rounded-xl overflow-hidden">
        <img class="w-96 h-64" src={service5} alt="Card Image" />
        <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 class="text-2xl font-bold">On Site Support</h2>
        </div>
        </div>

        <div class="relative rounded-xl overflow-hidden">
        <img class="w-96 h-64" src={service6} alt="Card Image" />
        <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 class="text-2xl font-bold">Aging Hardware</h2>
        </div>
        </div>

        <div class="relative rounded-xl overflow-hidden">
        <img class="w-96 h-64" src={service7} alt="Card Image" />
        <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 class="text-2xl font-bold">Network Monitoring 24/7 Support</h2>
        </div>
        </div>

        <div class="relative rounded-xl overflow-hidden">
        <img class="w-96 h-64" src={service8} alt="Card Image" />
        <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 class="text-2xl font-bold">Wireless Access Point Setup</h2>
        </div>
        </div>

        <div class="relative rounded-xl overflow-hidden">
        <img class="w-96 h-64" src={service9} alt="Card Image" />
        <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 class="text-2xl font-bold">Server Installation</h2>
        </div>
        </div>



   

        </div>
        </>

    );
};

export default OurNetworkService;