import { useState, useEffect, useCallback } from "react";
import { v6 } from "uuid";
import toast from "react-hot-toast";
import type { SessionType, PomodoroRecord } from "../types";

export function usePomodoro() {
  const POMODORO_MINS = 1;
  const INTERVAL_MINS = 1;

  const [timeLeft, setTimeLeft] = useState(POMODORO_MINS * 60);
  const [isRunning, setRunning] = useState(false);
  const [sessionType, setSessionType] = useState<SessionType>("pomodoro");
  const [totalSessions, setTotalSessions] = useState(0);
  const [records, setRecords] = useState<PomodoroRecord[]>(() =>
    JSON.parse(localStorage.getItem("1") || "[]")
  );

  const handleSessionEnd = useCallback(() => {
    setRunning(false);

    if (sessionType === "pomodoro") {
      toast.success("Pomodoro Finalizado! Hora de descansar.");
      setSessionType("interval");
      setTimeLeft(INTERVAL_MINS * 60);

      const newTotal = totalSessions + 1;
      setTotalSessions(newTotal);

      if (newTotal > 0 && newTotal % 4 === 0) {
        setRecords((rec) => [
          ...rec,
          { id: v6(), data: new Date().toISOString() },
        ]);
      }
    } else {
      toast.success("Intervalo Finalizado! De volta ao foco.");
      setSessionType("pomodoro");
      setTimeLeft(POMODORO_MINS * 60);
    }
  }, [sessionType, totalSessions]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft <= 0 && isRunning) {
      handleSessionEnd();
    }
  }, [timeLeft, isRunning, handleSessionEnd]);

  useEffect(() => {
    window.localStorage.setItem("1", JSON.stringify(records));
  }, [records]);

  return {
    timeLeft,
    isRunning,
    setRunning,
    sessionType,
    totalSessions,
  };
}
