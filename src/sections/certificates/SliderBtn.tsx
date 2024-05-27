import { forwardRef } from "react";

// icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
  direction: "next" | "prev";
  name: string;
};

const SliderBtn = forwardRef<HTMLButtonElement, Props>(
  ({ direction, name }, ref) => {
    return (
      <button
        className={`${name} transition hover:bg-blue-600 bg-blue-500 text-white disabled:bg-slate-500 disabled:hover:bg-slate-600 disabled:cursor-not-allowed p-2 rounded-md`}
        ref={ref}
      >
        {direction === "prev" ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    );
  }
);
export default SliderBtn;
