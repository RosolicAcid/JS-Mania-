/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    var _array = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) _array.push(arr[i]);
    }
    return _array;
};