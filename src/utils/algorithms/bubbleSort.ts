export const getBubbleSortAnims = (items: number[]) => {
    const sortedArray = [...items];
    const animArr: number[][] = [];
  
    for (let i = 0; i < sortedArray.length - 1; i++) {
      for (let j = 0; j < sortedArray.length - i - 1; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          animArr.push([j, j + 1]); // Animation array for visualization
          swap(sortedArray, j, j + 1);
        }
      }
    }
  
    return { bubbleSorted: sortedArray, bubbleSortAnims: animArr };
  };
  
  const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };