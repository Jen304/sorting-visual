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

const DisplayTools = () => {
  const classes = useStyles();
  return (
    <div className={classes.buttonGroupContainer}>
      <ButtonGroup
        color="primary"
        className={classes.buttonGroup}
        variant="contained"
        aria-label="contained primary button group"
        fullWidth
      >
        <Button>
          <Icon>replay</Icon>
        </Button>
        <Button>
          <Icon>play_circle_outline</Icon>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default DisplayTools;
