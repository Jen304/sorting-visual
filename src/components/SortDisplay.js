import React, { useState } from "react";
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

  console.log(sortList);
  const [selectedSort, setSelectedSort] = useState(sortList[0]);
  const [isSorting, setIsSorting] = useState(false);

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-start"
      className={classes.sortDisplay}
    >
      <Box>
        <BarList />
      </Box>
      <Box className={classes.sortTool}>
        <SortForm handleSortChange={handleSortChange} selectedSort={selectedSort} sortList={sortList} />
        <DisplayTools isSorting={isSorting} sortList={sortList} />
      </Box>
    </Box>
  );
};

export default SortDisplay;
