const NOT_SORTED = 0;
const CUR_POS = 1;
const SORTED = 2;

const sortHelper = (numList, setNewStepList) => {
  const numArray = [...numList];
  const defaultColorList = Array(numArray.length).fill(NOT_SORTED);

  const length = numArray.length;
  const colorListStep = [];
  const numListStep = [];

  const addNewStep = (numArray, colorList) => {
    numListStep.push([...numArray]);
    colorListStep.push([...colorList]);
  };

  const setStepList = () => {
    setNewStepList(numListStep, colorListStep);
  };
  return {
    numArray,
    defaultColorList,
    length,
    addNewStep,
    setStepList,
  };
};

export default sortHelper;
export { NOT_SORTED, CUR_POS, SORTED };
