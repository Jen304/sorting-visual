import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    margin: "30px auto",
    minwidth: 150,
    marginBottom: 350,
  },
  selectEmpty: {
    margin: theme.spacing(2),
  },
}));

const SortForm = ({ selectedSort, handleSortChange, sortList, isSorting }) => {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <FormControl>
        <FormHelperText>Sort type: </FormHelperText>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSort}
          onChange={handleSortChange}
          disabled={isSorting}
        >
          {sortList.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SortForm;
