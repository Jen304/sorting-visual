import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import SortForm from './SortForm'
import BarList from './BarList'
import DisplayTools from './DisplayTools'

const useStyles = makeStyles({
  sortDisplay: {
    width: '100%',
    margin: 'auto',
    marginTop: 60,
    position: 'relative',
  },
  sortTool: {
    height: '78vh',
    position: 'relative',
  },
})

const SortDisplay = () => {
  const handleSortChange = (sortType) => {
    console.log(sortType)
  }

  const classes = useStyles()
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
        <SortForm handleSortChange={handleSortChange} flexGrow={1} />
        <DisplayTools />
      </Box>
    </Box>
  )
}

export default SortDisplay
