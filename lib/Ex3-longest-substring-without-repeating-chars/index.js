"use strict";
var lengthOfLongestSubstring = function (str) {
    var len = str.length;
    var result = 0;
    var arr = [];
    var pre = 0, current = 0;
    while (pre < len && current < len) {
        var char = str.charAt(current);
        if (!arr.includes(char)) {
            current++;
            arr.push(char);
            result = Math.max(result, current - pre);
        }
        else {
            pre++;
            arr = arr.slice(1);
        }
    }
    return result;
};
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
//# sourceMappingURL=index.js.map