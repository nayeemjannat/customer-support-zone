
import React from 'react';
import { FaXTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#060606] text-white pt-20 pb-10 mt-20">
            <div className="px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-12">
                
                {/* Brand & Description */}
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold mb-6">CS — Ticket System</h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                       Manage, track, and resolve customer inquiries faster than ever. 
    Our integrated ticketing system helps your team stay organized 
    and deliver exceptional support.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Company</h3>
                    <ul className="text-gray-400 text-sm space-y-4">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Our Mission</li>
                        <li className="hover:text-white cursor-pointer">Contact Saled</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Services</h3>
                    <ul className="text-gray-400 text-sm space-y-4">
                        <li className="hover:text-white cursor-pointer">Products & Services</li>
                        <li className="hover:text-white cursor-pointer">Customer Stories</li>
                        <li className="hover:text-white cursor-pointer">Download Apps</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Social Links</h3>
                    <ul className="text-gray-400 text-sm space-y-4">
                        <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                            <FaXTwitter /> @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                            <FaLinkedin /> @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                            <FaFacebook /> @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-3 hover:text-white cursor-pointer text-xs">
                            <FaEnvelope /> support@cst.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Area */}
            <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                © 2026 CS — Ticket System. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
