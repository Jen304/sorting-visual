import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// Import sorting algo
import sortAlgoList from "../algorithms/";

const useStyles = makeStyles(() => ({
  barContainer: {
    height: "75vh",
    width: "70vw",
    padding: 20,
    marginRight: 40,
    backgroundColor: "#37474f",
  },
  bar: {
    width: "2%",
    margin: "0 1px",
  },
}));

const BarList = ({reset}) => {
  const [numList, setNumList] = useState([]);

  const classes = useStyles();

  const resetNumList = () => {
    const MAX_LENGTH = 50;
    const newNumList = [];
    for (let i = 0; i < MAX_LENGTH; i += 1) {
      newNumList.push(Math.floor(Math.random() * 100 + 1));
    }
    setNumList(newNumList);
  };

  useEffect(() => {
    //console.log(props);
    resetNumList();
  }, [reset]);

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
          bgcolor="primary.light"
        ></Box>
      ))}
    </Box>
  );
};

export default BarList;
