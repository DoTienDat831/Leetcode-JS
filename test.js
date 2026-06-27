let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10,11,12,13,14,15,16,17];

const mergedArray = [...arr1, ...arr2];
mergedArray.sort((a, b) => a - b);

console.log("Merge: ", mergedArray);

let arrSize = arr1.length + arr2.length;
console.log("Arr Size: ", arrSize);

if (arrSize % 2 != 0) { // odd
    let mid = Math.floor(arrSize / 2);
    console.log(mid);
    console.log(mergedArray[mid]);
} else { //even
    let mid = arrSize / 2;
    console.log((mergedArray[mid] + mergedArray[mid - 1]) / 2);
}