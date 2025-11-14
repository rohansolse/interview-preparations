let nums = [1, 2, 3, 4];
delete nums[2];
console.log(nums);

// Explanation:
// The delete operator removes the element at index 2, but it does not change the length of the array.
// Therefore, nums becomes [1, 2, <empty>, 4], and the length remains 4.