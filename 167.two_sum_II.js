/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let L = 0;
    let R = numbers.length - 1;
    let sum = 0;

    while (L < R) {
        sum = numbers[L] + numbers[R];
        if (sum == target) {
            return [L + 1, R + 1];
        }
        if (sum < target) {
            L += 1;
        } else if (sum > target) {
            R -= 1;
        }
    }

    return 0;
};

nums = [2, 7, 9, 11, 15];
target = 9;
console.log(twoSum(nums, target));