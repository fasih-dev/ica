import React from 'react';

const Sidebar = () => {
    return (
        <div className="lg:w-1/4 p-4 lg:p-8 mx-auto lg:mx-0">
            {/* Program Brochure Card */}
            <div className="bg-white p-6 mb-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Program Brochure</h2>
                <p className="text-sm text-gray-700">
                    Download our program brochure to learn more about our courses and offerings.
                </p>
                <a href="/program-brochure" className="text-blue-500 hover:underline mt-4 block">
                    Download Brochure
                </a>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Location</h2>
                <p className="text-sm text-gray-700">
                    Visit our campus located at XYZ Street, City, Country.
                </p>
                <a href="/location" className="text-blue-500 hover:underline mt-4 block">
                    View Map
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
