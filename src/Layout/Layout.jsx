import React from "react";
import { Route, Routes } from "react-router";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "../Pages/Dashboard";
import Reservations from "../FrontDesk/Reservations";
import Checks from "../FrontDesk/Checks";
import Guest from "../FrontDesk/Guest";
import Room from "../FrontDesk/Room";

const Layout = () => {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <Navbar />
      {/* Content */}
      <div className="flex h-full bg-blue-900 ">
        <Sidebar />
        <div className="bg-gray-200 w-full h-full lg:px-20 lg:pt-10 px-4 py-2 mb-40">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Reservations" element={<Reservations />} />
            <Route path="/Checks" element={<Checks />} />
            <Route path="/Guest" element={<Guest />} />
            <Route path="/Room" element={<Room />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
