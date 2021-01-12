import sortHelper, { CUR_POS, SORTED } from "./helper";

let bubbleSort = ({ numList, setNewStepList }) => {
  const {
    numArray,
    defaultColorList,
    length,
    addNewStep,
    setStepList,
  } = sortHelper(numList, setNewStepList);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (numArray[j] > numArray[j + 1]) {
        let tmp = numArray[j];
        numArray[j] = numArray[j + 1];
        numArray[j + 1] = tmp;
      }
      const newColorList = [...defaultColorList];
      newColorList[j] = CUR_POS;
      newColorList[j + 1] = CUR_POS;

      addNewStep(numArray, newColorList);
    }
    defaultColorList[length - 1 - i] = SORTED;
  }

  addNewStep(numArray, defaultColorList);
  setStepList();
};

export default bubbleSort;
