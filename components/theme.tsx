import { useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function ThemeToggle(): JSX.Element {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    console.log("Hi there! Want to hire me? Send me a message :)");
  });
  return (
    <nav className="dark:text-white">
      <div className="flex justify-end px-8 pt-8">
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            document
              .querySelector("#theme_toggle")
              .classList.toggle("rotate-180");
          }}
          className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200"
          id="theme_toggle"
        >
          <FiSun size={24} />
        </button>
      </div>
    </nav>
  );
}
