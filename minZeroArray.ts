function minZeroArray(nums: number[], queries: number[][]): number {
  let score = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      score++;
    }
  }
  if(score==nums.length)return-1
  for (let i = 0; i < queries.length; i++) {
    const arr = queries[i];
    const [l, r, val] = arr;
    for (let y = l; y <= r; y++) {
      let newVal = nums[y] - val;
      if (newVal < 0) newVal = 0;
      if (nums[y] != 0) {
        if (newVal == 0) score++;
        nums[y] = newVal;
      }
    }
    result++;
    if (score == nums.length) break;
  }

  return score == nums.length ? result : -1;
}
console.log(
  minZeroArray(
    [4, 3, 2, 1],
    [
      [1, 3, 2],
      [0, 2, 1],
    ]
  )
);
