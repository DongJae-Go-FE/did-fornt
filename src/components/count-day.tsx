import { differenceInDays } from "date-fns";

import CountUp from "@/components/count-up";

export default function CountDay() {
  const targetDate = new Date(2027, 8, 3);

  const today = new Date();

  return (
    <div className="text-black heading01b text-[clamp(30px,7dvw,130px)]">
      D -{" "}
      <CountUp
        from={0}
        to={differenceInDays(targetDate, today)}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
    </div>
  );
}
