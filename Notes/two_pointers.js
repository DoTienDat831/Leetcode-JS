// Opposite Direction
let nums = [2, 3, 4, 7, 11, 15];
target = 15;
// left is the first element
// right is the last element
let left = 0;
let right = nums.length - 1;
let sum = 0;

while (left < right) {
    sum = nums[left] + nums[right];
    if (sum == target) {
        console.log(nums[left], nums[right]);
        break
    }
    if (sum < target) {
        left += 1;
    } else if (sum > target) {
        right -= 1;
    }
}
