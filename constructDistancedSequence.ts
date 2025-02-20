function constructDistancedSequence(n: number): number[] {
  const res: number[] = Array(n * 2 - 1).fill(0);
  const num_repeat: { [key: number]: number } = {};
  Array(n)
    .fill(0)
    .forEach((_, index) => {
      let num = index + 1;
      if (num == 1) {
        num_repeat[1] = 1;
      } else {
        num_repeat[num] = 2;
      }
    });
  function creator(index: number) {
    if (index > res.length) {
      return;
    }
    for (let i = n; i > 0; i--) {
      //is in the array?
      const numRepeat = num_repeat[i];
      if (numRepeat != 0 || res[index] != 0) {
        if (numRepeat == 1) {
          res[index] = i;
          console.log(res);
        } else {
          res[index] = i;
          if (res[index + i] != 0) {
            res[index + i] = i;
          }
        }
        if (res[index + 1] != 0) {
          let y = index;
          while (res[y] != 0) {
            y++;
            if (y > res.length) break;
          }
          creator(y);
        } else {
          creator(index + 1);
        }
        res[index] = 0;
        if (res[index + i] != 0) {
          res[index + i] = 0;
        }
      } else {
        return;
      }
    }
    return;
  }
  creator(0);
  return res;
}
console.log(constructDistancedSequence(1));
