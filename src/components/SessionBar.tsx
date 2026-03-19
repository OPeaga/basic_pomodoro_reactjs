import { CircleCheck, Circle } from "lucide-react";
type sessionBarProps = {
  currentSession: number;
};

export default function SessionBar({ currentSession }: sessionBarProps) {
  return (
    <span className="flex gap-3.5">
      {[1, 2, 3, 4].map((i) =>
        currentSession % 4 > i ? (
          <CircleCheck color="white" />
        ) : (
          <Circle color="white" fill="white" />
        ),
      )}
    </span>
  );
}
