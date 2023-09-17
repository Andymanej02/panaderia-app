import React from "react";
import Navbar from "../components/NavbarDashboard";
import DashboardContent from "../components/DashboardContent";

const Dashboard = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <div>
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;




















