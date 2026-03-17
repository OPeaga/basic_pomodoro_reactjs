import Clock from "./Clock.tsx";
import { useState, useEffect } from "react";
import { Button } from "./Button.tsx";
import { v6 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

type SessionType = "pomodoro" | "interval";

type PomodoroRecord = {
  id: string;
  data: string;
}

export default function App() {
  // Tempos
  const POMODORO_MINS = 1; 
  const INTERVAL_MINS = 1;

  // Lógica de estado simplificada: usamos apenas 'timeLeft' (tempo restante em segundos)
  const [timeLeft, setTimeLeft] = useState(POMODORO_MINS * 60);
  const [isRunning, setRunning] = useState(false);
  
  const [sessionType, setSessionType] = useState<SessionType>("pomodoro");
  
  const [totalSessions, setTotalSessions] = useState(0);
  const [records, setRecords] = useState<PomodoroRecord[]>([
    {
      id: v6(),
      data: new Date().toISOString(),
    },
  ]);

  // Efeito principal do cronômetro
  useEffect(() => {
    if (!isRunning) return;

    // Quando o tempo zera, finalizamos a sessão
    if (timeLeft === 0) {
      handleSessionEnd();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]); // Roda sempre que isRunning ou timeLeft mudam

  // Efeito para salvar os records no cache/localStorage
  useEffect(() => {
    window.localStorage.setItem("1", JSON.stringify(records));
  }, [records]);

  // Função disparada ao término do cronômetro
  const handleSessionEnd = () => {
    setRunning(false);

    if (sessionType === "pomodoro") {
      toast.success("Pomodoro Finalizado! Hora de descansar.");
      setSessionType("interval");
      setTimeLeft(INTERVAL_MINS * 60);

      // Incrementar os registros de pomodoro finalizados (cada 4, salva)
      setTotalSessions((prevTotal) => {
        const newTotal = prevTotal + 1;
        if (newTotal > 0 && newTotal % 4 === 0) {
          setRecords((rec) => [
            ...rec,
            { id: v6(), data: new Date().toISOString() },
          ]);
        }
        return newTotal;
      });
    } else {
      toast.success("Intervalo Finalizado! De volta ao foco.");
      setSessionType("pomodoro");
      setTimeLeft(POMODORO_MINS * 60);
    }
  };

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

        <h1 className="text-8xl font-mono flex font-bold text-white bg-slate-800 border border-slate-700 px-10 py-8 rounded-2xl shadow-lg tracking-widest transition-colors duration-500">
          {timerMin} : {timerSec}
        </h1>

        <Button isRunning={isRunning} handleClick={setRunning} />
      </div>
    </>
  );
}
