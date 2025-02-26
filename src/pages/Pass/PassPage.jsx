import { motion } from "framer-motion";

import React, { useEffect } from "react";

import RegistrationPage from "../Registration/RegistrationPage";
import "../../assets/fonts/powergrotesk.css";
import "../../assets/fonts/dmsans.css";
import AnimatedCard from "@/components/page-components/AnimatedCard";
import passes from "../../data/passCardData.js";

const PassPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" dm-sans">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center sm:mt-24  mt-20"
      >
        <h1 className="text-5xl powergrok  tracking-wide">Exclusive Passes</h1>
        <p className="text-gray-800 text-lg mt-2">
          Unlock premium content with our exclusive memberships
        </p>
      </motion.div>

      <div className="flex flex-col items-center  mt-2  px-6  mb-6">
        <div className="flex flex-wrap justify-center gap-12 mt-20 ms-4 relative z-10">
          {passes.map((pass, index) => (
            <>
              <AnimatedCard passDetails={pass} key={index} />
            </>
          ))}
        </div>
      </div>
      {/* <RegistrationPage /> */}
    </div>
  );
};

export default PassPage;
