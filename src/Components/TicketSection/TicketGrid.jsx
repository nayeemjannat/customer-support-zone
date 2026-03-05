import React from 'react';
import TicketCard from './TicketCard';

const TicketGrid = ({ tickets, handleProcessing, inProgress, handleComplete }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
         
            {/* Left Side: Ticket Grid (2 Columns) */}
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Customer Tickets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tickets.map(ticket => (
                        <TicketCard 
                            key={ticket.id} 
                            ticket={ticket} 
                            handleProcessing={handleProcessing} 
                        />
                    ))}
                </div>
            </div>

         {/* Right Side: Task Status Section  */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-28">
                    <h2 className="text-xl text-black font-bold mb-6 pb-4 border-b border-gray-50">Currently Processing</h2>
                    
                    {inProgress.length === 0 ? (
                        <p className="text-gray-400 text-center py-10 italic">No tickets in progress...</p>
                    ) : (
                        <div className="space-y-4">
                            {inProgress.map((item, index) => (
                                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="font-semibold text-sm text-slate-700 truncate mr-2">{item.title}</p>
                                    <button 
                                        onClick={() => handleComplete(item.id)}
                                        className="btn btn-xs btn-success text-white capitalize"
                                    >
                                        Complete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default TicketGrid;
