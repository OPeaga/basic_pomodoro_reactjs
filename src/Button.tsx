import { Play, Pause } from "lucide-react";

type ButtonProps = {
  isRunning: boolean;
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Button({ isRunning, handleClick }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center w-24 h-24 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_4px_14px_0_rgba(37,99,235,0.4)] transition-colors duration-200 mt-4 hover:cursor-pointer"
      onClick={() => handleClick((value) => !value)}
    >
      {isRunning ? <Pause size={40} /> : <Play size={40} />}
    </button>
  );
}
