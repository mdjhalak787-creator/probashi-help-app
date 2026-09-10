import React from 'react';
import { Briefcase, Clock, CheckCircle } from 'lucide-react';

export default function AgentDashboard() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Agent Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 mb-1">New Assignments</p>
              <h2 className="text-3xl font-bold">12</h2>
            </div>
            <Briefcase className="text-blue-500" />
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 mb-1">Completed Tasks</p>
              <h2 className="text-3xl font-bold">45</h2>
            </div>
            <CheckCircle className="text-green-500" />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((task) => (
            <div key={task} className="flex items-center justify-between p-4 bg-gray-700 rounded">
              <div className="flex items-center gap-3">
                <Clock className="text-gray-400 w-5 h-5" />
                <span>Task #{task} - Application Review</span>
              </div>
              <span className="text-sm text-yellow-400">Pending</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
