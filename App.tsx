import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import SuperAdminDashboard from './SuperAdminDashboard';
import AgentDashboard from './AgentDashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <Routes>
          <Route path="/" element={<div className="p-6 text-xl">Probashi Help Iraq - Home</div>} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/super-admin" element={<SuperAdminDashboard />} />
          <Route path="/agent" element={<AgentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
