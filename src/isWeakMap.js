/**
 * @description Check if `o` is WeakMap.
 * @param {Any} o The obj to be checked.
 * @return {Boolean}
 * 
 * @author yuhgi
 * @version 0.0.1
 */

import type from "./type";
export default function(o){
    return type(o) === "weakmap";
}