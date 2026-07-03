// x = 121 -> true 
// x = 123 -> reverse: 321 -> false

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    let n = x;
    let y = 0;

    while (x != 0) {
        y = y * 10 + (x % 10);
        x = (x - (x % 10)) / 10;
    }

    if (y === n) {
        return true;
    } else {
        return false;
    }
};