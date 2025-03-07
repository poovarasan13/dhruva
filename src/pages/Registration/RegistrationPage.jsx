import React, { useEffect } from "react";
import "../../assets/fonts/dmsans.css";
import Registration from '../../assets/visualassets/Registration.js';
import { DemoCard } from "@/components/page-components/DemoCard";

const cards = [
  {
    title: "Technical Fest",
    description: "Explore the latest trends in cybersecurity and ethical hacking.",
    imageUrl: Registration.Technical,
    link: "",
  },
  {
    title: "Cultural Fest",
    description: "An innovative event showcasing AI-powered solutions.",
    imageUrl: Registration.Cultural,
    link: "",
  },
  {
    title: "Sports Meet",
    description: "Learn about decentralized technologies shaping the future.",
    imageUrl: Registration.Sports,
    link: "",
  },
];

function RegistrationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen pt-20 pb-16 px-4">
      <div className="text-center max-w-6xl  my-5 md:my-10">
        <h1 className=" text-2xl md:text-4xl font-bolder text-blue-600 dm-sans">Welcome to Dhruva 2025!</h1>
        <p className="text-gray-800 text-md mt-2">
        Join us for an electrifying <b>Tech, Cultural, and Sports Fest</b> filled with
        <b> competitions, performances, and endless fun!</b>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl place-items-center">
        {cards.map((card, index) => (
          <div key={index} className="w-full max-w-xs"> 
            <DemoCard title={card.title} description={card.description} imageUrl={card.imageUrl} link={card.link} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegistrationPage;
