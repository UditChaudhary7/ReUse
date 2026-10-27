import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Share2, 
  MessageSquare, 
  Calendar, 
  CheckCircle2 
} from 'lucide-react';
import { MOCK_ITEMS } from '../data/mockItems';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);
  const [offerSent, setOfferSent] = useState(false);
  const [offerAmount, setOfferAmount] = useState('');
  const [showOfferModal, setShowOfferModal] = useState(false);

  const product = MOCK_ITEMS.find((item) => item.id === id) || {
    id: id || '101',
    name: 'College Item #' + (id || '101'),
    price: 45,
    originalPrice: 90,
    tag: 'Campus Essentials',
    condition: 'Good Condition',
    location: 'Main University Library',
    seller: {
      name: 'Campus Student',
      year: 'Junior',
      rating: 4.9,
      reviews: 12,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      verifiedEdu: true,
    },
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    description: 'This is an active item listing on the ReUse student peer-to-peer exchange network.',
    postedAgo: 'Recently',
    views: 45,
  };

  const handleSendOffer = (e) => {
    e.preventDefault();
    if (offerAmount) {
      setOfferSent(true);
      setTimeout(() => {
        setShowOfferModal(false);
        setOfferSent(false);
      }, 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Back Button with Thin Black Border */}
      <motion.div whileHover={{ x: -2 }}>
        <Link
          to="/marketplace"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-white/95 backdrop-blur-md border border-black px-4 py-2 rounded-xl shadow-xs hover:bg-black hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </Link>
      </motion.div>

      {/* Main Product Showcase Card with Thin Black Border */}
      <div className="bg-white/98 backdrop-blur-md rounded-3xl border border-black shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Image with Thin Black Border */}
          <div className="lg:col-span-7 bg-slate-50 relative p-6 sm:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-black">
            <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-black bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/95 backdrop-blur-md text-slate-950 rounded-full border border-black shadow-xs">
                {product.tag}
              </span>
              <span className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1 bg-slate-950 text-white rounded-lg border border-black">
                Condition: {product.condition}
              </span>
            </div>
          </div>

          {/* Right Column: Listing Details & Actions */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-700 font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  Listed {product.postedAgo}
                </span>

                <div className="flex items-center gap-2">
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-2 rounded-xl border border-black transition-colors ${
                      isSaved ? 'bg-rose-500 text-white' : 'bg-white text-slate-800 hover:bg-slate-100'
                    }`}
                    aria-label="Save"
                  >
                    <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  </motion.button>
                  <button
                    onClick={() => alert('Listing link copied to clipboard!')}
                    className="p-2 rounded-xl border border-black bg-white text-slate-800 hover:bg-slate-100 transition-colors"
                    aria-label="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="text-3xl font-black text-slate-950">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-500 font-semibold line-through">
                      ${product.originalPrice} retail
                    </span>
                  )}
                  <span className="text-xs font-black text-slate-950 bg-emerald-100 px-3 py-0.5 rounded-full border border-black">
                    Student Price
                  </span>
                </div>
              </div>

              {/* Campus Meetup Spot Card with Thin Black Border */}
              <div className="p-4 bg-slate-50 border border-black rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-slate-950 border border-black flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-medium">Campus Pickup Spot</div>
                  <div className="text-sm font-bold text-slate-950">{product.location}</div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-black text-slate-950 uppercase tracking-wider">
                  Item Description
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              {/* Seller Card */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3.5">
                  <img
                    src={product.seller.avatar}
                    alt={product.seller.name}
                    className="w-11 h-11 rounded-full object-cover border border-black"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-slate-950">
                        {product.seller.name}
                      </span>
                      <span className="text-[10px] bg-white text-slate-950 font-bold px-2 py-0.5 rounded-full border border-black">
                        Verified .edu
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {product.seller.year} • ★ {product.seller.rating} ({product.seller.reviews} reviews)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interaction Buttons with Thin Black Border */}
            <div className="space-y-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowOfferModal(true)}
                className="w-full py-3.5 bg-slate-950 hover:bg-black text-white font-bold text-sm rounded-xl border border-black shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message Seller / Make Offer</span>
              </motion.button>

              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Protected by ReUse Campus Student Code</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Offer Modal with Thin Black Border */}
      <AnimatePresence>
        {showOfferModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-black space-y-4"
            >
              <h3 className="text-lg font-black text-slate-950">
                Message {product.seller.name}
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Connect directly with your fellow student to arrange a campus meetup at {product.location}.
              </p>

              {offerSent ? (
                <div className="p-4 bg-emerald-50 border border-black rounded-2xl text-center space-y-1 text-slate-950">
                  <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-600" />
                  <div className="text-sm font-bold">Offer Message Sent!</div>
                  <div className="text-xs text-slate-600 font-medium">{product.seller.name} has been notified via campus email.</div>
                </div>
              ) : (
                <form onSubmit={handleSendOffer} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Offer Price ($)
                    </label>
                    <input
                      type="number"
                      required
                      placeholder={`Asking: $${product.price}`}
                      value={offerAmount}
                      onChange={(e) => setOfferAmount(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-black rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Quick Note
                    </label>
                    <textarea
                      rows={2}
                      defaultValue={`Hi ${product.seller.name}, I'm interested in this! Can we meet at ${product.location}?`}
                      className="w-full px-3.5 py-2 bg-white border border-black rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowOfferModal(false)}
                      className="flex-1 py-2.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 rounded-xl border border-black transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 text-xs font-bold text-white bg-slate-950 rounded-xl hover:bg-black border border-black transition"
                    >
                      Send Offer
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetailPage;
