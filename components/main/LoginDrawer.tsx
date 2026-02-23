"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, UserRound } from "lucide-react";

export default function LoginDrawer({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="relative">
          {/* Backdrop - Added unique key for AnimatePresence */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />

          {/* Sidebar Drawer - Added unique key and cross-browser scroll hiding */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-white z-50 shadow-2xl p-8 flex flex-col overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-semibold text-gray-800">Sign in</h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex cursor-pointer items-center text-sm text-gray-500 hover:text-black transition-colors"
              >
                <X size={18} className="mr-1" /> Close
              </button>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username or email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full text-black border border-gray-200 p-3 outline-none focus:border-gray-400 transition-colors"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  className="w-full text-black border border-gray-200 p-3 outline-none focus:border-gray-400 transition-colors"
                />
                <button 
                    type="button" 
                    className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600"
                >
                  <Eye size={18} />
                </button>
              </div>

              <button className="w-full bg-[#1e735e] text-white font-bold py-4 uppercase tracking-widest hover:bg-[#165a4a] transition-colors">
                Log In
              </button>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center text-gray-600 cursor-pointer">
                  <input type="checkbox" className="mr-2 border-gray-300" />
                  Remember me
                </label>
                <a href="#" className="text-[#1e735e] hover:underline">
                  Lost your password?
                </a>
              </div>
            </form>

            {/* Footer Section */}
            <div className="mt-auto pt-10 border-t border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <div className="text-[#f1f1f1] p-4 inline-block">
                   <UserRound size={80} />
                </div>
              </div>
              <p className="text-gray-900 font-bold mb-4">No account yet?</p>
              <a
                href="#"
                className="inline-block text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 text-black hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Create an account
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}