import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  barContainer: {
    height: "75vh",
    width: "70vw",
    padding: "10px",
    marginRight: 40,
    backgroundColor: "#37474f",
  },
  bar: {
    width: "1.6%",
    marginRight: "2px",
  },
}));

const BarList = ({ numList, colorStepList }) => {
  const classes = useStyles();
  const colorList = ["primary.light", "warning.main", "success.main"];

  return (
    <Box
      boxShadow={3}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-end"
      className={classes.barContainer}
    >
      {numList.map((num, index) => (
        <Box
          key={index}
          style={{ height: `${num}%` }}
          className={classes.bar}
          component="div"
          bgcolor={colorList[colorStepList[index]]}
        ></Box>
      ))}
    </Box>
  );
};

export default BarList;
