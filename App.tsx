import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import SuperAdminDashboard from './SuperAdminDashboard';
import AgentDashboard from './AgentDashboard';

function Home() {
  return (
    <div style={{ padding: '40px', background: '#111827', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#1f2937', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '10px', color: '#60a5fa' }}>Probashi Help Iraq</h1>
        <p style={{ color: '#9ca3af', marginBottom: '20px' }}>প্রবাসী হেল্প কেয়ার ইরাক - ম্যানেজমেন্ট সিস্টেম</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link to="/admin" style={{ background: '#2563eb', color: '#fff', padding: '12px', textAlign: 'center', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
            Admin Dashboard
          </Link>
          <Link to="/super-admin" style={{ background: '#dc2626', color: '#fff', padding: '12px', textAlign: 'center', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
            Super Admin Panel
          </Link>
          <Link to="/agent" style={{ background: '#16a34a', color: '#fff', padding: '12px', textAlign: 'center', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
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
