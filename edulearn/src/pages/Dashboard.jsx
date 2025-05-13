// EduLearnDashboard.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Calendar, Users, UserCircle, LogOut } from "lucide-react";

const Sidebar = ({ userRole }) => {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-6">EduLearn</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/dashboard" className="flex items-center space-x-2 hover:text-blue-600">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          {userRole === "teacher" ? (
            <>
              <Link to="/calendar" className="flex items-center space-x-2 hover:text-blue-600">
                <Calendar className="w-5 h-5" />
                <span>My Calendar</span>
              </Link>
              <Link to="/students" className="flex items-center space-x-2 hover:text-blue-600">
                <Users className="w-5 h-5" />
                <span>Student Requests</span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/teachers" className="flex items-center space-x-2 hover:text-blue-600">
                <Users className="w-5 h-5" />
                <span>Find Teachers</span>
              </Link>
              <Link to="/lessons" className="flex items-center space-x-2 hover:text-blue-600">
                <Calendar className="w-5 h-5" />
                <span>My Lessons</span>
              </Link>
            </>
          )}
          <Link to="/profile" className="flex items-center space-x-2 hover:text-blue-600">
            <UserCircle className="w-5 h-5" />
            <span>Profile</span>
          </Link>
        </nav>
      </div>
      <Link to="/logout" className="flex items-center space-x-2 text-red-600">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </Link>
    </div>
  );
};

const DashboardHome = () => (
  <div className="p-6">
    <h1 className="text-3xl font-semibold">Welcome to EduLearn!</h1>
    <p className="text-gray-600 mt-2">Here’s a quick overview of your activity.</p>
  </div>
);

const Dashboard = () => {
  const [userRole] = useState("student"); // Change to "teacher" to preview teacher UI

  return (
    <Router>
      <div className="flex">
        <Sidebar userRole={userRole} />
        <main className="flex-1 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/dashboard" element={<DashboardHome />} />
            {/* Add more routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Dashboard;
