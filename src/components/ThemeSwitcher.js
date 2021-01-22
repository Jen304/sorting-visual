import React, { useContext, useState } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import {CustomThemeContext, themes} from "../themes/CustomThemeProvider"

const ThemeSwitcher = () => {
  // get attrubte from context
  const {currentTheme, setTheme} = useContext(CustomThemeContext);
  const themeNameList = Object.keys(themes);

  const isDarkTheme = () => {
    return currentTheme === themeNameList[1];
  }

  const [isDark, setIsDark] = useState(isDarkTheme());

  
  const changeTheme = () =>{
    if(currentTheme === themeNameList[0]){
      setTheme(themeNameList[1]);
    }else{
      setTheme(themeNameList[0]);
    }
    setIsDark(!isDark);
  }
  return (
    <FormControlLabel
      control={<Switch name="switchTheme" color="secondary" onChange={changeTheme} checked={isDark}/>}
      label="Dark theme"
      labelPlacement="start"
    />
  );
};

export default ThemeSwitcher;
