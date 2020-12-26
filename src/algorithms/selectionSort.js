const selectionSort = ({ numList, setNewStepList }) => {
  const NOT_SORTED = 0;
  const CUR_POS = 1;
  const SORTED = 2;
  const numArray = [...numList];
  const defaultColorList = Array(numArray.length).fill(NOT_SORTED);

  const n = numArray.length;
  const colorListStep = [];
  const numListStep = [];
  //console.log(numArray);
  for (let i = 0; i < n; i++) {
    // find the min number in the remaining list
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
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
