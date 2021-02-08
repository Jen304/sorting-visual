import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import defaultTheme from "./default";
import darkTheme from "./dark";

// create the theme list
export const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

// create context
export const CustomThemeContext = React.createContext({
  currentTheme: "normal",
  setTheme: null,
});

const CustomThemeProvider = ({ children }) => {
  const currentTheme = localStorage.getItem("appTheme") || "default";

  // create theme state
  const [theme, setTheme] = useState(currentTheme);

  const changeTheme = (newTheme) => {
    localStorage.setItem("appTheme", newTheme);
    setTheme(newTheme);
  };

  const contextValue = {
    currentTheme: theme,
    setTheme: changeTheme,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
