function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const gridLength = grid.length * grid[0].length;
  const hashing: { [key: number]: number } = {};
  const result: number[] = [];
  for (let i = 0; i < grid.length; i++) {
    for (let y = 0; y < grid[i].length; y++) {
      if (hashing[grid[i][y]]) {
        hashing[grid[i][y]]++;
        if (hashing[grid[i][y]] > 1) {
          result.push(grid[i][y]);
        }
      } else {
        hashing[grid[i][y]] = 1;
      }
    }
  }
  for (let i = 1; i <= gridLength; i++) {
    if (!hashing[i]) {
      result.push(i);
    }
  }
  return result;
}
console.log(
  findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]])
);
