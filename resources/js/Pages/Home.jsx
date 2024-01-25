import Layout from '@/backend/Dashboard/Layout';
import { Head } from '@inertiajs/react';
import React from 'react';


const Home = () => {
    return (
        <Layout
        header={<h1 className="font-semibold text-xl text-gray-800 leading-tight">Home</h1>}
        >
            <Head className="text-2xl font-semibold mb-4" title="Home" />
            <div>
                <h2 className="text-2xl font-semibold mb-4">Home Page</h2>
                <p>Your home page content goes here.</p>
            </div>
        </Layout>
    );
};

export default Home;
