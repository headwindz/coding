"use strict";
var debounce = function (fn, time) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            fn.apply(void 0, args);
        }, time);
    };
};
var callCount = 0;
var debounced = debounce(function (value) {
    ++callCount;
    return value;
}, 32);
var results = [debounced('a'), debounced('b'), debounced('c')];
console.log(results);
console.log(callCount);
setTimeout(function () {
    results = [debounced('d'), debounced('e'), debounced('f')];
    console.log(results);
    console.log(callCount);
}, 300);
//# sourceMappingURL=index.js.map