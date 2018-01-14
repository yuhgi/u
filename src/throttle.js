/**
 * @description Creates a throttled functions that only invokes `fn` at most once per 
 * every `delay` milliseconds.`fn` will be executed at the first invoke.
 * @param {Function} fn The functionto throttle.
 * @param {number} delay The number of milliseconds to execute `fn`.
 * @return {function}
 * 
 * @author yuhgi
 * @version 0.0.1
 */
export function throttle(fn = () => {},delay = 100){
    if(typeof fn !== 'function'){
        throw new TypeError(`[${fn}] 'must be a number.`);
    }
    if(typeof delay !== 'number' || delay <= 0){
        throw new TypeError(`[${delay}] 'must be a positive number.`);
    }
    let timer = null,
        last = 0;// at the first invoke,exec `fn`
    const context = this;
    return function(...args){
        const cur = +new Date();
        if(cur - last > delay){
            last = cur;
            fn.apply(context,args);
        }else{
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = cur;
                fn.apply(context,args);
            },delay);
        }
    };
}