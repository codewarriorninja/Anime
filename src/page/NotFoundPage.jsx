import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] flex flex-col justify-center items-center p-6">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-6xl font-bold text-white mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          404 - Page Not Found
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="animate-bounce" // Add the bounce animation class
        >
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
            Go back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;