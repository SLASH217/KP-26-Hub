import { useEffect, useState } from "react";
import { activeDaysConfig } from "./activeDaysConfig"; // ✅ import config

export default function BusTimer({ departureTime, day }) {
  const [timeDiff, setTimeDiff] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const departure = new Date(departureTime).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = departure - now;
      setTimeDiff(diff);

      if (diff > 0 && diff <= 30 * 60 * 1000) setStatus("upcoming");
      else if (diff < 0 && Math.abs(diff) <= 15 * 60 * 1000)
        setStatus("departed");
      else setStatus("idle");
    }, 1000);

    return () => clearInterval(interval);
  }, [departureTime]);

  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const today = daysOfWeek[new Date().getDay()].toLowerCase();
  const activeDay = day ? day.toLowerCase() : null;

  // 🚫 Hide timer if inactive
  if (!activeDaysConfig[today]) return null;
  if (activeDay && today !== activeDay) return null;
  if (status === "idle") return null;

  const formatTime = (ms) => {
    const totalSec = Math.abs(Math.floor(ms / 1000));
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  const textColor = status === "upcoming" ? "#00FF00" : "#FF0000";
  const labelText = status === "upcoming" ? "Departure in:" : "Departed since:";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        fontSize: "0.9rem",
        fontWeight: "400",
        marginTop: "0.5rem",
      }}
    >
      <span>{labelText}</span>
      <span style={{ color: textColor, fontWeight: "bold" }}>
        {formatTime(timeDiff)}
      </span>
    </div>
  );
}
