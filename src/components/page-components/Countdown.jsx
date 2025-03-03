import React, { useState } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";

function Countdown() {
  const [isExpired, setIsExpired] = useState(false);

  const eventDate = new Date(2025, 2, 13, 0, 0, 0); 

  const eventDateString = eventDate.toISOString().split(".")[0] + "Z"; // Preserve exact time

  if (isExpired) {
    return null;
  }

  return (
    <div className="h-[10vh] md:h-[45vh] bg-cover flex justify-center items-center">
      <div
        className="font-bold text-3xl text-dark tracking-widest text-center"
        style={{ fontFamily: "'Red Hat Text', sans-serif" }}
      >
        <div className="flex space-x-2">
          <FlipCountdown
            hideYear
            hideMonth
            theme="light"
            size="large"
            titlePosition="bottom"
            endAt={eventDateString} // Fixed time format
            dayTitle="DAYS"
            hourTitle="HOURS"
            minuteTitle="MINUTES"
            secondTitle="SECONDS"
            onTimeUp={() => setIsExpired(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default Countdown;
