import Clock from "./Clock.tsx";
import { useState, useEffect } from "react";
import { Button } from "./Button.tsx";
import { v6 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [timerMin, setTimerMin] = useState("1");
  const [timerSec, setTimerSec] = useState("00");
  const [isRunning, setRunning] = useState(false);
  const [isInIntervalSession, setIntervalSession] = useState(false);
  const [totalSessions, setTotalSessions] = useState(0);
  const [records, setRecords] = useState([
    {
      id: v6(),
      data: "'2026-03-15T17:44:47.111Z'",
    },
  ]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimerSec((sec) => {
        const s = parseInt(sec);
        if (s === 0) {
          setTimerMin((min) => {
            const m = parseInt(min);
            if (m === 0) {
              setIntervalSession((val) => !val);
              if (isInIntervalSession) {
                return "10"; // O intervalo entre sessões
              }
              clearInterval(interval);
              // Agrupando a atualização para usar o valor exato recém-calculado
              setTotalSessions((prevTotal) => {
                const newTotal = prevTotal + 1;
                if (newTotal > 0 && newTotal % 4 === 0) {
                  const dataAtual = new Date(Date.now());
                  setRecords((rec) => [
                    ...rec,
                    {
                      id: v6(),
                      data: dataAtual.toISOString(),
                    },
                  ]);
                }
                return newTotal;
              });

              return "00";
            }
            return String(m - 1).padStart(2, "0");
          });
          return "59"; // Aqui seria o lugar para chamar uma lógica de esta no intervalo pomodoro ou não
        }

        return String(s - 1).padStart(2, "0");
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isInIntervalSession]);

  useEffect(() => {
    window.localStorage.setItem("1", JSON.stringify(records));
  }, [records]);

  useEffect(() => {
    const notify = () => toast.success("Sessão Finalizada !");
    if (timerSec == "00" && timerMin == "00") {
      notify();
    }
  }, [timerSec, timerMin]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center py-10 gap-9 font-sans max-h-screen">
        <h1 className="text-5xl font-semibold tracking-wid text-white drop-shadow-sm">
          Pomodoro
        </h1>

        <Clock props_style={"w-48 h-48 text-blue-400 drop-shadow-md"} />

        <h1 className="text-8xl font-mono flex font-bold text-white bg-slate-800 border border-slate-700 px-10 py-8 rounded-2xl shadow-lg tracking-widest">
          {timerMin.padStart(2, "0")} : {timerSec.padStart(2, "0")}
        </h1>

        <Button isRunning={isRunning} handleClick={setRunning} />
      </div>
    </>
  );
}
