import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: 'State University',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-md mx-auto py-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/98 backdrop-blur-md rounded-3xl border border-black p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-slate-950 text-xs font-bold border border-black">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Campus Student Registration</span>
          </div>
          <h1 className="text-2xl font-black text-slate-950 tracking-tight">
            Join Campus ReUse
          </h1>
          <p className="text-xs text-slate-600 font-medium">
            Save money on books, dorm essentials, and electronics with fellow students.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 bg-emerald-50 border border-black rounded-2xl text-center space-y-2 text-slate-950"
          >
            <Sparkles className="w-8 h-8 mx-auto text-emerald-600" />
            <h3 className="text-base font-bold">Welcome, {formData.name || 'Student'}!</h3>
            <p className="text-xs text-slate-600 font-medium">
              We&apos;ve sent a verification link to {formData.email || 'your campus email'}.
            </p>
            <Link
              to="/marketplace"
              className="inline-block mt-3 px-5 py-2.5 bg-slate-950 text-white text-xs font-bold rounded-xl border border-black hover:bg-black transition"
            >
              Start Browsing Deals &rarr;
            </Link>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-black rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                University Email (.edu required)
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-black rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Create Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-black rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 bg-slate-950 hover:bg-black text-white font-bold text-sm rounded-xl border border-black shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-60"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Create Free Student Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        )}

        <div className="mt-6 text-center text-xs text-slate-600 font-medium pt-4 border-t border-slate-200">
          Already registered?{' '}
          <Link to="/login" className="text-slate-950 hover:underline font-black">
            Sign in here
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
