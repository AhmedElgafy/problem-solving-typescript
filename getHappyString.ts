function getHappyString(n: number, k: number): string {
  const results: string[] = [];
  const isInResults: { [key: string]: boolean } = {};
  function backtracking(index: number, str: string) {
    if (index > 0 && str.length) {
      if (str[index] == str[index - 1]) {
        return;
      }
    }
    if (str.length == n && !isInResults[str]) {
      results.push(str);
      isInResults[str] = true;
      return;
    }
    for (let i = 97; i < 97+3; i++) {
      backtracking(index + 1, str + String.fromCharCode(i));
    }
    return;
  }
  backtracking(-1, "");
  return results[k - 1] || "";
}
