import { AlarmClock } from "lucide-react";

type ClockProps = {
  props_style: string;
};

export default function Clock({ props_style }: ClockProps) {
  return (
    <div className="flex justify-center items-center flex-col gap-3.5">
      <AlarmClock className={props_style} strokeWidth={1.5} />
    </div>
  );
}
