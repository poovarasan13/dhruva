import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import stargif from "../../../assets/gif/star.gif";

const sparkVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  explode: {
    opacity: [1, 0.8, 0],
    scale: [1, 1.5, 2],
    transition: { duration: 1, ease: "easeOut" },
  },
};

const RegisterButton = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/registration");
  };

  return (
    <div className="relative flex justify-center lg:justify-center mb-2 md:mb-0">
      {/* Fireworks Effect */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-4 h-4 bg-blue-400 rounded-full"
          initial="hidden"
          animate="explode"
          variants={sparkVariants}
          style={{
            top: `${Math.random() * 100 - 50}%`,
            left: `${Math.random() * 100 - 50}%`,
          }}
        />
      ))}
      
      {/* Button */}
      <motion.button
        onClick={handleRegister}
        initial={{ opacity: 0, scale: 0.5, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, duration: 0.6 }}
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-60 sm:w-60 md:w-80 lg:w-96 h-16 sm:h-16 md:h-24 flex items-center justify-center rounded-full border-2 border-sky-600 px-8 font-bold text-white text-xl md:text-2xl lg:text-3xl
        transition-all duration-500 ease-in-out hover:shadow-[0_0_20px_#0ea5e9] hover:border-white"
        style={{
          backgroundImage: `url(${stargif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="relative z-10 text-2xl md:text-4xl">Register Now</span>
      </motion.button>
    </div>
  );
};

export default RegisterButton;