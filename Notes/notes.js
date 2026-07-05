// Dynamic programming
    // Top-down (Memoization): Start from the biggest problem, recursively call the smaller problems.
        // Use an array or hash to store the results.
        // When encounter a solved subproblem, simply retrieve the result.
        
/**
 * @param {number} n
 * @return {number}
 */
var fib_top_down = function(n) {
    let memo = new Map(); // hash table

    var dfs = function(x) {
        if (x <= 1) {
            return x;
        }

        if (memo.has(x)){
            return memo.get(x);
        }

        let result = dfs(x-1) + dfs(x-2);
        memo.set(x, result);

        return result;
    }

    return dfs(n); 
}

    // Bottom-up (Tabulation): Start from the smallest problem called base cases, store the results into an array.
        // Use loop to reach the biggest problem.
        
/**
 * @param {number} n
 * @return {number}
 */
var fib_bottom_up= function(n) {
    if (n <= 1) {
        return n;
    }

    let dp = new Array(n+1).fill(0);

    dp[1] = 1;

    for (let i = 2; i <= n+1; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}