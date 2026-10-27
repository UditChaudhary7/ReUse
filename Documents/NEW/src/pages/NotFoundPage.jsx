import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="max-w-md mx-auto text-center py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/98 backdrop-blur-md rounded-3xl border border-black p-8 shadow-xl space-y-4"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-slate-950 border border-black flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 text-emerald-700" />
        </div>
        <div className="text-4xl font-black text-slate-950">404</div>
        <h1 className="text-xl font-black text-slate-950">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          The campus listing or page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-2">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-slate-950 rounded-xl border border-black hover:bg-black shadow-sm transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
