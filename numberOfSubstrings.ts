function numberOfSubstrings(s: string): number {
  let result = 0;
  let left = 0;
  const exist = { a: 0, b: 0, c: 0 };
  for (let right = 0; right < s.length; right++) {
    exist[s[right]]++;
    while (exist["a"] > 0 && exist["b"] > 0 && exist["c"] > 0) {
      result = result + (s.length - right);
      exist[s[left]]--;
      left++;
    }
  }
  return result;
}
console.log(numberOfSubstrings("abcabc"));
