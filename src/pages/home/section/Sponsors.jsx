import React from "react";
import Home from "../../../assets/visualassets/Home.js"

const sponsorImages = [
  { id: 1, src: Home.Sponsers.Sk, alt: "Sponsor 1" },
];

const Sponsors = () => {
  return (
    <div className="bg-white  py-5 text-center">
      <h2 className="text-center text-5xl my-4 powergrok tracking-wider">
       Our Sponsors
      </h2>
      <div className="flex justify-center gap-6 mt-6">
        {sponsorImages.map((image) => (
          <div
            key={image.id}
            className="w-32 h-32 bg-white rounded-xl flex justify-center items-center overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
