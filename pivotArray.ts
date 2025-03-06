function pivotArray(nums: number[], pivot: number): number[] {
  const result: number[] = [];
  const leftSide: number[] = [];
  const rightSide: number[] = [];
  let pivotRepeated: number = 0;
  nums.forEach((num) => {
    if (num == pivot) {
      pivotRepeated++;
    } else {
      if (num < pivot) {
        leftSide.push(num);
      } else {
        rightSide.push(num);
      }
    }
  });
  while (leftSide.length != 0) {
    const val = leftSide.shift();
    if (val !== undefined) {
      result.push(val);
    }
  }
  while (pivotRepeated != 0) {
    result.push(pivot);
    pivotRepeated--;
  }
  while (rightSide.length != 0) {
    const val = rightSide.shift();
    if (val !== undefined) {
      result.push(val);
    }
  }
  return result;
}