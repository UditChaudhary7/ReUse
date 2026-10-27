import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Recycle, 
  PlusCircle, 
  LogIn, 
  UserPlus, 
  Menu, 
  X 
} from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'My Listings', path: '/my-listings' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all">
      {/* Full width container to keep logo at extreme left */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand - Placed at EXTREME LEFT */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="ReUse Campus Home"
            >
              {/* Animated Motion Logo Icon */}
              <motion.div 
                className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-md shadow-emerald-500/25 overflow-hidden"
                whileHover={{ rotate: 180, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <Recycle className="w-5 h-5 text-white stroke-[2.2]" />
                <motion.div 
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <motion.span 
                    className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    ReUse
                  </motion.span>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 text-emerald-800 bg-emerald-100/80 border border-emerald-200/60 rounded-full shadow-xs">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    Campus
                  </span>
                </div>
                <span className="text-[10px] text-slate-600 font-medium tracking-tight -mt-1 hidden sm:block">
                  Student Second-Hand Network
                </span>
              </div>
            </Link>
          </div>

          {/* Center Navigation Links with Smooth Animated Pill */}
          <nav className="hidden md:flex items-center space-x-1 relative px-3 py-1 bg-slate-100/70 border border-slate-200/50 rounded-full">
            {navLinks.map((link) => {
              const isActive = link.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 z-10 ${
                    isActive 
                      ? 'text-emerald-700' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-xs border border-emerald-100"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action / Auth Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Quick Sell CTA with Motion */}
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <NavLink
                to="/sell"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg shadow-sm shadow-emerald-600/30 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              >
                <PlusCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Sell Item</span>
              </NavLink>
            </motion.div>

            <div className="h-4 w-px bg-slate-200" />

            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
              <NavLink
                to="/login"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-100/80 rounded-lg transition-colors"
              >
                <LogIn className="w-3.5 h-3.5 text-slate-600" />
                <span>Login</span>
              </NavLink>
            </motion.div>

            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
              <NavLink
                to="/register"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/80 rounded-lg transition-colors"
              >
                <UserPlus className="w-3.5 h-3.5 text-emerald-600" />
                <span>Register</span>
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/sell"
              className="p-1.5 text-white bg-emerald-600 rounded-lg text-xs font-medium flex items-center justify-center"
              aria-label="Sell Item"
            >
              <PlusCircle className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Animated Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-2 overflow-hidden shadow-lg"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-sm font-medium ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
              <NavLink
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-center text-xs font-medium text-slate-700 bg-slate-100 rounded-lg"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-center text-xs font-medium text-white bg-emerald-600 rounded-lg"
              >
                Register
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
