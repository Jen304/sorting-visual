import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import SortForm from "./SortForm";
import BarList from "./BarList";
import DisplayTools from "./DisplayTools";

// Import sorting algo
import sortAlgoList from "../algorithms/";

const useStyles = makeStyles({
  sortDisplay: {
    width: "100vw",
    margin: "auto",
    marginTop: 60,
    position: "relative",
  },
  sortTool: {
    height: "78vh",
    position: "relative",
    marginLeft: 50,
  },
});

const SortDisplay = () => {
  const sortList = Object.keys(sortAlgoList);
  const MAX_LENGTH = 20;
  const classes = useStyles();
  const defaultState = {
    selectedSort: sortList[0],
    currentStep: 0,
    numList: [],
    currentColorList: Array(MAX_LENGTH).fill(0),
    sortStep: [],
    stepColor: [],
    timeoutList: []

  }

  const [state, setState] = useState(defaultState);

  const generateNumList = () => {
    const newNumList = [];
    for (let i = 0; i < MAX_LENGTH; i += 1) {
      newNumList.push(Math.floor(Math.random() * 100 + 1));
    }
    setState({
      numList: newNumList,
      ...defaultState
    })
    sortNumList(newNumList);
    clearTimeOutList();
  };

  const setNewStepList = (newStepList, newColorStep) => {
    setState({
      sortStep: newStepList, stepColor: newColorStep, ...state
    })
    console.log(state);
  };

  const sortNumList = () => {
    sortAlgoList[state.selectedSort]({ numList: state.numList, setNewStepList });
  };

  const handleSortChange = (e) => {
    //setSelectedSort(e.target.value);
    setState({
      selectedSort: e.target.value, ...state
    })
  };

  const clearTimeOutList = () => {
    state.timeoutList.forEach((element) => clearTimeout(element));
    setState({timeoutList: [], ...state})
  };

  const startSort = () => {
    clearTimeOutList();
    console.log('hello');
    const timeouts = [];
    for (let i = currentStep; i < sortStep.length; i++) {
      const step = setTimeout(() => {
        setState({
          currentStep: i,
          numList: sortStep[i],
          currentColorList: stepColor[i],
          ...state
        })
        
      }, 30);
      timeouts.push(step);
      console.log(timeouts);
    }
    setTimeoutList(timeouts);
  };

  useEffect(() => {
    generateNumList();
  }, [state.selectedSort]);

  const isSorting = () => {
    return (state.timeoutList.length !== 0 && state.currentStep !== sortStep.length)
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-start"
      className={classes.sortDisplay}
    >
      <Box>
        <BarList numList={state.numList} colorStepList={state.currentColorList} />
      </Box>
      <Box className={classes.sortTool}>
        <SortForm
          handleSortChange={handleSortChange}
          selectedSort={state.selectedSort}
          sortList={sortList}
        />
        <DisplayTools
          resetNumList={generateNumList}
          startSort={startSort}
          stopSort={clearTimeOutList}
          isSorting={isSorting}
        />
      </Box>
    </Box>
  );
};

export default SortDisplay;
