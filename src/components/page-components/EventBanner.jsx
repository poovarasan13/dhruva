import React from "react";
import { motion } from "framer-motion";
import "../../assets/fonts/dmsans.css";
import "../../assets/fonts/dmserif.css";
import { Clock, Locate, Map, MapPin, Rocket } from "lucide-react";
import Button from "./Button";

function EventBanner({
  venue,
  date,
  title,
  subtitle,
  description,
  buttonText,
  bgColor,
  textColor,
  highlightColor,
}) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      className="relative z-30 py-12 text-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="uppercase text-xl font-semibold text-cp tracking-wider mb-2"
        >
          {subtitle}
        </motion.h2>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl powergrok font-light  mb-4"
          style={{ color: textColor }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg mb-8 work-sans"
          style={{ color: textColor }}
        >
          {description}
        </motion.p>

        {/* ✅ Fixed Button - Removed motion.button
        <div className="flex items-center justify-center">
          <Button link="/registration" text={buttonText} />
        </div> */}

        {/* Venue and Date */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8"
        >
          <div className={`flex items-center`} style={{ color: textColor }}>
            <MapPin className="text-red-500" />
            <span className="text-lg work-sans"> {venue}</span>
          </div>

          <div className={`flex`} style={{ color: textColor }}>
            <Clock className="text-green-700" />
            <span className="text-lg  work-sans">{date}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default EventBanner;
