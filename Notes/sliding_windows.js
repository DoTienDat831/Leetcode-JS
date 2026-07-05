// Fixed-size Sliding Window
// Window Size is always "k".

let nums = [2, 1, 5, 1, 3, 2];

// find largest sum of every k segment in the array.
// k = 3

/*
[2 1 5] 1 3 2 => 2 + 1 + 5 = 8
2 [1 5 1] 3 2 => 8 - 2 + 1 = 7
2 1 [5 1 3] 2 => 7 - 1 + 3 = 9 *** Largest
2 1 5 [1 3 2] => 9 - 5 + 2 = 6
*/ 

// sum = sum - nums[left] + nums[right]

let k = 3;
let sum = 0;

for(let i = 0; i < k; i++) {
    sum += nums[i];
}

let result = sum;

for(let i = k; i < nums.length; i++) {
    sum += nums[i];
    sum -= nums[i - k];
    result = Math.max(sum, result);
}

console.log(result); // 9

