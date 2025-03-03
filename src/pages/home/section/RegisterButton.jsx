import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterButton = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/registration');
  };

  return (
    <div className="flex justify-center lg:justify-center mb-2 md:mb-0">
      <motion.button
        onClick={handleRegister}
        initial={{ opacity: 0, scale: 0.5, y: 30 }} // Animation on mount
        animate={{ opacity: 1, scale: 1, y: 0 }} // Animate to normal state
        transition={{ type: "spring", stiffness: 120, damping: 10, duration: 0.6 }}
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-40 sm:w-50 md:w-50 lg:w-60 h-12 sm:h-14 md:h-14 flex items-center justify-center rounded-full border-2 border-sky-600 px-8 font-bold text-white text-xl md:text-2xl lg:text-3xl 
        bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 bg-[length:200%_100%] animate-shimmer
        transition-all duration-500 ease-in-out hover:shadow-[0_0_20px_#0ea5e9] hover:border-white"
      >
        <span className="relative z-10">Register</span>
        <div className="absolute inset-0 bg-[radial-gradient(circle,#0ea5e9,transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
      </motion.button>
    </div>
  );
};

export default RegisterButton;
