import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { Users, Settings, Activity } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, active: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // ডেটাবেজ থেকে আসল ডেটা ফেচ করার লজিক
      const { count } = await supabase.from('users').select('*', { count: 'exact' });
      setStats({ users: count || 0, active: count || 0 });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-gray-400">Total Users</p>
              <h2 className="text-3xl font-bold">{stats.users}</h2>
            </div>
            <Users className="text-blue-500 w-10 h-10" />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-gray-400">Active Sessions</p>
              <h2 className="text-3xl font-bold">{stats.active}</h2>
            </div>
            <Activity className="text-green-500 w-10 h-10" />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-gray-400">Settings</p>
              <button className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm transition">Configure</button>
            </div>
            <Settings className="text-gray-500 w-10 h-10" />
          </div>
        </div>
      )}
    </div>
  );
}
