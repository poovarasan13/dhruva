import React from "react";
import EventsDisplay from "./EventsDisplay";
import ExploreEvents from "./ExploreEvents";
import HeroPage from "./HeroPage";
import onstage from "@/assets/images/OnStage/onstage";
import CulturalFest from '../../assets/visualassets/CulturalFest.js';

const OnStage = () => {
  const document = {
    OnStage: true,
    title: "On-Stage Events",
    tagline: "To Bring Out the Beast in You",
  };

  const EventData = [
    { id: 1, title: "Solo Singing", image: CulturalFest.onstage.SoloSinging },
    { id: 2, title: "Solo Dancing", image: CulturalFest.onstage.SoloDance},
    { id: 3, title: "Group Dance", image: CulturalFest.onstage.GroupDance },
    { id: 4, title: "Instrumentals", image: CulturalFest.onstage.Drumbs },
    { id: 5, title: "Adapt Tune", image: CulturalFest.onstage.AdaptTune },
    { id: 6, title: "Stand Up", image: CulturalFest.onstage.standupcomedy},
    { id: 7, title: "Skit Mime", image: CulturalFest.onstage.Mime },
    { id: 8, title: "Ethnic Walk", image: CulturalFest.onstage.EthnicWalk },
    { id: 9, title: "Vj/Rj  Hunt", image: CulturalFest.onstage.vjrj },
    { id: 10, title: "Variety Event", image: onstage.Variety },
  ];

  return (
    <div>
      <HeroPage {...document} />
      <ExploreEvents EventData={EventData} />
      {/* <EventsDisplay /> */}
    </div>
  );
};

// export default StageEvents;
export default OnStage;
