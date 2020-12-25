import React from "react";
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

const DisplayTools = ({ isSorting, setIsSorting,reset, setReset }) => {
  const classes = useStyles();

  const handleSortState = () => {
    setIsSorting(!isSorting);
  };

  const handleReset = () =>{
    setReset(!reset);
  }
  return (
    <div className={classes.buttonGroupContainer}>
      <ButtonGroup
        color="primary"
        className={classes.buttonGroup}
        variant="contained"
        aria-label="contained primary button group"
        fullWidth
      >
        <Button onClick={handleReset} disabled={isSorting}>
          <Icon>replay</Icon>
        </Button>
        <Button onClick={handleSortState}>
          {isSorting ? (
            <Icon>pause_circle_filled</Icon>
          ) : (
            <Icon>play_circle_outline</Icon>
          )}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default DisplayTools;
