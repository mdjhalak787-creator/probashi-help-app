import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import SuperAdminDashboard from './SuperAdminDashboard';
import AgentDashboard from './AgentDashboard';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700 text-center">
        <h1 className="text-3xl font-bold text-blue-400 mb-2">Probashi Help Iraq</h1>
        <p className="text-gray-400 mb-6">প্রবাসী হেল্প কেয়ার ইরাক ভার্সন</p>
        <div className="flex flex-col gap-3">
          <Link to="/admin" className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Admin Dashboard
          </Link>
          <Link to="/super-admin" className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
            Super Admin Panel
          </Link>
          <Link to="/agent" className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
            Agent Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/super-admin" element={<SuperAdminDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} />
      </Routes>
    </Router>
  );
}
