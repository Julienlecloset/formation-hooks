import { useState } from "react";
import "../styles/globals.css";
import "../styles/specific.css";
import Header from "../components/Header";
import ThemeContext from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`container ${theme}`}>
        <Header setTheme={setTheme} />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
