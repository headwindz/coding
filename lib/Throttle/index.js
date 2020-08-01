"use strict";
var throttle = function (fn, wait) {
    var previous;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (previous != null) {
            return;
        }
        previous = +new Date;
        setTimeout(function () {
            fn.apply(void 0, args);
            previous = null;
        }, wait);
    };
};
var callCount = 0, throttled = throttle(function () { callCount++; }, 100);
throttled();
throttled();
throttled();
var lastCount = callCount;
setTimeout(function () {
    console.log(callCount, lastCount);
}, 200);
//# sourceMappingURL=index.js.map