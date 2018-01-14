export function throttle(fn = () => {},delay = 100){
    if(typeof fn !== 'function'){
        throw new TypeError(`[${fn}] 'must be a number.`);
    }
    if(typeof delay !== 'number' || delay <= 0){
        throw new TypeError(`[${delay}] 'must be a positive number.`);
    }
    let timer = null,
        last = 0;
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