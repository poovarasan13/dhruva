import React, { useEffect } from "react";
import RulesAndRegulation from "./section/RulesAndRegulation";
import HeroSection from "./section/HeroSection";
import Banners from "@/components/page-components/Banners";
import Sponsors from "../home/section/Sponsors";

function CulturalFestPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <RulesAndRegulation />
      <Sponsors/>
      <Banners />
    </div>
  );
}

export default CulturalFestPage;
