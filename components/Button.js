import { useContext } from "react";
import ThemeContext from '../contexts/ThemeContext';

const Button = (props) => {
  const { children, ...other } = props;
  const theme = useContext(ThemeContext);

  return (
    <div>
      <button {...other} className={theme}>{children}</button>
    </div>
  );
}

export default Button;