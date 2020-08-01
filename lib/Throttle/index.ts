const throttle = (fn: any, wait: number) => {
  let previous: number | null;
  return (...args: any) => {
    if(previous != null) {
      return;
    }
    previous = +new Date;
    setTimeout(() => {
      fn(...args);
      previous = null;
    }, wait)
  }
};

var callCount = 0,
    throttled = throttle(function() { callCount++; }, 100);

throttled();
throttled();
throttled();

    var lastCount = callCount;

    setTimeout(function() {
      console.log(callCount, lastCount);
    }, 200);