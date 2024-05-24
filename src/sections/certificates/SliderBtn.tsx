import { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"button">;

const SliderBtn = ({ children, ...attr }: Props) => {
  return (
    <button
      {...attr}
      className={`w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 grid place-content-center transition duration-[250ms] rounded-lg hover:bg-blue-700${
        attr.className ? ` ${attr.className}` : ""
      }`}
    >
      {children}
    </button>
  );
};
export default SliderBtn;
