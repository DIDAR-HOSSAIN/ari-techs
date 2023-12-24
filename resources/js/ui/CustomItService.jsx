import React from 'react';

const CustomItService = () => {
    return (
        <>
            <div className="flex flex-col w-full border-opacity-50 mt-4">
                <div className="divider text-2xl">
                    Custom IT Services & solutions for your business
                </div>
            </div>

            <div
                className="grid lg:grid-cols-3 md:grid-cols-2 gap-auto mx-auto"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "20px",
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* Your grid items */}
                {[
                    { title: "Network Design & Installation" },
                    { title: "Network Trouble-shotting" },
                    { title: "Firewall Installation" },
                ].map((service, index) => (
                    <div
                        key={index}
                        className="relative rounded-xl overflow-hidden border-t-8  border-indigo-600 shadow-2xl p-4 m-2"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            height: "300px",
                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-blue-600">
                            <h2 className="text-2xl font-bold">
                                {service.title}
                            </h2>
                            <h2 className="text-2xl font-bold">
                                {service.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};


export default CustomItService;