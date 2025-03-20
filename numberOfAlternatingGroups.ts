function numberOfAlternatingGroups(colors: number[], k: number): number {
  let result = 0;
  let curPtr = 0;
  let curLen = 0;
  for (let i = 0; i < colors.length; i++) {
    let prevPtr = curLen - 1;
    while (curLen <= k) {
      console.log(curLen, i, curPtr, prevPtr);
      if (curPtr != i && curPtr != prevPtr && prevPtr >= 0) {
        if (colors[curPtr] == colors[prevPtr]) {
          curLen = 1;
          i = prevPtr;
          break;
        }
      }
      if (curLen == k) {
        result++;
        curLen--;
        i++;
      }else{
        
      }
      curLen++;
      prevPtr = (prevPtr + 1) % colors.length;
      curPtr = (curPtr + 1) % colors.length;
    }
  }
  return result;
}
console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3));
