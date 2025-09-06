'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  EnvelopeSimple, 
  Calendar,
  Download,
  Eye,
  EyeSlash,
  Key
} from 'phosphor-react';

interface WaitlistEntry {
  email: string;
  name?: string;
  timestamp: string;
}

interface WaitlistStats {
  total: number;
  entries: WaitlistEntry[];
}

export default function AdminWaitlistPage() {
  const [stats, setStats] = useState<WaitlistStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const fetchStats = async () => {
    if (!apiKey.trim()) {
      setError('Please enter your admin API key');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/waitlist/stats', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch stats');
      }

      setStats(data.data);
      setAuthenticated(true);
      
      // Store API key in session storage for convenience
      sessionStorage.setItem('admin_api_key', apiKey);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch waitlist stats');
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    if (!stats) return;

    const csvContent = [
      ['Name', 'Email', 'Timestamp'],
      ...stats.entries.map(entry => [
        entry.name || '',
        entry.email,
        new Date(entry.timestamp).toLocaleString()
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waitlist-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Try to load API key from session storage on mount
  useEffect(() => {
    const savedApiKey = sessionStorage.getItem('admin_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 p-8">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl mx-auto mb-4">
                <Key size={32} className="text-emerald-600" weight="duotone" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Admin Access</h1>
              <p className="text-slate-600">Enter your admin API key to view waitlist stats</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm mb-4">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="relative">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter admin API key..."
                  className="w-full px-4 py-3 pr-12 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showApiKey ? <EyeSlash size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                onClick={fetchStats}
                disabled={loading || !apiKey.trim()}
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? 'Authenticating...' : 'Access Dashboard'}
              </button>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl">
              <p className="text-sm text-slate-600 mb-2">
                <strong>Need the API key?</strong>
              </p>
              <p className="text-xs text-slate-500">
                Check your <code className="bg-slate-200 px-1 rounded">.env.local</code> file for the <code className="bg-slate-200 px-1 rounded">ADMIN_API_KEY</code> value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Waitlist Dashboard</h1>
              <p className="text-slate-600">Monitor your CareerRPG waitlist signups</p>
            </div>
            <button
              onClick={() => {
                setAuthenticated(false);
                sessionStorage.removeItem('admin_api_key');
              }}
              className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Total Signups</p>
                  <p className="text-3xl font-bold text-emerald-600">{stats?.total || 0}</p>
                </div>
                <Users size={32} className="text-emerald-500" weight="duotone" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">This Week</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {stats?.entries.filter(entry => {
                      const entryDate = new Date(entry.timestamp);
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      return entryDate > weekAgo;
                    }).length || 0}
                  </p>
                </div>
                <Calendar size={32} className="text-blue-500" weight="duotone" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">Latest Signup</p>
                  <p className="text-lg font-semibold text-slate-800">
                    {stats?.entries[0] ? 
                      new Date(stats.entries[0].timestamp).toLocaleDateString() : 
                      'No signups yet'
                    }
                  </p>
                </div>
                <EnvelopeSimple size={32} className="text-purple-500" weight="duotone" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Recent Signups</h2>
            <div className="flex gap-3">
              <button
                onClick={fetchStats}
                disabled={loading}
                className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors font-medium"
              >
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
              <button
                onClick={downloadCSV}
                disabled={!stats?.entries.length}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download size={16} />
                Export CSV
              </button>
            </div>
          </div>
        </motion.div>

        {/* Waitlist Entries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
        >
          {stats?.entries.length ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Name</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Email</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Signup Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.entries.map((entry, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-900">
                        {entry.name || <span className="text-slate-400 italic">Not provided</span>}
                      </td>
                      <td className="py-4 px-6 text-slate-900 font-medium">{entry.email}</td>
                      <td className="py-4 px-6 text-slate-600">
                        {new Date(entry.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Users size={48} className="text-slate-300 mx-auto mb-4" weight="duotone" />
              <p className="text-slate-500 text-lg">No waitlist entries yet</p>
              <p className="text-slate-400">Entries will appear here as people sign up</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
