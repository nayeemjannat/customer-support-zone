import React from 'react';

import vectorBg from '../../assets/vector1.png';

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className="px-6 md:px-20 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* In-Progress Card */}
                <div 
                    className="relative overflow-hidden bg-purple-600 rounded-2xl p-12 text-white shadow-lg flex flex-col items-center justify-center h-[250px]"
                    style={{
                        backgroundImage: `linear-gradient(to bottom right, rgba(124, 58, 237, 0.9), rgba(167, 139, 250, 0.9)), url(${vectorBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h3 className="text-2xl font-semibold mb-4 z-10">In-Progress</h3>
                    <p className="text-7xl font-bold z-10">{inProgressCount}</p>
                </div>

                {/* Resolved Card */}
                <div 
                    className="relative overflow-hidden bg-emerald-600 rounded-2xl p-12 text-white shadow-lg flex flex-col items-center justify-center h-[250px]"
                    style={{
                        backgroundImage: `linear-gradient(to bottom right, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9)), url(${vectorBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h3 className="text-2xl font-semibold mb-4 z-10">Resolved</h3>
                    <p className="text-7xl font-bold z-10">{resolvedCount}</p>
                </div>

            </div>
        </div>
    );
};

export default Banner;
