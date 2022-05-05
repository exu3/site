import Icon from "supercons";
import { useTheme } from "next-themes";

export default function ThemeToggle(): JSX.Element {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="dark:text-white">
      <div className="flex justify-end px-8 pt-8">
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
        >
          {theme === "dark" ? (
            <Icon glyph="moon" size={30} />
          ) : (
            <Icon glyph="moon-fill" size={30} />
          )}
        </button>
      </div>
    </nav>
  );
}
