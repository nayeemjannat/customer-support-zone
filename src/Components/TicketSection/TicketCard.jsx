import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa"; 
const TicketCard = ({ ticket, handleProcessing }) => {
    const { id, title, description, customer, priority, createdAt, status } = ticket;

    // Priority Text Color Logic 
    const priorityTextColor = priority === 'High' ? 'text-[#EF4444]' : 'text-[#F59E0B]';
    
    // Status Badge Logic (Light Green for Open, Light Yellow for In-Progress)
    const statusStyles = status === 'Open' 
        ? 'bg-[#DCFCE7] text-[#166534]' 
        : 'bg-[#FEF9C3] text-[#854D0E]';
    
    const statusDotColor = status === 'Open' ? 'bg-[#22C55E]' : 'bg-[#EAB308]';

    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
            
            {/* Top Row: Title & Status Badge */}
            <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl font-bold text-[#1E293B] leading-tight flex-1">
                    {title}
                </h3>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap ${statusStyles}`}>
                    <span className={`w-2.5 h-2.5 rounded-full ${statusDotColor}`}></span>
                    {status || "Open"}
                </div>
            </div>

            {/* Description Section */}
            <p className="text-[#64748B] text-[15px] leading-relaxed line-clamp-2">
                {description}
            </p>

            {/* Bottom Info Row */}
            <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-50 text-[#64748B]">
                
                {/* ID and Priority */}
                <div className="flex items-center gap-4">
                    <span className="font-semibold text-[#94A3B8]">#{id || '1001'}</span>
                    <span className={`text-sm font-black tracking-tight ${priorityTextColor}`}>
                        {priority?.toUpperCase()} PRIORITY
                    </span>
                </div>

                {/* Customer and Date */}
                <div className="flex items-center gap-6">
                    <span className="font-medium text-[#475569]">{customer}</span>
                    <div className="flex items-center gap-2">
                        <FaRegCalendarAlt className="text-lg" />
                        <span className="font-medium">{createdAt}</span>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <button 
                onClick={() => handleProcessing(ticket)}
                className="mt-2 w-full py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-500 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all uppercase tracking-wider"
            >
                Process Ticket
            </button>
        </div>
    );
};

export default TicketCard;