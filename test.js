nums = [-100,-70,-60,110,120,130,160];
nums.sort();
console.log(nums)

let sum = 0;
let saved = [];

for(let i  = 0; i < nums.length; i++){
    let left = i + 1;
    let right = nums.length - 1;
    while(left < right) {
        sum = nums[i] + nums[left] + nums[right];
        if(sum == 0) {
            saved.push([nums[i], nums[left], nums[right]]);
            right -= 1;
        } else if (sum > 0) {
            right -= 1;
            if(nums[right] == nums[i]) {
                right -= 1;
            }
        } else if (sum < 0) {
            left += 1;
            if(nums[left] == nums[i]) {
                left += 1;
            }
        }
    }
}

console.log(saved);