// Climbing a staircase. It takes n steps to reach the top.
// Each time can climb either 1 or 2 steps.
// How many ways can you climb to reach the top ?

// dp[i] number of ways to reach the top
// To climb to "i" stair, we'll have two ways
    // from i-1
    // from i-2
    // => ways to get to "i" is the ways to get to i-1 plus ways to get to i-2

// Base cases: 
    // dp[1] = 1
    // dp[2] = 2

// Calculate loop: from i = 3 to n


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Base cases
    if (n == 1) {return 1;}
    if (n == 2) {return 2;}

    let prev2 = 1; // dp[1]
    let prev1 = 2; // dp[2]

    for(let i = 3; i <= n; i++) {
        let current = prev1 + prev2;

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};