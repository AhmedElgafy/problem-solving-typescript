function numTilePossibilities(tiles: string): number {
    let freq: { [key: string]: number } = {};
    for (let ch of tiles) {
      freq[ch] = (freq[ch] || 0) + 1;
    }
  
    function backtrack(): number {
      let count = 0;
      for (let key in freq) {
        if (freq[key] > 0) {
          freq[key]--; // Use the letter
          count += 1 + backtrack(); // Count current and recurse
          freq[key]++; // Backtrack
        }
      }
      return count;
    }
  
    return backtrack();
  }
  
console.log(numTilePossibilities("AAB"));
