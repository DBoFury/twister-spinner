import { cn } from "@/lib/utils";
import { getBackgroundColor, getActiveColor } from "@/helpers/get-bg-color";
import { FC, useState, useEffect } from "react";

interface TrafficLightProps {
  activeColor: number;
  animationDuration: number;
  animationStarted: boolean;
  setIsAnimationStarted: (value: boolean) => void;
}

const TrafficLight: FC<TrafficLightProps> = ({
  activeColor,
  animationDuration,
  animationStarted,
  setIsAnimationStarted,
}) => {
  const [currentColor, setCurrentColor] = useState(activeColor);
  const colors = ["blue", "yellow", "green", "red"];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    if (animationStarted) {
      interval = setInterval(() => {
        setCurrentColor((prevColor) => (prevColor + 1) % colors.length);
      }, 100);

      timeout = setTimeout(() => {
        clearInterval(interval);
        setCurrentColor(Math.floor(Math.random() * colors.length));
        setIsAnimationStarted(false);
      }, animationDuration);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [animationStarted]);

  return (
    <div className="flex h-[3.2rem] w-full max-w-[16rem] justify-around">
      {colors.map((color) => (
        <div
          key={color}
          className={cn(
            "w-1/5 rounded-full transition-all",
            colors[currentColor] === color
              ? getActiveColor(color)
              : getBackgroundColor(color)
          )}
        />
      ))}
    </div>
  );
};

export default TrafficLight;
