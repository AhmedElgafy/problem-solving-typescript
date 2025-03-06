function maxAbsoluteSum(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let y = 1+i; y <= nums.length; y++) {
      result = Math.max(result, Math.abs(getSum(nums.slice(i, y))));
    }
  }
  return result;
}
function getSum(nums: number[]) {
  console.log(nums);
  return nums.reduce((obj, num) => {
    return obj + num;
  }, 0);
}
