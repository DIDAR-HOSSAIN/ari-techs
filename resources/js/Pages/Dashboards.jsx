import Layout from "@/backend/Dashboard/Layout";
import { Head } from "@inertiajs/react";
import React from "react";

const Dashboard = () => {
    return (
        <Layout
        header={<h1 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h1>}
        >
            <Head title="Dashboard" />
            <div>
                <h2 className="text-2xl font-semibold mb-4">Dashboard Page</h2>
                <p>Your Dashboard pages content goes here.</p>
            </div>
        </Layout>
    );
};

export default Dashboard;
