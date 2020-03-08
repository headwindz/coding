"use strict";
var romanToInt = function (romanNumeral) {
    if (romanNumeral == null || romanNumeral === '') {
        return 0;
    }
    var preNum = dumpValue(romanNumeral[0]);
    var sum = 0;
    for (var i = 0; i < romanNumeral.length; i++) {
        var currentNum = dumpValue(romanNumeral[i]);
        if (currentNum > preNum) {
            sum = sum - 2 * preNum + currentNum;
        }
        else {
            sum += currentNum;
        }
        preNum = currentNum;
    }
    return sum;
};
var dumpValue = function (char) {
    switch (char) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
};
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
//# sourceMappingURL=index.js.map