import React, { useState } from 'react'
import { FormControl, Select, MenuItem, FormLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formContainer: {
    margin: '30px auto',
    width: 200,
    marginBottom: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const SortForm = () => {
  const sortList = ['Insertion', 'Selection', 'Merge']

  const [sortType, setSortType] = useState(sortList[0])
  const classes = useStyles()

  const handleChange = (e) => {
    setSortType(e.target.value)
  }
  return (
    <div className={classes.formContainer}>
      <FormControl fullWidth>
        <FormLabel component="legend">Select a sort type:</FormLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortType}
          onChange={handleChange}
        >
          {sortList.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SortForm
