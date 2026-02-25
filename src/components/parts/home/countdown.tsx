"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2027-02-12T00:00:00");

function calcTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();

  if (diff <= 0) return { weeks: 0, days: 0, hours: 0, seconds: 0 };

  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;
  const hours = totalHours % 24;
  const seconds = totalSeconds % 60;

  return { weeks, days, hours, seconds };
}

const units = [
  { key: "weeks", label: "Semanas" },
  { key: "days", label: "Dias" },
  { key: "hours", label: "Horas" },
  { key: "seconds", label: "Segundos" },
] as const;

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex sm:justify-end sm:gap-4 gap-1">
      {units.map(({ key, label }) => (
        <div key={key} className="flex sm:min-w-16 min-w-14 flex-col items-center gap-1">
          <span className="rounded-lg bg-accent/20 sm:px-3 px-3 sm:py-2 py-1 text-center sm:text-3xl text-xl font-bold tabular-nums text-accent border border-accent/30">
            {String(timeLeft[key]).padStart(2, "0")}
          </span>
          <span className="sm:text-xs text-[8px] text-center font-medium uppercase tracking-wider text-foreground/60">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
