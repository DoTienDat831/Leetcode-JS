/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = nums1.concat(nums2);
    merged.sort((a, b) => a - b);

    let arrSize = nums1.length + nums2.length;

    if (arrSize % 2 != 0) { // odd
        let mid = Math.floor(arrSize / 2);
        return merged[mid];
    } else { //even
        let mid = arrSize / 2;
        return (merged[mid] + merged[mid-1]) / 2;
    }
};