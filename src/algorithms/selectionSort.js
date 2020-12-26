import { NOT_SORTED, CUR_POS, SORTED } from "./constant";

const selectionSort = ({ numList, setNewStepList }) => {
  const numArray = [...numList];
  const defaultColorList = Array(numArray.length).fill(NOT_SORTED);

  const length = numArray.length;
  const colorListStep = [];
  const numListStep = [];
  //console.log(numArray);
  for (let i = 0; i < length; i++) {
    // find the min number in the remaining list
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (numArray[j] < numArray[minIndex]) {
        minIndex = j;
      }
      // need to use slice to avoid shallow copy
      numListStep.push([...numArray]);
      const newColorList = [...defaultColorList];
      newColorList[i] = CUR_POS;
      newColorList[j] = CUR_POS;
      colorListStep.push(newColorList);
    }

    if (minIndex !== i) {
      // Swapping the elements
      const tmp = numArray[i];
      numArray[i] = numArray[minIndex];
      numArray[minIndex] = tmp;
    }
    defaultColorList[i] = SORTED;
  }
  numListStep.push([...numArray]);
  colorListStep.push(defaultColorList);
  setNewStepList(numListStep, colorListStep);
};

export default selectionSort;
