import { useState, useEffect } from "react";
import "../../../components/css/food_components/Schedule.css";

function Schedule({ dayIndex, dayName, timeSlots }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const currentDay = currentTime.getDay();

  const isCurrentSlot = (slot) => {
    // Only highlight if it's the correct day
    if (currentDay !== dayIndex) return false;

    const now = currentTime.getHours() * 60 + currentTime.getMinutes();
    const [startHour, startMin] = slot.start.split(":").map(Number);
    const [endHour, endMin] = slot.end.split(":").map(Number);
    const start = startHour * 60 + startMin;
    const end = endHour * 60 + endMin;

    return now >= start && now <= end;
  };

  return (
    <div>
      {timeSlots.map((slot, index) => (
        <div
          key={index}
          className={`time-slot ${isCurrentSlot(slot) ? "blinking" : ""}`}
        >
          {slot.start} - {slot.end}
        </div>
      ))}
    </div>
  );
}

export default Schedule;
