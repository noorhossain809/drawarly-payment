import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import BottomNavbar from './MobileNavbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area should grow to fill available space */}
      <main className="flex-grow ">
        <Outlet />
      </main>

      {/* Footer at the bottom */}
      <Footer />
      {/* bottom navbar */}
      <BottomNavbar />
    </div>
  );
};

export default MainLayout;
