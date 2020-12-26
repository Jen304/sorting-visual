import sortHelper, { CUR_POS, SORTED } from "./helper";

const insertionSort = ({ numList, setNewStepList }) => {
  const {
    numArray,
    defaultColorList,
    length,
    addNewStep,
    setStepList,
  } = sortHelper(numList, setNewStepList);

  for (let i = 1; i < length; i++) {
    // Choosing the first element in our unsorted subarray
    let current = numArray[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < numArray[j]) {
      numArray[j + 1] = numArray[j];
      j--;
      //numListStep.push([...numArray]);
      const newColorList = [...defaultColorList];
      newColorList[i] = CUR_POS;
      newColorList[j] = CUR_POS;
      //colorListStep.push(newColorList);
      addNewStep(numArray, newColorList);
    }
    numArray[j + 1] = current;
  }
  // numListStep.push([...numArray]);
  // colorListStep.push(Array(numArray.length).fill(SORTED));
  //setNewStepList(numListStep, colorListStep);
  addNewStep(numArray, Array(numArray.length).fill(SORTED));
  setStepList();
};

export default insertionSort;
