import React from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
    
    // Handle New Ticket Button Click
    const handleNewTicket = () => {
        toast.info("Opening New Ticket Form...");
        
    };

    return (
        <nav className="flex items-center justify-between px-6 md:px-20 py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
            {/* Left: Logo/Branding */}
            <div className="text-2xl font-bold text-slate-800 tracking-tight">
                CS — <span className="text-gray-900">Ticket System</span>
            </div>

            {/* Right: Menu & Button */}
            <div className="flex items-center gap-8">
                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-6 text-gray-500 font-medium">
                    <li className="hover:text-purple-600 cursor-pointer transition-colors">Home</li>
                    <li className="hover:text-purple-600 cursor-pointer transition-colors">FAQ</li>
                    <li className="hover:text-purple-600 cursor-pointer transition-colors">Changelog</li>
                    <li className="hover:text-purple-600 cursor-pointer transition-colors">Blog</li>
                    <li className="hover:text-purple-600 cursor-pointer transition-colors">Download</li>
                    <li className="hover:text-purple-600 cursor-pointer transition-colors">Contact</li>
                </ul>

                {/* New Ticket Button using DaisyUI and Tailwind */}
                <button 
                    onClick={handleNewTicket}
                    className="btn btn-primary bg-purple-600 border-none hover:bg-purple-700 text-white normal-case px-6 rounded-lg flex items-center gap-2"
                >
                    <span className="text-xl font-light">+</span> New Ticket
                </button>
            </div>
        </nav>
    );
};

export default Navbar;