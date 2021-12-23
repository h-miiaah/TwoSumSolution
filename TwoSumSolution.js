/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++){
        let num1 = nums[i];
        let num2 = target - num1;
        if (map.has(num2)){
            return [i, map.get(num2)];
        }
        map.set(num1, i);
    }
};

/**

    - Create a map to store the number and its index.
    - Loop through the array and for each number, we calculate the expected number that should come after it.
    - If the expected number is in the map, we have found a solution and return the indices of both numbers.
    - If not, we store the current number and its index in the map.

 **/
