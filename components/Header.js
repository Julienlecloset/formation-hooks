import { useContext } from "react";
import ThemeContext from '../contexts/ThemeContext';
import Button from "./Button";

const Header = ({ setTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`header ${theme}`}>
      <div />
      <p>The Game in Which One Should Click to Win</p>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Switch theme</Button>
    </div>
  )
}

export default Header;