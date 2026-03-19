import Clock from "../components/Clock";
import { Button } from "../components/Button";
import { Toaster } from "react-hot-toast";
import SessionBar from "../components/SessionBar";
import { usePomodoro } from "../hooks/usePomodoro";

export default function Home() {
  const { timeLeft, isRunning, setRunning, sessionType, totalSessions } = usePomodoro();

  // Formatador de tempo para exibição em tela
  const timerMin = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const timerSec = String(timeLeft % 60).padStart(2, "0");

  const isPomodoro = sessionType === "pomodoro";

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className={`min-h-screen flex flex-col items-center justify-center py-10 gap-9 font-sans transition-colors duration-500 max-h-screen ${
          isPomodoro ? "bg-slate-900" : "bg-teal-950"
        }`}
      >
        <h1 className="text-5xl font-semibold tracking-widest text-white drop-shadow-sm">
          {isPomodoro ? "Pomodoro" : "Intervalo"}
        </h1>

        <Clock
          props_style={`w-48 h-48 drop-shadow-md transition-colors duration-500 ${
            isPomodoro ? "text-blue-400" : "text-teal-400"
          }`}
        />
        <SessionBar totalSessions={totalSessions > 4? totalSessions % 4 : totalSessions} />

        <h1 className="text-8xl font-mono flex font-bold text-white bg-slate-800 border border-slate-700 px-10 py-8 rounded-2xl shadow-lg tracking-widest transition-colors duration-500">
          {timerMin} : {timerSec}
        </h1>

        <Button isRunning={isRunning} handleClick={setRunning} />
      </div>
    </>
  );
}
