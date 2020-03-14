"use strict";
var divByTen = function (num) { return Math.floor(num / 10); };
var isPalindrome = function (num) {
    if (num < 0) {
        return false;
    }
    if (num < 10) {
        return true;
    }
    if (num % 10 === 0) {
        return num === 0;
    }
    var dump = function (forwardNum, backwardNum) {
        if (forwardNum <= backwardNum) {
            // sufficient backward search
            return forwardNum === backwardNum || // even digits
                (backwardNum >= 10 && forwardNum === divByTen(backwardNum)); // old digits
        }
        var forward = divByTen(forwardNum);
        var backward = backwardNum * 10 + forwardNum % 10;
        return dump(forward, backward);
    };
    return dump(Math.floor(num / 10), num % 10);
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(1234));
console.log(isPalindrome(10));
console.log(isPalindrome(3));
console.log(isPalindrome(101));
console.log(isPalindrome(21120));
//# sourceMappingURL=index.js.map