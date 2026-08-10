import React, { useState } from 'react';
import { 
  TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight, 
  Search, Bell, Settings, Layers, PieChart, Shield, Download, RefreshCw 
} from 'lucide-react';

export default function App() {
  const [timeframe, setTimeframe] = useState('7d');
  const [searchQuery, setSearchQuery] = useState('');

  const metrics = [
    { title: 'Total Revenue', value: '$124,500', change: '+14.2%', isPositive: true, icon: DollarSign },
    { title: 'Active Subscribers', value: '8,420', change: '+8.1%', isPositive: true, icon: Users },
    { title: 'Conversion Rate', value: '3.62%', change: '-0.4%', isPositive: false, icon: TrendingUp },
    { title: 'Server Uptime', value: '99.98%', change: '+0.02%', isPositive: true, icon: Activity }
  ];

  const recentTransactions = [
    { id: 'TX-9021', user: 'Sophia Chen', plan: 'Enterprise Pro', amount: '$499.00', status: 'Completed', date: 'Just now' },
    { id: 'TX-9020', user: 'Marcus Vance', plan: 'Developer Pass', amount: '$49.00', status: 'Completed', date: '12m ago' },
    { id: 'TX-9019', user: 'Aria Thorne', plan: 'Startup Tier', amount: '$149.00', status: 'Pending', date: '45m ago' },
    { id: 'TX-9018', user: 'Liam O'Connor', plan: 'Enterprise Pro', amount: '$499.00', status: 'Completed', date: '2h ago' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/20">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              ApexMetrics
            </span>
          </div>

          <nav className="space-y-1.5">
            <a href="#" className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-indigo-600/10 text-indigo-400 font-medium border border-indigo-500/20">
              <PieChart className="w-5 h-5" /> Overview
            </a>
            <a href="#" className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition">
              <Users className="w-5 h-5" /> Customers
            </a>
            <a href="#" className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition">
              <Activity className="w-5 h-5" /> Analytics
            </a>
            <a href="#" className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition">
              <Shield className="w-5 h-5" /> Security
            </a>
            <a href="#" className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition">
              <Settings className="w-5 h-5" /> Settings
            </a>
          </nav>
        </div>

        <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/30">
              2H
            </div>
            <div>
              <div className="text-sm font-semibold">2H Ride Creator</div>
              <div className="text-xs text-slate-400">Pro Plan Active</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 space-y-8 overflow-y-auto">
        {/* Header Bar */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Executive Dashboard</h1>
            <p className="text-slate-400 text-sm mt-1">Real-time revenue metrics & platform performance overview.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search metrics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48 md:w-64"
              />
            </div>
            <button className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-300">
              <Bell className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium shadow-lg shadow-indigo-600/25 transition">
              <Download className="w-4 h-4" /> Export Report
            </button>
          </div>
        </header>

        {/* Timeframe Selector */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex gap-2">
            {['24h', '7d', '30d', '12m'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition ${
                  timeframe === tf
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <RefreshCw className="w-3 h-3 animate-spin" /> Live sync active
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-400">{m.title}</span>
                  <div className="p-2.5 bg-slate-800/80 rounded-xl text-indigo-400 group-hover:scale-110 transition">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-2xl font-bold tracking-tight text-white">{m.value}</span>
                  <span className={`text-xs font-bold flex items-center ${m.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {m.isPositive ? <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> : <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
                    {m.change}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Graph & Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-lg">Revenue Growth Trajectory</h3>
                <p className="text-xs text-slate-400">Monthly recurring revenue projection over past 6 quarters</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                +24.5% YoY
              </span>
            </div>

            {/* Simulated Chart Visual */}
            <div className="h-56 flex items-end justify-between gap-3 pt-8 pb-2 px-2 border-b border-slate-800/80">
              {[40, 55, 35, 70, 60, 85, 95, 80, 110, 125, 140, 160].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div 
                    className="w-full bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-md group-hover:brightness-125 transition-all duration-300" 
                    style={{ height: `${h}px` }}
                  ></div>
                  <span className="text-[10px] text-slate-500 font-mono">M{i+1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity / Conversion Feed */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-1">Conversion Breakdown</h3>
              <p className="text-xs text-slate-400 mb-6">Traffic sources converting to paid tier</p>

              <div className="space-y-4">
                {[
                  { name: 'Organic Search', pct: '48%', color: 'bg-indigo-500' },
                  { name: 'Direct Traffic', pct: '28%', color: 'bg-cyan-400' },
                  { name: 'Referral & Partner', pct: '16%', color: 'bg-violet-500' },
                  { name: 'Social Campaigns', pct: '8%', color: 'bg-emerald-400' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-slate-400">{item.pct}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: item.pct }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 mt-6 text-center">
              <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition">
                View Full Traffic Breakdown &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">Recent Subscriptions</h3>
            <span className="text-xs text-slate-400">Showing latest live billing events</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  <th className="pb-3">Transaction ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Plan</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {recentTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-800/30 transition">
                    <td className="py-3.5 font-mono text-xs text-slate-400">{tx.id}</td>
                    <td className="py-3.5 font-medium text-white">{tx.user}</td>
                    <td className="py-3.5 text-slate-300">{tx.plan}</td>
                    <td className="py-3.5 font-bold text-slate-100">{tx.amount}</td>
                    <td className="py-3.5">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                        tx.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="py-3.5 text-xs text-slate-400">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}