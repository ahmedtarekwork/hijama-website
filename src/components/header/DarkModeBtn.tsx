import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

type Props = {
  className: string;
};

const DarkModeBtn = ({ className }: Props) => {
  const theTheme = () =>
    document.documentElement.classList.contains("dark") ? "dark" : "light";

  const [theme, setTheme] = useState<"light" | "dark">(theTheme());

  return (
    <button
      title="switch themes"
      className={className}
      onClick={() => {
        document.documentElement.classList.toggle("dark");
        setTheme(theTheme());
      }}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};
export default DarkModeBtn;
