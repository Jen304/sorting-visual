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
  const MAX_LENGTH = 50;
  const classes = useStyles();

  // let sortStep = [];
  // let stepColor = [];

  const [selectedSort, setSelectedSort] = useState(sortList[0]);

  const [currentStep, setCurrentStep] = useState(0);
  const [numList, setNumList] = useState([]);
  const [currentColorList, setCurrentColorList] = useState(
    Array(MAX_LENGTH).fill(0)
  );
  const [isSorting, setIsSorting] = useState(false);

  const [sortStep, setSortStep] = useState([]);
  const [stepColor, setStepColor] = useState([]);
  const [timeoutList, setTimeoutList] = useState([]);

  const generateNumList = () => {
    const newNumList = [];
    for (let i = 0; i < MAX_LENGTH; i += 1) {
      newNumList.push(Math.floor(Math.random() * 100 + 1));
    }
    console.log(newNumList);
    setCurrentStep(0);
    //currentStep = 0;
    setCurrentColorList( Array(MAX_LENGTH).fill(0))
    setNumList(newNumList);
    sortNumList(newNumList);
    clearTimeOutList();
  };

  const setNewStepList = (newStepList, newColorStep) => {
    setSortStep(newStepList);
    setStepColor(newColorStep);
    // sortStep = newStepList;
    // stepColor = newColorStep;
    // console.log(newStepList);
    // console.log(stepColor);
  };

  const sortNumList = () => {
    sortAlgoList[selectedSort]({ numList, setNewStepList });
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const clearTimeOutList = () => {
    
    timeoutList.forEach((element) => clearTimeout(element));
    setTimeoutList([]);
  };

  const startSort = () => {
    
    console.log('play sorting');
    console.log(currentStep);
    console.log(stepColor);
    clearTimeOutList();
    const timeouts = [];
    for (let i = currentStep; i < sortStep.length; i++) {
      const step = setTimeout(() => {
        setNumList(sortStep[i]);
        setCurrentColorList(stepColor[i]);
        console.log(i);
        if(i == sortStep.length -1){
          console.log('reset current step');
          setCurrentStep(0);
          setIsSorting(false);
        }else{
          setCurrentStep(i);
        }
      }, 30);
      timeouts.push(step);
    }
    setTimeoutList(timeouts);
  };

  useEffect(() => {
    generateNumList();
  }, [selectedSort]);


  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-start"
      className={classes.sortDisplay}
    >
      <Box>
        <BarList numList={numList} colorStepList={currentColorList} />
      </Box>
      <Box className={classes.sortTool}>
        <SortForm
          handleSortChange={handleSortChange}
          selectedSort={selectedSort}
          sortList={sortList}
        />
        <DisplayTools
          resetNumList={generateNumList}
          startSort={startSort}
          stopSort={clearTimeOutList}
          isSorting={isSorting}
          setIsSorting={setIsSorting}
        />
      </Box>
    </Box>
  );
};

export default SortDisplay;
