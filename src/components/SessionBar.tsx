import { CircleCheck, Circle } from "lucide-react";
type sessionBarProps = {
  totalSessions: number;
};

export default function SessionBar({ totalSessions }: sessionBarProps) {
  // const currentSession = totalSessions > 4 ? totalSessions % 4 : totalSessions;
  return (
    <span className="flex gap-3.5">
      {[1, 2, 3, 4].map((i) =>
          totalSessions % 4 >= i ? (
          <CircleCheck color="white" />
        ) : (
          <Circle color="white" fill="white" opacity={0.5}/>
        ),
      )}
    </span>
  );
}
