import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Calendar, LaptopMinimal, Rocket, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useNavigate } from "react-router-dom";
import "../../assets/fonts/powergrotesk.css";

function DepartmentCard({ events }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/departmentInfo`, { state: { events } });
  };

  const renderEventCount = (count, label, icon, bgClass, textClass) =>
    count > 0 && (
      <div className="flex items-center gap-3 sm:gap-4">
        <div className={`p-2 rounded-full ${bgClass}`}>
          {React.cloneElement(icon, {
            className: `w-4 h-4 sm:w-5 sm:h-5 ${textClass}`,
          })}
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          {count} {label}
        </p>
      </div>
    );

  return (
    <div className="relative group hover:scale-105 transition-transform duration-300 w-full max-w-sm sm:max-w-md mx-auto">
      <Card className="relative w-full h-full border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg rounded-lg transition-all">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-md sm:text-xl powergrok text-black dark:text-white">
              {events.cardName}
            </h2>
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
              <LaptopMinimal className="w-5 h-5 text-blue-600 dark:text-blue-300" />
            </div>
          </div>
        </CardHeader>

        <Separator className="bg-gray-100 dark:bg-gray-700" />

        <CardContent className="p-4 sm:p-6 text-sm sm:text-lg">
          <div className="space-y-3 sm:space-y-4">
            {renderEventCount(
              events.workshop,
              "Workshop",
              <Settings />,
              "bg-blue-100 dark:bg-blue-900",
              "text-blue-600 dark:text-blue-300"
            )}
            {renderEventCount(
              events.technicalEventCount,
              "Technical Events",
              <LaptopMinimal />,
              "bg-purple-100 dark:bg-purple-900",
              "text-purple-600 dark:text-purple-300"
            )}
            {renderEventCount(
              events.nonTechnicalEventCount,
              "Non-Technical Events",
              <Calendar />,
              "bg-orange-100 dark:bg-orange-900",
              "text-orange-600 dark:text-orange-300"
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-center mt-auto p-4 sm:p-6">
          <Button
            className="bg-sky-400 w-40 hover:bg-sky-400 dm-sans hover:text-black shadow-lg text-white text-lg rounded-full shadow-md hover:shadow-xl"
            onClick={handleNavigation}
          >
            Explore <Rocket className="ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DepartmentCard;
