import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

export function DemoCard({ title, description, imageUrl, link }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (!link) {
      Swal.fire({
        title: "Stay Tuned!",
        html: `<p style="font-weight:normal" st>Registration will open soon. For further details  <br> <br>
               Contact :<a href="tel:9385581203" >+91 93855 81203</a></p>`,
        confirmButtonColor: "green",
        confirmButtonText: "Ok",
      });
      
      return;
    }

    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm sm:max-w-xs">
        <div className="group w-full cursor-pointer bg-black overflow-hidden relative h-80 md:h-72 lg:h-96 rounded-xl shadow-xl mx-auto flex flex-col p-4 border border-2 transition-all duration-500">
        
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>

          <div className="relative z-10 text-center p-4 flex flex-col justify-between h-full">
            <div>
              <h1 className="font-bold text-2xl md:text-2xl lg:text-3xl text-white">
                {title}
              </h1>
            </div>

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
    </div>
  );
}

export default function DemoGrid({ cards }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full max-w-6xl place-items-center">
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
    </div>
  );
}
