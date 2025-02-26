import React from "react";
import { motion } from "framer-motion";
import { Check, RocketIcon } from "lucide-react";
import { Button } from "../ui/button";
import "../../assets/style/AnimatedCard.css";
import "../../assets/fonts/opensans.css";
import "../../assets/fonts/dmsans.css";

const AnimatedCard = ({ passDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex justify-center mb-5 sm:mb-3 px-4 sm:px-6 lg:px-8"
    >
      <div className="card w-full max-w-[300px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] xl:max-w-[380px] relative z-10">
        <div className="bg p-6 rounded-lg hover:text-black shadow-md flex flex-col h-full">
          <div>
            <h3 className="text-center text-2xl sm:text-3xl md:text-[32px] powergrok font-semibold text-black">
              {passDetails.title}
            </h3>
            <p className="text-xl sm:text-2xl md:text-[28px] text-center font-medium mt-2 md:mt-3">
              {passDetails.price}
            </p>
          </div>

          <ul className="mt-4 space-y-3 text-sm sm:text-base md:text-lg text-black flex-grow">
            {passDetails.benefits.map((benefit, index) => (
              <li key={index}>
                <span className="flex items-center gap-2 sm:gap-3">
                  <Check className="flex-shrink-0 text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-left text-sm sm:text-md">
                    {benefit}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mb-2">
            <Button
              className="text-white hover:text-black px-6 py-2 font-medium rounded-full hover:scale-105 transition-all flex items-center gap-2 text-sm sm:text-base md:text-lg"
              style={{
                backgroundColor: passDetails.color,
                hover: { backgroundColor: passDetails.color },
              }}
            >
              Visit <RocketIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>

        {/* Blob background element */}
        <div
          className="blob absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-52 z-0"
          style={{
            backgroundColor: passDetails.color,
            boxShadow: `0 0 40px 20px ${passDetails.color}`,
            filter: `blur(12px) drop-shadow(0 0 20px ${passDetails.color})`,
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
