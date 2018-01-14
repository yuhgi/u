/**
 * @description get type of `obj`.
 * @param {obj} fn The functionto throttle.
 * @return {string}
 * 
 * @author yuhgi
 * @version 0.0.1
 */

const TYPE_MAP = {
    "[object Undefined]":"undefined",
    "[object String]":"string",
    "[object Boolean]":"boolean",
    "[Object Number]":"number",
    "[object Object]":"object",
    "[object Function]":"function",
    "[object Array]":"array",
    "[object Null]":"null",
    "[object RegExp]":"regexp",
    "[object Date]":"date",
    "[object JSON]":"json",
    "[object Set]":"set",
    "[object WeakSet]":"weakset",
    "[object Map]":"map",
    "[object WeakMap]":"weakmap",
    "[object Symbol]":"symbol",
};
export function type(obj){
    return TYPE_MAP[Object.prototype.toString.call(obj)] || "unknown";
}