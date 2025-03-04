import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import EventShowOff from "./EventShowOff";
import TestCard from "@/components/page-components/TestCard";
import departmentDataList from "@/data/Departments";
import "../../assets/fonts/powergrotesk.css";

function EventPage() {
  const params = useParams();
  const departmentName = params?.departmentName || "";
  const location = useLocation();
  const [departmentData, setDepartmentData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let department = location.state?.events;

    if (!department) {
      department = departmentDataList.find(
        (dept) =>
          dept.shortName?.toLowerCase() === departmentName?.toLowerCase()
      );
    }

    setDepartmentData(department || null);
  }, [departmentName, location.state]);

  if (!departmentData) {
    return (
      <div className="text-center text-red-500 text-2xl pt-20">
        Department not found!
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-30 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <motion.div
        className="my-10 container mx-auto px-4 sm:px-6 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl  tracking-wide powergrok bg-gradient-to-r text-black bg-clip-text">
          {departmentData.departmentName}
        </h1>
        <p className="mt-4 dm-sans text-lg text-justify text-gray-600 dark:text-gray-300 max-w-7xl mx-auto leading-relaxed">
          {departmentData.departmentDescription}
        </p>
      </motion.div>

      {departmentData.events && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <EventShowOff events={departmentData.events} />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <TestCard deptDetails={departmentData} />
        </div>
      </motion.div>
    </div>
  );
}

export default EventPage;
