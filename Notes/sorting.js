// bubble sort
var bubble_sort = function(nums){
    n = nums.length;

    for(let i = 0; i <= n; i ++) {
        for(let j = 0; j <= n - i - 1; j++) {
            if(nums[j] > nums[j + 1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            }
        }
    }
    
    return nums;
}

x = [1,0,-1,0,-2,2];
console.log("Bubble sort: ", bubble_sort(x));