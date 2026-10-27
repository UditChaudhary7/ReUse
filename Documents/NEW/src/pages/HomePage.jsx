import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Heart, 
  BookOpen, 
  Laptop, 
  Calculator, 
  Armchair, 
  Shirt, 
  Coffee,
  CheckCircle2,
  Users,
  DollarSign,
  Leaf,
  Clock,
  Star
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { MOCK_ITEMS } from '../data/mockItems';

const categoryIcons = {
  BookOpen,
  Laptop,
  Calculator,
  Armchair,
  Shirt,
  Coffee,
};

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [savedItems, setSavedItems] = useState([]);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/marketplace?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/marketplace');
    }
  };

  const toggleSave = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedItems((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    },
  };

  return (
    <div className="space-y-14 sm:space-y-20">
      {/* Hero Section with Fluid Motion and Ambient Lighting */}
      <section className="relative pt-4 pb-8 sm:pt-8 sm:pb-14">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Badge Card with Thin Black Border */}
              <motion.div 
                variants={itemVariants} 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black shadow-xs"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  Verified Campus Marketplace • 100% Free Peer-to-Peer
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]"
              >
                Buy & sell campus essentials{' '}
                <span className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-700 bg-clip-text text-transparent drop-shadow-xs">
                  smarter, faster, greener.
                </span>
              </motion.h1>

              {/* Subtitle Card / Text */}
              <motion.p 
                variants={itemVariants} 
                className="text-base sm:text-lg text-slate-800 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium bg-white/70 backdrop-blur-xs p-3 rounded-2xl border border-black/10 lg:border-none lg:bg-transparent lg:p-0"
              >
                Pass forward textbooks, TI graphing calculators, dorm furniture, and electronics to students right on your campus. Meet safely at the library, save cash, and eliminate landfill waste.
              </motion.p>

              {/* Interactive Search Bar Card with Thin Black Border */}
              <motion.div variants={itemVariants} className="pt-2">
                <form 
                  onSubmit={handleSearchSubmit}
                  className="relative flex items-center max-w-xl mx-auto lg:mx-0 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-black focus-within:ring-4 focus-within:ring-black/10 transition-all"
                >
                  <Search className="w-5 h-5 text-slate-600 ml-3 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Calculus, TI-84, mini fridge, dorm lamp..."
                    className="w-full text-sm text-slate-900 font-medium placeholder-slate-400 bg-transparent focus:outline-none"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="shrink-0 px-5 py-2.5 bg-slate-950 hover:bg-black text-white text-xs font-bold rounded-xl border border-black shadow-sm transition-all"
                  >
                    Search
                  </motion.button>
                </form>

                {/* Popular Search Quick Tags with Thin Black Border */}
                <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-xs text-slate-800 font-semibold">
                  <span className="font-bold text-slate-950">Trending:</span>
                  {['Calculus 8th Ed', 'TI-84 Plus', 'Dorm Mini Fridge', 'iPad', 'Lab Coat'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        setSearchQuery(tag);
                        navigate(`/marketplace?q=${encodeURIComponent(tag)}`);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-white/95 border border-black text-slate-900 hover:bg-black hover:text-white transition-all shadow-2xs text-[11px] font-semibold"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5"
              >
                <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/marketplace"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl border border-black shadow-md transition-colors"
                  >
                    <span>Explore Marketplace</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/sell"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-950 font-bold text-sm rounded-xl border border-black shadow-md transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Post an Item Free</span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Micro proof line with pills */}
              <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-900">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-xs rounded-full border border-black shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified .edu Only
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-xs rounded-full border border-black shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  0% Commission
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-xs rounded-full border border-black shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Direct Campus Meetup
                </span>
              </motion.div>
            </div>

            {/* Right Visual Column with Floating Motion Cards */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                className="relative mx-auto max-w-md"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Main Hero Card Preview with Thin Black Border */}
                <div className="relative bg-white/98 backdrop-blur-md rounded-3xl p-5 shadow-2xl border border-black overflow-hidden">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-slate-100 border border-black/40">
                    <img
                      src="https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=800&auto=format&fit=crop&q=80"
                      alt="Featured Student Item"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-slate-900 border border-black shadow-xs">
                      TI-84 Plus CE Color
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2.5 py-1 rounded-full text-xs font-bold border border-black shadow-xs">
                      Save 52%
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" 
                          alt="Marcus B." 
                          className="w-7 h-7 rounded-full object-cover border border-black"
                        />
                        <span className="text-xs font-bold text-slate-900">Marcus B. (Sophomore)</span>
                      </div>
                      <span className="text-xs text-slate-700 font-semibold flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-600" /> Student Union
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between pt-2 border-t border-slate-200">
                      <div>
                        <div className="text-2xl font-black text-slate-950">$65</div>
                        <span className="text-xs text-slate-500 font-medium line-through">$135 retail</span>
                      </div>
                      <Link 
                        to="/product/102"
                        className="px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-100 hover:bg-emerald-200 rounded-xl border border-black transition-colors flex items-center gap-1 shadow-2xs"
                      >
                        Inspect Listing &rarr;
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Badge 1 - Top Left with Thin Black Border */}
                <motion.div
                  className="absolute -top-5 -left-6 bg-white/98 backdrop-blur-md border border-black rounded-2xl p-3 shadow-xl flex items-center gap-3 z-20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 border border-black/30 flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-950">Calculus 8th Ed</div>
                    <div className="text-[11px] text-emerald-700 font-bold">$35 (Save $105)</div>
                  </div>
                </motion.div>

                {/* Floating Micro Badge 2 - Bottom Right with Thin Black Border */}
                <motion.div
                  className="absolute -bottom-6 -right-5 bg-white/98 backdrop-blur-md border border-black rounded-2xl p-3.5 shadow-xl flex items-center gap-3 z-20"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-700 border border-black/30 flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-950">12 Min Avg Meetup</div>
                    <div className="text-[11px] text-slate-600 font-medium">On-campus handoffs</div>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Impact Metrics Ribbon Card with Thin Black Border */}
      <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-black shadow-2xl overflow-hidden relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-3 space-y-1"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-2">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">2,850+</div>
            <div className="text-xs text-slate-300 font-semibold">Active Campus Students</div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-3 space-y-1"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center mb-2">
              <DollarSign className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">$145,000+</div>
            <div className="text-xs text-slate-300 font-semibold">Student Cash Saved</div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-3 space-y-1"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-2">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">9,200+</div>
            <div className="text-xs text-slate-300 font-semibold">Items Kept From Landfill</div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-3 space-y-1"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-2">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">4.9 / 5.0</div>
            <div className="text-xs text-slate-300 font-semibold">Student Trust Rating</div>
          </motion.div>
        </div>
      </section>

      {/* Campus Categories Section */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-slate-950 bg-white/95 px-3 py-1 rounded-full border border-black shadow-2xs">
              Browse by Department & Needs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
              Popular Campus Categories
            </h2>
          </div>
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-white/90 px-3 py-1.5 rounded-xl border border-black hover:bg-black hover:text-white transition-all shadow-2xs"
          >
            <span>View all inventory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => {
            const IconComponent = categoryIcons[cat.icon] || BookOpen;
            return (
              <motion.div
                key={cat.id}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Link
                  to={`/marketplace?category=${cat.id}`}
                  className="group flex flex-col items-center text-center p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-black shadow-sm hover:shadow-xl transition-all h-full"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cat.color} border border-black/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xs font-black text-slate-950 group-hover:text-emerald-700 transition-colors">
                    {cat.shortName}
                  </h3>
                  <span className="text-[11px] text-slate-600 mt-1 font-semibold">
                    {cat.count}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Live Student Listings Grid */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-slate-950 bg-white/95 px-3 py-1 rounded-full border border-black shadow-2xs">
              Fresh Campus Drops
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
              Trending Items Near You
            </h2>
          </div>
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-white/90 px-3 py-1.5 rounded-xl border border-black hover:bg-black hover:text-white transition-all shadow-2xs"
          >
            <span>See all listings</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_ITEMS.map((item) => {
            const isSaved = savedItems.includes(item.id);
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="group relative bg-white/98 backdrop-blur-md rounded-2xl border border-black shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Image Container with Thin Black Border bottom */}
                <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  
                  {/* Category Pill with Thin Black Border */}
                  <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-slate-950 border border-black shadow-xs">
                    {item.tag}
                  </span>

                  {/* Condition Tag */}
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold px-2 py-0.5 bg-slate-950 text-white rounded-md border border-black shadow-xs">
                    {item.condition}
                  </span>

                  {/* Bookmark Heart Button with Thin Black Border */}
                  <motion.button
                    type="button"
                    onClick={(e) => toggleSave(item.id, e)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    className={`absolute top-3 right-3 p-2 rounded-full border border-black backdrop-blur-md transition-colors ${
                      isSaved 
                        ? 'bg-rose-500 text-white' 
                        : 'bg-white/95 text-slate-700 hover:text-rose-500'
                    }`}
                    aria-label="Save listing"
                  >
                    <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-slate-700 font-semibold">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        {item.location}
                      </span>
                      <span>{item.postedAgo}</span>
                    </div>

                    <h3 className="font-extrabold text-slate-950 group-hover:text-emerald-700 transition-colors line-clamp-1 text-base">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Seller & Price Info */}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.seller.avatar}
                        alt={item.seller.name}
                        className="w-7 h-7 rounded-full object-cover border border-black"
                      />
                      <div className="text-left">
                        <div className="text-xs font-bold text-slate-950 leading-none">
                          {item.seller.name}
                        </div>
                        <div className="text-[10px] text-emerald-700 font-bold mt-0.5">
                          ★ {item.seller.rating} Verified
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xl font-black text-slate-950 leading-none">
                        ${item.price}
                      </div>
                      <div className="text-[10px] text-slate-500 font-semibold line-through">
                        ${item.originalPrice}
                      </div>
                    </div>
                  </div>

                  {/* Action Link with Thin Black Border */}
                  <Link
                    to={`/product/${item.id}`}
                    className="w-full py-2.5 bg-slate-950 hover:bg-black text-white text-xs font-bold rounded-xl text-center border border-black shadow-xs transition-colors block"
                  >
                    View Details & Contact Seller &rarr;
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How ReUse Works Interactive 3-Step Guide Card with Thin Black Border */}
      <section className="bg-white/95 backdrop-blur-md rounded-3xl border border-black p-8 sm:p-12 shadow-xl space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-100 px-3 py-1 rounded-full border border-black">
            Simple & Safe
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            How Campus ReUse Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Engineered exclusively for verified university students. No scammers, no shipping hassles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-white border border-black text-center space-y-3 shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-slate-950 border border-black flex items-center justify-center font-black text-lg mx-auto">
              1
            </div>
            <h3 className="font-bold text-slate-950">Snap & Post in 30 Seconds</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Snap a picture of your textbook or dorm gear. Set your asking price and designated campus meetup spot.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-white border border-black text-center space-y-3 shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-slate-950 border border-black flex items-center justify-center font-black text-lg mx-auto">
              2
            </div>
            <h3 className="font-bold text-slate-950">Connect with Verified Peers</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Only authenticated .edu campus members can browse and message. Chat directly without exposing private phone numbers.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-white border border-black text-center space-y-3 shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-slate-950 border border-black flex items-center justify-center font-black text-lg mx-auto">
              3
            </div>
            <h3 className="font-bold text-slate-950">Hand Off on Campus Safely</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Meet between classes at the campus library, student center, or dining hall. Instant handoff and zero fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* High Conversion Sell Banner Card with Thin Black Border */}
      <section className="relative rounded-3xl bg-slate-950 border border-black text-white p-8 sm:p-12 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Finished with your semester courses?
            </h2>
            <p className="text-sm text-slate-300 max-w-lg font-medium">
              Don&apos;t let valuable textbooks, calculators, and electronics gather dust in your dorm. List them today and get cash immediately.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0"
          >
            <Link
              to="/sell"
              className="px-6 py-3.5 bg-white text-slate-950 font-black text-sm rounded-xl border border-black shadow-lg hover:bg-slate-100 transition-colors inline-block"
            >
              + Sell An Item Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
