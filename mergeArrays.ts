function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const result: number[][] = [];
  const hashMap: { [key: number]: number } = {};
  function hashing(numbers: number[][]) {
    for (let i = 0; i < numbers.length; i++) {
      hashMap[numbers[i][0]] =(hashMap[numbers[i][0]]||0)+numbers[i][1]
    }
  }
  hashing(nums1);
  hashing(nums2);
  Object.keys(hashMap).map((key) => {
    result.push([Number(key), hashMap[Number(key)]]);
  });

  return result;
}
console.log(mergeArrays([[1,2],[2,3],[4,5]],[[1,4],[3,2],[4,1]]))