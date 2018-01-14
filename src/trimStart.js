/**
 * @description Delete the start space character of `s`.
 * @param {String} s The string to be trim.
 * @return {String}
 * 
 * @author yuhgi
 * @version 0.0.1
 */

export default function(s){
    return s.replace(/(^\s+)/,"");
}