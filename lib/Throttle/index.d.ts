declare const throttle: (fn: any, wait: number) => (...args: any) => void;
declare var callCount: number, throttled: (...args: any) => void;
declare var lastCount: number;
