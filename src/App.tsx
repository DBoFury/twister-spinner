import { useState } from "react";
import TrafficLight from "@/components/CyclingColors";
import TwisterSpinner from "@/components/TwisterSpinner";

const ANIMATION_DURATION = 5000;

const App = () => {
  const [animationStarted, setIsAnimationStarted] = useState<boolean>(false);

  return (
    <div className="flex h-screen items-center bg-onyx">
      <div className="fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col space-y-10">
        <TwisterSpinner
          setIsAnimationStarted={setIsAnimationStarted}
          animationDuration={ANIMATION_DURATION}
        />
        <TrafficLight
          animationStarted={animationStarted}
          setIsAnimationStarted={setIsAnimationStarted}
          activeColor={0}
          animationDuration={ANIMATION_DURATION}
        />
      </div>
    </div>
  );
};

export default App;
