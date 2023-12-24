import React from "react";
import freeImg from "@/assets/images/evaluation.png";

const FreeEvaluation = () => {
    const containerStyle = {
        backgroundImage: `url(${freeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh", // Adjust this to fit your design
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div style={containerStyle}>
            <h1 className="text-5xl font-bold text-white bg-blue-600 mt-8">
                Get a FREE evaluation
            </h1>
        </div>
    );
};

export default FreeEvaluation;
