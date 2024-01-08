// MainContent.js
import React from 'react';

const MainContent = () => {
    // Example placeholder data
    const demoData = [
        { id: 1, title: 'First Item', description: 'Description for the first item' },
        { id: 2, title: 'Second Item', description: 'Description for the second item' },
        { id: 3, title: 'Third Item', description: 'Description for the third item' },
    ];

    return (
        <div className="main-content">
            <h2>Main Content</h2>
            <div className="content">
                {demoData.map((item) => (
                    <div key={item.id} className="item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainContent;
