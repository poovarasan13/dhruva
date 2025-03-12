import ConcertEvent from "@/components/page-components/ConcertEvent";
import "../../assets/fonts/josefin.css";
import React, { useEffect } from "react";
import "../../assets/fonts/pacifico.css";
import "../../assets/fonts/righteous.css";
import Musicalconcert from "@/components/page-components/Musicalconcert";
import "../../assets/fonts/madimi.css";
import Sponors from "@/components/page-components/Sponsors";
import Banners from "@/components/page-components/Banners";
import Sponsors from "../home/section/Sponsors";
const LiveinConcert = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-20">
      <ConcertEvent />
      <Musicalconcert />
      <Sponsors/>
      <Banners/>
    </div>
  );
};

export default LiveinConcert;
