import React, { useState } from "react";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SortDisplay from "./components/SortDisplay";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appTitle: {
    flexGrow: 1,
  },
  formStyle: {
    margin: theme.spacing(2),
  },
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

  const customeList = [
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
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.appTitle}>
            Sorting Visualization
          </Typography>
          {customeList.map((element) => {
            const valueList = element.valueList.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ));
            return (
              <FormControl className={classes.formStyle} key={element.label}>
                <FormHelperText>{element.label} </FormHelperText>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={element.state}
                  onChange={element.handleInput}
                >
                  {valueList}
                </Select>
              </FormControl>
            );
          })}
        </Toolbar>
      </AppBar>
      <SortDisplay sortType={sortType} size={size} speed={speed} />
    </div>
  );
}

export default App;
