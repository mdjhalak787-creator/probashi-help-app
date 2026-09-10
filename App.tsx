import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import SuperAdminDashboard from './SuperAdminDashboard';
import AgentDashboard from './AgentDashboard';
// আপনার অন্যান্য পেজগুলো ইমপোর্ট করে নেবেন

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <Routes>
          <Route path="/" element={<div className="p-4">হোম পেজ</div>} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/super-admin" element={<SuperAdminDashboard />} />
          <Route path="/agent" element={<AgentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
