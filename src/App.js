import React, { useState } from "react";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SortDisplay from "./components/SortDisplay";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import ThemeSwitcher from "./components/ThemeSwitcher";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appTitle: {
    flexGrow: 1,
    color: 'white !important'
  },
  formStyle: {
    margin: theme.spacing(2),
   
  },
  appText: {
    color: "white !important",
  }
}));

function App() {
  const classes = useStyles();
  const [sortType, setSortType] = useState("Selection");
  const [size, setSize] = useState(20);
  const [speed, setSpeed] = useState("1x");

  const handleSortTypeChange = (e) => {
    setSortType(e.target.value);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const customerList = [
    {
      label: "Sort Type:",
      valueList: ["Selection", "Insertion", "Bubble"],
      state: sortType,
      handleInput: handleSortTypeChange,
    },
    {
      label: "Size:",
      valueList: [20, 30, 50],
      state: size,
      handleInput: handleSizeChange,
    },
    {
      label: "Speed",
      valueList: ["0.5x", "1x", "2x"],
      state: speed,
      handleInput: handleSpeedChange,
    },
  ];
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" className={classes.appTitle}>
            Sorting Visualization
          </Typography>
          {customerList.map((element) => {
            const valueList = element.valueList.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ));
            return (
              <FormControl className={classes.formStyle} key={element.label}>
                <FormHelperText className={classes.appText} >{element.label} </FormHelperText>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={element.state}
                  onChange={element.handleInput}
                  className={classes.appText}
                >
                  {valueList}
                </Select>
              </FormControl>
            );
          })}
          <ThemeSwitcher/>
        </Toolbar>
      </AppBar>
      <SortDisplay sortType={sortType} size={size} speed={speed} />
    </>
  );
}

export default App;
