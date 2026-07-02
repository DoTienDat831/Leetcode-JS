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

console.log(fib_top_down(2));