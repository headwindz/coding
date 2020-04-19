const lengthOfLongestSubstring = function (str: string) {
  const len = str.length;
  let result = 0;
  let arr: string[] = [];
  let pre = 0, current = 0;
  while(pre < len && current < len) {
    let char = str.charAt(current);
    if (!arr.includes(char)) {
      current ++;
      arr.push(char);
      result = Math.max(result, current - pre);
    } else {
      pre++;
      arr = arr.slice(1);
    }
  }
  return result;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));