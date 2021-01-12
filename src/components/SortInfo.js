import React from "react";
import { Typography} from '@material-ui/core';

const SortInfo = ({sortType}) =>{
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
            bestCase
        }
    }
}