import React from "react";
import { FormControl, Select, MenuItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    margin: "30px auto",
    miWwidth: 150,
    marginBottom: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SortForm = ({ selectedSort, handleSortChange, sortList, isSorting }) => {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <FormControl fullWidth>
        <Typography variant="h6" component="h4">
          Select a sort type:
        </Typography>
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
