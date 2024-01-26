import Layout from '@/backend/Dashboard/Layout';
import { Head } from '@inertiajs/react';
import React from 'react';;

const About = ({ auth }) => {
    return (
        <Layout
        user={auth.user}
        header={<h1 className="font-semibold text-xl text-gray-800 leading-tight">About Page</h1>}
        >
            <Head className="text-2xl font-semibold mb-4" title="About Page" />
            <div>
            <h2 className="text-2xl font-semibold mb-4">About Page</h2>
                <p>Your about page content goes here.</p>
            </div>
        </Layout>
    );
};

export default About;
