import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// আপনার ফাইল অনুযায়ী ইমপোর্টগুলো মিলিয়ে নেবেন
import AdminDashboard from './AdminDashboard';
import SuperAdminDashboard from './SuperAdminDashboard';
import AgentDashboard from './AgentDashboard';
import Profile from './Profile'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/super-admin" element={<SuperAdminDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} />
        {/* আপনার অন্যান্য পেজের রাউট এখানে বসবে */}
      </Routes>
    </Router>
  );
}

export default App;
