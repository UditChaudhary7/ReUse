import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  DollarSign, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';

const SellPage = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'books',
    price: '',
    condition: 'Like New',
    location: 'Campus Library',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Title Card with Thin Black Border */}
      <div className="bg-white/98 backdrop-blur-md rounded-3xl border border-black p-8 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-950 bg-emerald-100 px-3 py-1 rounded-full border border-black">
            List An Item
          </span>
          <span className="text-xs font-bold text-slate-700">
            Step {step} of 3
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2">
          Turn your course gear into cash
        </h1>
        <p className="text-xs sm:text-sm text-slate-700 font-medium">
          List books, electronics, calculators, or dorm gear. Zero fees, 100% campus peer-to-peer.
        </p>

        {/* Step Indicator */}
        <div className="grid grid-cols-3 gap-2 mt-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full border border-black/40 transition-all duration-300 ${
                s <= step ? 'bg-slate-950' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Form Box with Thin Black Border */}
      <div className="bg-white/98 backdrop-blur-md rounded-3xl border border-black p-8 shadow-xl relative overflow-hidden">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10 space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-slate-950 border border-black flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-black text-slate-950">
              Listing Created Successfully!
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-medium max-w-md mx-auto">
              Your item is now live on the ReUse Campus Marketplace. Fellow students can browse and send you direct messages.
            </p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFormData({
                    title: '',
                    category: 'books',
                    price: '',
                    condition: 'Like New',
                    location: 'Campus Library',
                    description: '',
                  });
                }}
                className="px-5 py-2.5 bg-slate-950 hover:bg-black text-white text-xs font-bold rounded-xl border border-black transition"
              >
                List Another Item
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-base font-black text-slate-950">
                    Step 1: Item Details
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Listing Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Calculus: Early Transcendentals (8th Ed)"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-black rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-black rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Item Condition
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['Brand New', 'Like New', 'Good', 'Fair'].map((cond) => (
                        <button
                          type="button"
                          key={cond}
                          onClick={() => setFormData({ ...formData, condition: cond })}
                          className={`py-2 text-xs font-bold rounded-xl border border-black transition-all ${
                            formData.condition === cond
                              ? 'bg-slate-950 text-white shadow-xs'
                              : 'bg-white text-slate-800 hover:bg-slate-100'
                          }`}
                        >
                          {cond}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      disabled={!formData.title.trim()}
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 bg-slate-950 hover:bg-black text-white text-xs font-bold rounded-xl border border-black flex items-center gap-1.5 disabled:opacity-50"
                    >
                      <span>Next: Photos & Description</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-base font-black text-slate-950">
                    Step 2: Photos & Description
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Photo Upload
                    </label>
                    <div className="border-2 border-dashed border-black hover:bg-slate-50 bg-white rounded-2xl p-6 text-center cursor-pointer transition-colors space-y-2">
                      <Camera className="w-8 h-8 text-slate-700 mx-auto" />
                      <div className="text-xs font-bold text-slate-950">
                        Click or drag campus photo here
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        High quality photos sell up to 4x faster on campus
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Description & Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Include edition, course number (e.g. CS101, MATH200), accessories included, or notes..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-black rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 rounded-xl border border-black"
                    >
                      &larr; Back
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-2.5 bg-slate-950 hover:bg-black text-white text-xs font-bold rounded-xl border border-black flex items-center gap-1.5"
                    >
                      <span>Next: Price & Campus Spot</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-base font-black text-slate-950">
                    Step 3: Price & Campus Meetup Spot
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Asking Price ($) *
                    </label>
                    <div className="relative">
                      <DollarSign className="w-4 h-4 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="number"
                        required
                        placeholder="e.g. 35"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-black rounded-xl text-sm font-bold text-slate-950 focus:outline-none focus:ring-2 focus:ring-black/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Preferred Meetup Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-black rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                    >
                      <option value="Campus Library">North Campus Library (Lobby)</option>
                      <option value="Student Union Hub">Student Union & Dining Hall</option>
                      <option value="Engineering Quad">Engineering Building Atrium</option>
                      <option value="West Hall Dorms">West Residence Hall Front Desk</option>
                      <option value="Campus Recreation">Recreation & Fitness Center</option>
                    </select>
                  </div>

                  <div className="p-4 bg-white border border-black rounded-2xl flex items-start gap-3 shadow-2xs">
                    <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-800 leading-relaxed font-medium">
                      <strong className="text-slate-950">Campus Guarantee:</strong> You keep 100% of your earnings. No listing fees, no deductions.
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 rounded-xl border border-black"
                    >
                      &larr; Back
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={!formData.price}
                      className="px-6 py-2.5 bg-slate-950 hover:bg-black text-white text-xs font-bold rounded-xl border border-black shadow-md disabled:opacity-50"
                    >
                      Publish Listing Now
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        )}
      </div>
    </div>
  );
};

export default SellPage;
