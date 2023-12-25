import React from "react";

const Contact = () => {
    return (
        <>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center">
                {/* Left column */}
                <div className="text-center lg:text-left">
                    <h1 className='text-4xl font-bold text-center text-blue-600/100 my-8'>Why Choose Our IT Services?</h1>
                    <h2 className="text-3xl font-bold">Grow your business</h2>
                    <p className="mt-4">Focus on scalling and expanding your business, while we take care of your IT needs and network requirments.</p>

                    <h2 className="text-3xl font-bold mt-4">Streamline Processes</h2>
                    <p className="mt-4">Increase productivity and performance of your organization when you have a dedicated IT support team by your side.</p>

                    <h2 className="text-3xl font-bold mt-4">Empowering your people</h2>
                    <p className="mt-4">Allow your employees to do more and focus on their jobs, without being held back by tech issues and concerns.</p>
                </div>

                {/* Right column */}
                <div className="mt-4 lg:mt-0 w-full">
                    <h1 className='text-4xl font-bold text-center text-blue-600/100 my-8'>Contact Us</h1>
                    <form className="bg-gray-100 p-6">
                        {/* Your form inputs go here */}
                        <input
                            className="w-full mb-4 p-2 rounded-md"
                            type="text"
                            placeholder="Full Name"
                        />
                        <div className="flex flex-col lg:flex-row lg:gap-4">
                            <input
                                className="w-full lg:w-1/2 mb-4 p-2 rounded-md"
                                type="email"
                                placeholder="Email"
                            />
                            <input
                                className="w-full lg:w-1/2 mb-4 p-2 rounded-md"
                                type="text"
                                placeholder="Phone Number"
                            />
                        </div>
                        <textarea
                            className="w-full mb-4 p-2 rounded-md"
                            rows="4"
                            placeholder="What is your inquiry about?"
                        ></textarea>
                        <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-md hover:bg-blue-600">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
