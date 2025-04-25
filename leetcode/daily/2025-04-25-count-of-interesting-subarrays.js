// Count of Interesting Subarrays
// Created on 2025-04-25

/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
function solution(nums, modulo, k) {
  //My soulution
  // let count = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   let cnt = 0;
  //   for (let j = i; j < nums.length; j++) {
  //     if (nums[j] % modulo === k) {
  //       cnt++;
  //     }
  //     if (cnt % modulo === k) {
  //       count++;
  //     }
  //   }
  // }
  // return count;

  // Optimized solution
  let count = 0;
  let prefix = 0;
  const map = new Map();
  map.set(0, 1);

  for (const num of nums) {
    if (num % modulo === k) {
      prefix += 1;
    }
    const remainder = prefix % modulo;
    const want = (remainder - k + modulo) % modulo;

    if (map.has(want)) {
      count += map.get(want);
    }

    map.set(remainder, (map.get(remainder) || 0) + 1);
  }

  return count;
}

console.log(solution([3,2,4], 2, 1))
