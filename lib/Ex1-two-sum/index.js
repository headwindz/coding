"use strict";
var twoSum = function (arr, sum) {
    var map = {};
    for (var i = 0, len = arr.length; i < len; i++) {
        var num = arr[i];
        var complement = sum - num;
        if (map[complement] != null) {
            return [map[complement], i];
        }
        map[num] = i;
    }
    return null;
};
//# sourceMappingURL=index.js.map