import React from "react";
import { Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    infoMargin: {
        margin: '10px 0'
    }
})

const SortInfo = ({sortType}) =>{
    const classes = useStyles();
    const sortInfoList = {
        Selection: {
            worstCase: 'О(n2)',
            bestCase: 'О(n2)'
        },
        Insertion: {
            worstCase: 'О(n2)',
            bestCase: 'О(n)'
            
        },
        Bubble: {
            worstCase: 'О(n2)',
            bestCase: 'O(n)'
        }
    }
    return (
        <div>
            <Typography variant="h4" component="h2" className={classes.infoMargin}>{sortType}</Typography>
          
            <Typography variant="body1" className={classes.infoMargin}><b>Worst case performance: </b> {sortInfoList[sortType].worstCase}</Typography>
           
            <Typography variant="body1" className={classes.infoMargin}><b>Best case performance: </b> {sortInfoList[sortType].bestCase}</Typography>

        </div>
    )
}

export default SortInfo;