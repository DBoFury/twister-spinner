import { FC, useState } from "react";
import { FaHandPaper, FaLongArrowAltUp } from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
import { generateRandomNumber } from "@/lib/generate-rotation-angle";

interface TwisterSpinnerProps {
  animationDuration: number;
  setIsAnimationStarted: (value: boolean) => void;
}

const TwisterSpinner: FC<TwisterSpinnerProps> = ({
  animationDuration,
  setIsAnimationStarted,
}) => {
  const [rotationStop, setRotationStop] = useState<number>(0);

  const startAnimation = () => {
    setIsAnimationStarted(true);
    setRotationStop(rotationStop + generateRandomNumber());
  };

  return (
    <div
      onClick={startAnimation}
      className="relative h-64 w-64 rounded-md bg-white">
      {/* Left foot */}
      <GiFootprint className="absolute left-[8%] top-[8%] h-1/4 w-1/4" />
      <div className="absolute top-1/2 h-1 w-1/3 bg-black" />
      {/* Left hand */}
      <FaHandPaper className="absolute left-[66%] top-[8%] h-1/4 w-1/4" />
      <div className="absolute bottom-0 left-1/2 h-1/3 w-1 bg-black" />
      {/* Right foot */}
      <GiFootprint className="absolute left-[66%] top-[66%] h-1/4 w-1/4 rotate-90 scale-x-[-1]" />
      <div className="absolute right-0 top-1/2 h-1 w-1/3 bg-black" />
      {/* Right hand */}
      <FaHandPaper className="absolute left-[8%] top-[68%] h-1/4 w-1/4 scale-x-[-1]" />
      <div className="absolute left-1/2 top-0 h-1/3 w-1 bg-black" />
      <FaLongArrowAltUp
        className="ease-out-slow absolute left-1/2 top-1/2 h-1/3 w-1/3 transition-all"
        style={{
          transform: `translate(-48%, -50%) rotate(${rotationStop}deg)`,
          transitionDuration: `${animationDuration}ms`,
        }}
      />
    </div>
  );
};

export default TwisterSpinner;
