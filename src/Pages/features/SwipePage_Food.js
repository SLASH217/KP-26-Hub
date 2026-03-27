import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SwipePage({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const currentDay = location.pathname.replace("/", "").toLowerCase();
  const currentIndex = days.indexOf(currentDay);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    const distance = touchEnd - touchStart;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0 && currentIndex > 0) {
      // Swipe Right → Go to previous day
      navigate(`/${days[currentIndex - 1]}`);
    } else if (distance < 0 && currentIndex < days.length - 1) {
      // Swipe Left → Go to next day
      navigate(`/${days[currentIndex + 1]}`);
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        height: "auto",
        width: "100%",
        overflow: "hidden",
        touchAction: "pan-y", // prevent scroll interference
      }}
    >
      {children}
    </div>
  );
}

export default SwipePage;
