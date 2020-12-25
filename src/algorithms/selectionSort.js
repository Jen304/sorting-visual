// const selectionSort = ({ numList, setNumList, setCurrentIndex }) => {
//   const n = numList.length

//   for (let i = 0; i < n; i += 1) {
//     // Finding the smallest number in the subarray
//     let min = i
//     // pause after a certain time
//     setTimeout(() => {
//       for (let j = i + 1; j < n; j += 1) {
//         setCurrentIndex(j)
//         if (numList[j] < numList[min]) {
//           min = j
//         }
//       }
//     }, 300)
//     if (min !== i) {
//       const newNumList = [...numList]
//       // Swapping the elements
//       const tmp = newNumList[i]
//       newNumList[i] = newNumList[min]
//       newNumList[min] = tmp
//       setNumList(newNumList)
//     }
//   }
// }

const selectionSort = () => {
  console.log("selectionSort");
};
export default selectionSort;
