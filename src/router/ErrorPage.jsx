import React from "react";
import "../assets/fonts/allfonts.css";
import "../assets/fonts/dmsans.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import { frame } from "framer-motion";

const Error = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <section className="relative py-20 w-30 bg-orange-300 bg-gradient-to-t from-sky-400  to-sky-300  ">
        <div className="container mx-auto">
          <div className="">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <motion.div
                  animate={{ rotate: "360deg" }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "center" }}
                >
                  <img
                    src="https://res.cloudinary.com/dzpkbej9y/image/upload/v1739938582/DhruvaStar_pcey3p.png"
                    className=" w-96 "
                  />
                </motion.div>
                <h2 className=" text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] dm-sans font-semibold leading-tight text-white">
                  Oops! That page can’t be found
                </h4>
                <p className="mb-8 text-lg dm-sans text-white">
                  The page you are looking for it maybe deleted
                </p>
                <button
                  onClick={handleNavigate}
                  className="bg-white px-6 hover:scale-105 transition-transform focus:outline-2 focus:border-spacing-4 hover:border-2 hover:border-black   py-2 rounded-full work-sans text-xl "
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-sky-700 to-sky-300"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-sky-700 to-sky-300"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-sky-700 to-sky-300"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-sky-700 to-sky-300"></div>
        </div>
      </section>
    </>
  );
};

export default Error;
