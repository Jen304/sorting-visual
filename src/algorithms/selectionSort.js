import sortHelper, { CUR_POS, SORTED } from "./helper";

const selectionSort = ({ numList, setNewStepList }) => {
  const {
    numArray,
    defaultColorList,
    length,
    addNewStep,
    setStepList,
  } = sortHelper(numList, setNewStepList);

  for (let i = 0; i < length; i++) {
    // find the min number in the remaining list
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (numArray[j] < numArray[minIndex]) {
        minIndex = j;
      }
      // need to use slice to avoid shallow copy
      const newColorList = [...defaultColorList];
      newColorList[i] = CUR_POS;
      newColorList[j] = CUR_POS;
      addNewStep(numArray, newColorList);
    }

    if (minIndex !== i) {
      // Swapping the elements
      const tmp = numArray[i];
      numArray[i] = numArray[minIndex];
      numArray[minIndex] = tmp;
    }
    defaultColorList[i] = SORTED;
  }
  addNewStep(numArray, defaultColorList);
  setStepList();
};

export default selectionSort;
