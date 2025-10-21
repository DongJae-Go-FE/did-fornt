import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RotatingText from "@/components/rotating-text";

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/kr");
    }, 6300);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-full min-h-screen min-w-screen flex justify-center items-center fixed inset-0 bg-white z-1000 animate-fade-out">
      <div className="flex gap-x-2 items-center heading02B">
        <h2>안녕하세요!</h2>
        <RotatingText
          texts={["did", "소개", "키워드"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-black text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          loop={false}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
    </div>
  );
}
