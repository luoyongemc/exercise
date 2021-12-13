import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

function Context() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function ThemeButton(pros) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button style={{ background: theme.background, color: theme.forefround }}>
        I am sthled by theme context
      </button>
    </div>
  );
}

export default Context;
