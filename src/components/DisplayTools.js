import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup, Button, Icon } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  buttonGroupContainer: {
    minWidth: 150,
    margin: "auto",
    position: "absolute",
    bottom: 0,
  },
  buttonGroup: {
    margin: "5px auto",
  },
}));

const DisplayTools = ({
  resetNumList,
  startSort,
  stopSort,
  isSorting,
  setIsSorting,
  nextStep,
  prevStep,
}) => {
  const classes = useStyles();

  const handleSortState = () => {
    if (isSorting) {
      stopSort();
      setIsSorting(false);
    } else {
      startSort();
      setIsSorting(true);
    }
  };

  return (
    <div className={classes.buttonGroupContainer}>
      <ButtonGroup
        color="primary"
        className={classes.buttonGroup}
        variant="contained"
        aria-label="contained primary button group"
        fullWidth
      >
        <Button onClick={resetNumList}>
          <Icon>replay</Icon>
        </Button>
        <Button onClick={prevStep} variant="outlined">
          <Icon>skip_previous</Icon>
        </Button>
        <Button onClick={handleSortState}>
          {isSorting ? (
            <Icon>pause_circle_filled</Icon>
          ) : (
            <Icon>play_circle_outline</Icon>
          )}
        </Button>
        <Button onClick={nextStep} variant="outlined">
          <Icon>skip_next</Icon>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default DisplayTools;
