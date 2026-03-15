import Clock from "./Clock.tsx";
import { useState, useEffect } from "react";
import { Button } from "./Button.tsx";

export default function App() {
  const [timerMin, setTimerMin] = useState("25");
  const [timerSec, setTimerSec] = useState("00");
  const [isRunning, setRunning] = useState(false);
  const [totalSessions, setTotalSessions] = useState(0);

  useEffect(() => {
    if (!isRunning || totalSessions == 1) return;

    const interval = setInterval(() => {
      setTimerSec((sec) => {
        const s = parseInt(sec);

        if (s === 0) {
          setTimerMin((min) => {
            const m = parseInt(min);

            if (m === 0) {
              clearInterval(interval);
              setTotalSessions((t) => t++);
              return "00";
            }

            return String(m - 1).padStart(2, "0");
          });

          return "59";
        }

        return String(s - 1).padStart(2, "0");
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, totalSessions]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center py-10 gap-9 font-sans">
      <h1 className="text-5xl font-semibold tracking-wid text-white drop-shadow-sm">
        Pomodoro
      </h1>

      <Clock props_style={"w-48 h-48 text-blue-400 drop-shadow-md"} />

      <h1 className="text-8xl font-mono flex font-bold text-white bg-slate-800 border border-slate-700 px-10 py-8 rounded-2xl shadow-lg tracking-widest">
        {timerMin.padStart(2, "0")} : {timerSec.padStart(2, "0")}
      </h1>

      <Button isRunning={isRunning} handleClick={setRunning} />
    </div>
  );
}
