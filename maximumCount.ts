function maximumCount(nums: number[]): number {
  let pos = 0;
  let neg = 0;
  nums.forEach((num) => {
    if (num >= 0) pos++;
    else neg++;
  });

  return Math.max(pos, neg);
}
