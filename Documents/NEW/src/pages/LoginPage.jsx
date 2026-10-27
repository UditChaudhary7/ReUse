import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Campus Single Sign-On</span>
          </div>
          <h1 className="text-2xl font-black text-slate-950 tracking-tight">
            Welcome Back to ReUse
          </h1>
          <p className="text-xs text-slate-600 font-medium">
            Sign in with your verified campus email to browse and chat.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 bg-emerald-50 border border-black rounded-2xl text-center space-y-2 text-slate-950"
          >
            <Sparkles className="w-8 h-8 mx-auto text-emerald-600" />
            <h3 className="text-base font-bold">Signed in as {email || 'student@university.edu'}</h3>
            <p className="text-xs text-slate-600 font-medium">
              Welcome back to your campus peer network!
            </p>
            <Link
              to="/marketplace"
              className="inline-block mt-3 px-5 py-2.5 bg-slate-950 text-white text-xs font-bold rounded-xl border border-black hover:bg-black transition"
            >
              Browse Marketplace &rarr;
            </Link>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Campus Email (.edu)
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="yourname@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-black rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-800">
                  Password
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to campus email!'); }} className="text-xs text-emerald-700 font-bold hover:underline">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-black rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-slate-950 hover:bg-black text-white font-bold text-sm rounded-xl border border-black shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-60"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In with Campus ID</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        )}

        <div className="mt-6 text-center text-xs text-slate-600 font-medium pt-4 border-t border-slate-200">
          New to campus?{' '}
          <Link to="/register" className="text-slate-950 hover:underline font-black">
            Create an account in 30s
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
