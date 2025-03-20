function countOfSubstrings(word: string, k: number): number {
  let score: number = 0;
  let result: number = 0;
  let isExist: { [key: string]: number } = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  let isVowel: { [key: string]: boolean } = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let isNotVowel = new Map<string, boolean>();

  isNotVowel.size;

  let startPtr: number = 0;
  let endPtr: number = 0;
  const targetScore = k + 5;
  while (startPtr < word.length && endPtr < word.length) {
    console.log("HI");
    while (endPtr <= word.length && isNotVowel.size + score <= targetScore) {
      ///////
      console.log(isExist, isNotVowel, isNotVowel.size, score);
      if (isNotVowel.size + score == targetScore) {
        result++;
      }
      let curLetterEnd = word[endPtr];
      ///////
      if (isVowel[curLetterEnd]) {
        isExist[curLetterEnd]++;
        if (isExist[curLetterEnd] == 1) score++;
      }
      ///////
      if (
        !isNotVowel.has(curLetterEnd) &&
        isNotVowel.size != k &&
        !isVowel[curLetterEnd]
      ) {
        isNotVowel.set(curLetterEnd, true);
        // score++;
      }
      endPtr++;
    }
    while (startPtr <= word.length && isNotVowel.size + score > targetScore) {
      console.log(isExist, isNotVowel, isNotVowel.size, score);

      let curLetterStart = word[startPtr];
      ///////
      if (isVowel[curLetterStart]) {
        if (isExist[curLetterStart] == 1) score--;
        isExist[curLetterStart]--;
      }
      ///////
      if (
        isNotVowel.has(curLetterStart) &&
        isNotVowel.size <= k &&
        !isVowel[curLetterStart]
      ) {
        isNotVowel.delete(curLetterStart);
        // score--;
      }
      ///////
      if (isNotVowel.size + score == targetScore) {
        result++;
      }
      startPtr++;
    }
  }

  return result;
}
console.log(countOfSubstrings("aeiouf", 0));
