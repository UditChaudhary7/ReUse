import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  Eye 
} from 'lucide-react';

const MyListingsPage = () => {
  const [activeTab, setActiveTab] = useState('active');

  const myMockListings = [
    {
      id: '101',
      name: 'Calculus: Early Transcendentals (8th Ed)',
      price: 35,
      tag: 'Textbooks',
      status: 'active',
      views: 48,
      inquiries: 3,
      date: 'Listed 2 days ago',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: '103',
      name: 'Ergonomic Desk Lamp with Wireless Charging',
      price: 18,
      tag: 'Furniture',
      status: 'active',
      views: 31,
      inquiries: 1,
      date: 'Listed yesterday',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: '201',
      name: 'TI-84 Plus Silver Edition Graphing Calculator',
      price: 50,
      tag: 'Calculators',
      status: 'sold',
      views: 95,
      inquiries: 7,
      date: 'Sold last week to Alex K.',
      image: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=400&auto=format&fit=crop&q=80',
    },
  ];

  const displayedListings = myMockListings.filter((item) =>
    activeTab === 'all' ? true : item.status === activeTab
  );

  return (
    <div className="space-y-8">
      {/* Page Title & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-slate-950 bg-emerald-100 px-3 py-1 rounded-full border border-black">
            Student Dashboard
          </span>
          <h1 className="text-3xl font-black text-slate-950 mt-2">
            My Campus Listings
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Track views, answer buyer messages, and mark items as sold.
          </p>
        </div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/sell"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-black text-white text-xs font-bold rounded-xl border border-black shadow-md transition-colors"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Create New Listing</span>
          </Link>
        </motion.div>
      </div>

      {/* Mini Performance Cards with Thin Black Border */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white/98 backdrop-blur-md border border-black rounded-2xl shadow-xs space-y-1">
          <div className="text-xs text-slate-600 font-bold">Total Earned</div>
          <div className="text-2xl font-black text-slate-950">$185.00</div>
          <div className="text-[11px] text-emerald-700 font-bold">100% kept • 0% platform fee</div>
        </div>

        <div className="p-5 bg-white/98 backdrop-blur-md border border-black rounded-2xl shadow-xs space-y-1">
          <div className="text-xs text-slate-600 font-bold">Active Listings</div>
          <div className="text-2xl font-black text-slate-950">2 Items</div>
          <div className="text-[11px] text-slate-600 font-semibold">Live on campus right now</div>
        </div>

        <div className="p-5 bg-white/98 backdrop-blur-md border border-black rounded-2xl shadow-xs space-y-1">
          <div className="text-xs text-slate-600 font-bold">Total Buyer Views</div>
          <div className="text-2xl font-black text-slate-950">174 Views</div>
          <div className="text-[11px] text-teal-700 font-bold">+18 views today</div>
        </div>
      </div>

      {/* Filter Tabs with Thin Black Border */}
      <div className="flex items-center gap-2">
        {[
          { id: 'active', label: 'Active Listings (2)' },
          { id: 'sold', label: 'Sold & Completed (1)' },
          { id: 'all', label: 'All Items (3)' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border border-black shadow-xs ${
                isActive
                  ? 'bg-slate-950 text-white'
                  : 'bg-white/95 text-slate-800 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Listings List with Thin Black Border */}
      <div className="space-y-4">
        {displayedListings.map((item) => (
          <motion.div
            layout
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/98 backdrop-blur-md border border-black rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-xl object-cover border border-black shrink-0"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-950 border border-black/40">
                    {item.tag}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border border-black ${
                      item.status === 'active'
                        ? 'bg-emerald-100 text-slate-950'
                        : 'bg-slate-200 text-slate-950'
                    }`}
                  >
                    {item.status === 'active' ? '● Active' : '✓ Sold'}
                  </span>
                </div>
                <h3 className="text-sm font-black text-slate-950">{item.name}</h3>
                <div className="text-xs text-slate-600 font-medium">{item.date}</div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200">
              <div className="text-left sm:text-right">
                <div className="text-lg font-black text-slate-950">${item.price}</div>
                <div className="text-xs text-slate-600 font-medium flex items-center gap-1">
                  <Eye className="w-3 h-3 text-slate-500" />
                  <span>{item.views} views • {item.inquiries} chats</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to={`/product/${item.id}`}
                  className="px-3.5 py-2 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl border border-black transition-colors"
                >
                  View
                </Link>
                {item.status === 'active' && (
                  <button
                    onClick={() => alert(`Marked ${item.name} as sold!`)}
                    className="px-3.5 py-2 text-xs font-bold text-white bg-slate-950 hover:bg-black rounded-xl border border-black transition-colors"
                  >
                    Mark Sold
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyListingsPage;
