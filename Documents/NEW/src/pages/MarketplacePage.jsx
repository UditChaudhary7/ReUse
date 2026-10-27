import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Heart, 
  Sparkles, 
  ArrowUpDown, 
  X, 
  Eye 
} from 'lucide-react';
import { MOCK_ITEMS } from '../data/mockItems';
import { CATEGORIES } from '../data/categories';

const MarketplacePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [sortBy, setSortBy] = useState('newest');
  const [savedItems, setSavedItems] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(null);

  const toggleSave = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems = useMemo(() => {
    return MOCK_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.categoryId === activeCategory;
      const matchesSearch =
        searchTerm === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [activeCategory, searchTerm, sortBy]);

  const allCategoryPills = [
    { id: 'all', shortName: 'All Listings' },
    ...CATEGORIES,
  ];

  return (
    <div className="space-y-8">
      {/* Header Banner Card with Thin Black Border */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-black relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Live Exchange</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Campus Marketplace
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            Browse active student listings across campus dorms, departments, and study centers. Direct meetups with 0% platform take.
          </p>
        </div>
      </div>

      {/* Interactive Controls Bar with Thin Black Borders */}
      <div className="space-y-4">
        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search items, titles, dorm locations..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-md border border-black rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-black/10 shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-900"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-black px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-900 shadow-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-700" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-bold text-slate-950 focus:outline-none cursor-pointer"
              >
                <option value="newest">Latest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Filter Pills with Thin Black Borders */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {allCategoryPills.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchParams(cat.id === 'all' ? {} : { category: cat.id });
                }}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border border-black focus:outline-none shadow-xs ${
                  isSelected
                    ? 'bg-slate-950 text-white'
                    : 'text-slate-900 bg-white/95 hover:bg-slate-100'
                }`}
              >
                <span className="relative z-10">{cat.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Listings Grid with Thin Black Borders */}
      {filteredItems.length === 0 ? (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-black p-12 text-center space-y-4 shadow-lg">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mx-auto border border-black">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-black text-slate-900">No listings match your search</h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto font-medium">
            Try adjusting your search query or picking another category to discover campus deals.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchTerm('');
            }}
            className="px-4 py-2 bg-slate-950 text-white text-xs font-bold rounded-xl border border-black hover:bg-black transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isSaved = savedItems.includes(item.id);
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white/98 backdrop-blur-md rounded-2xl border border-black shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col justify-between"
                >
                  {/* Image with Thin Black Border Bottom */}
                  <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-slate-950 border border-black shadow-xs">
                      {item.tag}
                    </span>

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

                  {/* Body */}
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

                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.seller.avatar}
                          alt={item.seller.name}
                          className="w-7 h-7 rounded-full object-cover border border-black"
                        />
                        <div>
                          <div className="text-xs font-bold text-slate-950">
                            {item.seller.name}
                          </div>
                          <div className="text-[10px] text-emerald-700 font-bold">
                            ★ {item.seller.rating}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xl font-black text-slate-950">
                          ${item.price}
                        </div>
                        <div className="text-[10px] text-slate-500 font-semibold line-through">
                          ${item.originalPrice}
                        </div>
                      </div>
                    </div>

                    {/* Quick View and Details Buttons with Thin Black Borders */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => setQuickViewItem(item)}
                        className="py-2.5 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold rounded-xl border border-black flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Quick View
                      </button>
                      <Link
                        to={`/product/${item.id}`}
                        className="py-2.5 bg-slate-950 hover:bg-black text-white text-xs font-bold rounded-xl text-center border border-black transition-colors shadow-2xs"
                      >
                        View & Buy
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Quick View Modal with Thin Black Border */}
      <AnimatePresence>
        {quickViewItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', stiffness: 320, damping: 25 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-black relative"
            >
              <button
                onClick={() => setQuickViewItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full border border-white/40 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-56 bg-slate-100 relative border-b border-black">
                <img
                  src={quickViewItem.image}
                  alt={quickViewItem.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950 text-white px-2.5 py-0.5 rounded-md text-xs font-bold border border-black">
                  {quickViewItem.condition}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase">
                      {quickViewItem.tag}
                    </span>
                    <h3 className="text-lg font-black text-slate-950">
                      {quickViewItem.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-black text-slate-950">
                      ${quickViewItem.price}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold line-through">
                      ${quickViewItem.originalPrice} retail
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {quickViewItem.description}
                </p>

                <div className="p-3.5 bg-slate-50 border border-black rounded-xl space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-medium">Campus Pickup Spot:</span>
                    <span className="font-bold text-slate-950 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      {quickViewItem.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-medium">Seller:</span>
                    <span className="font-bold text-slate-950">
                      {quickViewItem.seller.name} ({quickViewItem.seller.year})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setQuickViewItem(null)}
                    className="flex-1 py-2.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl border border-black transition-colors"
                  >
                    Close Preview
                  </button>
                  <Link
                    to={`/product/${quickViewItem.id}`}
                    className="flex-1 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-black rounded-xl border border-black text-center transition-colors"
                  >
                    Full Listing Page &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MarketplacePage;
