/**
 * @description get type of `obj`.
 * @param {Any} obj The variable to be judge.
 * @return {String}
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
    "[object Arguments]":"arguments",
    "[object Set]":"set",
    "[object WeakSet]":"weakset",
    "[object Map]":"map",
    "[object WeakMap]":"weakmap",
    "[object Symbol]":"symbol",
};
export default function(obj){
    return TYPE_MAP[Object.prototype.toString.call(obj)] || "unknown";
}