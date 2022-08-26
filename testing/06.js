var maxRepeating = function (sequence, word) {
  if (sequence.indexOf(word) === -1) return 0;

  let num = 0,
    i = 0,
    w = 0;

  while (i <= sequence.length) {
    // console.log("----", i, w);

    if (sequence[i] === word[w]) {
      // num++;
      // console.log(w, num);
      w++;
      if (w === word.length - 1) num++;
    }
    i++;
    console.log("w:", w);
    if (w >= word.length) w = 0;
  }
  // console.log(num);
  // if (num % 2 === 0) {
  //     num /= (word.length);
  // } else {
  //     num = (num - 1) / word.length;
  // }
  console.log(num);

  return num;
};

const s = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
const word = "aaaba";

maxRepeating(s, word);
