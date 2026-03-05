import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketGrid from './Components/TicketSection/TicketGrid';
import Footer from './Components/Footer/Footer';



function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    fetch('/customer_ticket.json')
      .then(res => res.json())
      .then(data => setTickets(data))
  }, []);

  // Handle Adding to Processing
  const handleProcessing = (ticket) => {
    const isExist = inProgress.find(item => item.id === ticket.id);
    if (!isExist) {
      setInProgress([...inProgress, ticket]);
      toast.success("Added to In-Progress list!");
    } else {
      toast.warn("Ticket already in progress!");
    }
  };

  // Handle Completion
  const handleComplete = (id) => {
    const remaining = inProgress.filter(item => item.id !== id);
    setInProgress(remaining);
    setResolvedCount(resolvedCount + 1);
    toast.info("Ticket marked as Resolved!");
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans">
      <Navbar />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolvedCount} />
      
      <main className="px-6 md:px-20 mt-12">
        <TicketGrid 
          tickets={tickets} 
          inProgress={inProgress}
          handleProcessing={handleProcessing}
          handleComplete={handleComplete}
        />
      </main>
<Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;