import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup, Icon, IconButton } from "@material-ui/core";

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
  playbutton: {
    fontSize: 70,
  },
}));

const DisplayTools = ({
  resetNumList,
  startSort,
  stopSort,
  isSorting,
  nextStep,
  prevStep,
}) => {
  const classes = useStyles();

  const handleSortState = () => {
    if (isSorting) {
      stopSort();
    } else {
      startSort();
    }
  };

  return (
    <div className={classes.buttonGroupContainer}>
      <ButtonGroup
        color="primary"
        className={classes.buttonGroup}
        aria-label="contained primary button group"
        fullWidth
      >
        <IconButton onClick={resetNumList}>
          <Icon>replay</Icon>
        </IconButton>
        <IconButton onClick={prevStep} color="secondary">
          <Icon>skip_previous</Icon>
        </IconButton>
        <IconButton onClick={handleSortState}>
          {isSorting ? (
            <Icon className={classes.playbutton}>pause_circle_filled</Icon>
          ) : (
            <Icon className={classes.playbutton}>play_circle_outline</Icon>
          )}
        </IconButton>
        <IconButton onClick={nextStep} color="secondary">
          <Icon>skip_next</Icon>
        </IconButton>
      </ButtonGroup>
    </div>
  );
};

export default DisplayTools;
