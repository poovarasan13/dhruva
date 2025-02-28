import React from "react";
import "../../assets/fonts/dmsans.css";
// import Sports from "../../"
import { useEffect } from "react";
import { DemoCard } from "@/components/page-components/DemoCard";
const cards = [
  {
    title: "Techincal Fest",
    description: "Explore the latest trends in cybersecurity and ethical hacking.",
    imageUrl:"https://res.cloudinary.com/dzpkbej9y/image/upload/v1740573201/Technical_k4ly6w.avif",
    link:"",
      // "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    // hoverImageUrl:Gif2
      // "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
  {
    title: "Cultural Fest",
    description: "An innovative event showcasing AI-powered solutions.",
    imageUrl:"https://res.cloudinary.com/dzpkbej9y/image/upload/v1740574213/xdmkkb7pethrxqukopwu_umlfue.avif",
    link:"",
      // "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    // hoverImageUrl:Gif1,
      // "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },

  {
    title: "Sports Meet",
    description: "Learn about decentralized technologies shaping the future.",
    imageUrl:"https://res.cloudinary.com/dzpkbej9y/image/upload/v1740572480/Football_ny1tr2.avif",
    link:"",
      // "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    // hoverImageUrl:
    //   "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
];

function RegistrationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 md:pt-0 pb-16 lg:pb-0">
      <div className="grid grid-cols-1 md:pt-20 md:mt-16  md:pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-4 w-full max-w-6xl mx-auto place-content-center">
        {cards.map((card, index) => (
          <div key={index} className="w-full  max-w-xs"> 
            <DemoCard
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              link={card.link}
            />
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegistrationPage;
