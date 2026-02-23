"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";

export default function SearchDrawer({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="search-overlay"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-white z-[100] flex flex-col items-center p-6 sm:p-12 overflow-y-auto no-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute cursor-pointer top-6 right-6 sm:top-10 sm:right-10 text-gray-800 hover:rotate-90 transition-transform duration-200"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* Search Content */}
          <div className="w-full max-w-4xl mt-20 flex flex-col items-center">
            <div className="relative w-full border-b-2 border-gray-200 pb-4 flex items-center group focus-within:border-black transition-colors">
              <input
                autoFocus
                type="text"
                placeholder="Search for products"
                className="w-full text-3xl sm:text-5xl font-semibold text-gray-800 placeholder-gray-300 outline-none bg-transparent text-center"
              />
              <span className="absolute right-0 text-gray-400">
                <Search size={28} />
              </span>
            </div>
            
            <p className="mt-8 text-gray-500 text-sm sm:text-base tracking-wide">
              Start typing to see products you are looking for.
            </p>
          </div>

          {/* Inline Styles for Cross-Browser Scrollbar Hiding */}
          <style jsx global>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none; /* IE/Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}