import { useNavigate } from "react-router-dom";

export function DemoCard({ title, description, imageUrl, link }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <div className="w-full max-w-sm sm:max-w-xs">
      <div className="group w-full cursor-pointer bg-black overflow-hidden relative h-80 md:h-72 lg:h-96 rounded-xl shadow-xl mx-auto flex flex-col p-4 border border-2 transition-all duration-500">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 text-center p-4 flex flex-col justify-between h-full">
          <div>
            <h1 className="font-bold text-2xl md:text-2xl lg:text-3xl text-white">
              {title}
            </h1>
          </div>
          
          {/* Button Container */}
          <div className="mt-auto relative z-10">
            <button
              onClick={handleNavigation}
              className="h-12 w-full animate-shimmer items-center justify-center rounded-full border border-sky-800 bg-[linear-gradient(110deg,#0284c7,45%,#0ea5e9,55%,#0284c7)] bg-[length:200%_100%] px-2 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-sky-50"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DemoGrid({ cards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 justify-center place-items-center">
      {cards.map((card, index) => (
        <DemoCard
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          link={card.link}
        />
      ))}
    </div>
  );
}