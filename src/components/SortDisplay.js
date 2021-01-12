import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
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
    height: "75vh",
    position: "relative",
    marginLeft: 50,
  },
});

const SortDisplay = ({ sortType, size, speed }) => {
  // get a list of algo list by create new object (avoid shallow copy)
  const sortList = Object.keys(sortAlgoList);
  const DEFAULT_TIMEOUT = 300;
  const classes = useStyles();

  // Create states
  const [selectedSort, setSelectedSort] = useState(sortList[0]);

  const [currentStep, setCurrentStep] = useState(0);
  const [numList, setNumList] = useState([]);
  const [currentColorList, setCurrentColorList] = useState(Array(size).fill(0));
  const [isSorting, setIsSorting] = useState(false);

  const [sortStep, setSortStep] = useState([]);
  const [stepColor, setStepColor] = useState([]);
  const [timeoutList, setTimeoutList] = useState([]);

  // Generate a new list and sort that list
  const generateNumList = () => {
    const newNumList = [];
    for (let i = 0; i < size; i += 1) {
      newNumList.push(Math.floor(Math.random() * 100 + 1));
    }
    sortNumList(newNumList);
    setCurrentStep(0);
    setCurrentColorList(Array(size).fill(0));
    setNumList(newNumList);

    clearTimeOutList();
  };

  const setNewStepList = (newStepList, newColorStep) => {
    setSortStep(newStepList);
    setStepColor(newColorStep);
  };

  const sortNumList = (newNumList) => {
    sortAlgoList[sortType]({ numList: newNumList, setNewStepList });
  };

  const clearTimeOutList = () => {
    timeoutList.forEach((element) => clearTimeout(element));
    setTimeoutList([]);
    setIsSorting(false);
  };

  // start or resume display the sorting steps
  const startSort = () => {
    // need to clear all previous sorting lists
    clearTimeOutList();
    const timeouts = [];
    const deplayTime = DEFAULT_TIMEOUT / parseFloat(speed);
    setIsSorting(true);
    const startPoint = currentStep;
    for (let i = 0; i + startPoint < sortStep.length; i++) {
      const nextStep = i + startPoint;
      const step = setTimeout(() => {
        setNumList(sortStep[nextStep]);
        setCurrentColorList(stepColor[nextStep]);
        if (nextStep === sortStep.length - 1) {
          setCurrentStep(0);
          setIsSorting(false);
        } else {
          setCurrentStep(nextStep);
        }
      }, i * deplayTime);
      timeouts.push(step);
    }
    console.log(timeouts);
    setTimeoutList(timeouts);
  };

  const forwardNextStep = () => {
    if (currentStep < sortStep.length - 1) {
      const nextStep = currentStep + 1;
      setNumList(sortStep[nextStep]);
      setCurrentColorList(stepColor[nextStep]);
      setCurrentStep(nextStep);
    }
  };

  // Display previous step
  const backwardPrevStep = () => {
    if (currentStep > 0) {
      const nextStep = currentStep - 1;
      setNumList(sortStep[nextStep]);
      setCurrentColorList(stepColor[nextStep]);
      setCurrentStep(nextStep);
    }
  };

  // create new list when the component mounted or selectedSort value updated
  useEffect(() => {
    generateNumList();
  }, [sortType, speed, size]);

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
        <DisplayTools
          resetNumList={generateNumList}
          startSort={startSort}
          stopSort={clearTimeOutList}
          isSorting={isSorting}
          nextStep={forwardNextStep}
          prevStep={backwardPrevStep}
        />
      </Box>
    </Box>
  );
};

export default SortDisplay;
