"use strict";
var merge = function (char, perms) {
    if (perms.length === 0) {
        return [char];
    }
    var length = perms[0].length; // all permutation at the same level should have same length
    var results = [];
    var index = length;
    while (index-- >= 0) {
        var arr = perms.map(function (perm) { return "" + perm.slice(0, index) + char + perm.slice(index); });
        results.push.apply(results, arr);
    }
    return results;
};
var allPermutation = function (str) {
    if (str.length === 0) {
        return [];
    }
    return merge(str[0], allPermutation(str.slice(1)));
};
console.log(allPermutation('a'));
console.log(allPermutation('ab'));
console.log(allPermutation('abc'));
//# sourceMappingURL=index.js.map