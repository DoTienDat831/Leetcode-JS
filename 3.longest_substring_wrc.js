/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let myMap = new Map();
    let longest = 0;

    for(let r = 0; r < s.length; r++) {
        let currentChar = s[r];

        if (myMap.has(currentChar) && myMap.get(currentChar) >= l) {
            l = myMap.get(currentChar) + 1;
        }

        myMap.set(currentChar, r);

        longest = Math.max(longest, r-l+1);
    };

    return longest;
};

console.log(lengthOfLongestSubstring(" "))