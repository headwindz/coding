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
//# sourceMappingURL=index.js.map