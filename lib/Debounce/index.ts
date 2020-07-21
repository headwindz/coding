const debounce = (fn: any, time: number) => {
  let timeout: number;
  return (...args: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, time)
  }
}