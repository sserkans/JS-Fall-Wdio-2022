function removeNumFromArray(numToRemove, numArray) {
    return numArray.filter((num) => (num != numToRemove));
}

const arr1_1 = [1, 2, 3, 4, 5];
console.log(`Input array -> ${arr1_1} | numToRemove -> 2`);
const numArrayAfterRemoval1_1 = removeNumFromArray(2, arr1_1);
console.log(`Output array -> ${numArrayAfterRemoval1_1}`);
    // [1, 3, 4, 5]
    
const arr1_2 = [21, 32, 12, 43, 45, 65, 12];
console.log(`\nInput array -> ${arr1_2} | numToRemove -> 12`);
const numArrayAfterRemoval1_2 = removeNumFromArray(12, arr1_2);
console.log(`Output array -> ${numArrayAfterRemoval1_2}`);
    // [21, 32, 43, 45, 65]

const arr1_3 = [-1, 2, 43, 65];
console.log(`\nInput array -> ${arr1_3} | numToRemove -> 11`);
const numArrayAfterRemoval1_3 = removeNumFromArray(11, arr1_3);
console.log(`Output array -> ${numArrayAfterRemoval1_3}`);
    // [-1, 2, 43, 65]
