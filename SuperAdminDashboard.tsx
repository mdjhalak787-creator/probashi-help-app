import React, { useState } from 'react';
import { supabase } from './lib/supabase';
import { ShieldAlert, Database, Lock } from 'lucide-react';

export default function SuperAdminDashboard() {
  const [systemStatus, setSystemStatus] = useState('Online');

  const handleSystemReset = async () => {
    const confirm = window.confirm("Are you sure you want to reset system cache?");
    if (confirm) {
      // সুপার অ্যাডমিন লেভেল সিস্টেম রিসেট লজিক
      alert("System cache cleared successfully.");
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="flex items-center gap-3 mb-6">
        <Lock className="text-red-500 w-8 h-8" />
        <h1 className="text-2xl font-bold">Super Admin Panel</h1>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-red-500/30">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <ShieldAlert className="text-yellow-500" /> System Control
        </h2>
        <p className="mb-4 text-gray-300">Status: <span className="text-green-400 font-bold">{systemStatus}</span></p>
        <button 
          onClick={handleSystemReset}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition"
        >
          Clear System Cache
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Database className="text-blue-500" /> Database Management
        </h2>
        <p className="text-gray-400 text-sm">Access core database tables and manage global permissions here.</p>
        {/* টেবিল বা ডেটা গ্রিড এখানে বসবে */}
      </div>
    </div>
  );
}
