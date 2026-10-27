import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, ShieldCheck, Leaf } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white/95 backdrop-blur-md border-t border-black mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <Recycle className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                ReUse Campus
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              The sustainable peer-to-peer campus marketplace designed exclusively for students to buy, sell, and circulate college essentials without waste or fees.
            </p>
            <div className="flex items-center gap-4 text-xs text-emerald-700 font-semibold pt-1">
              <span className="flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5" /> 100% Circular Campus
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> .edu Authenticated
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Marketplace
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/marketplace" className="hover:text-emerald-600 transition-colors">
                  All Campus Listings
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=books" className="hover:text-emerald-600 transition-colors">
                  Course Textbooks
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=calculators" className="hover:text-emerald-600 transition-colors">
                  STEM & Calculators
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=electronics" className="hover:text-emerald-600 transition-colors">
                  Laptops & Gadgets
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-emerald-600 font-semibold hover:underline">
                  + Sell Your Gear Free
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Campus Safety
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>Verified .edu Student ID</li>
              <li>Campus Library Meetup Spots</li>
              <li>Zero Platform Commission</li>
              <li>Anti-Scam Protection Code</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {CURRENT_YEAR} ReUse Campus Marketplace. Built for university communities.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Made with sustainable motion</span>
            <Recycle className="w-3 h-3 text-emerald-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
