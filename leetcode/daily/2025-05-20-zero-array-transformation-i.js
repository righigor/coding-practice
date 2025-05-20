// Zero Array Transformation I
// Created on 2025-05-20

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
function solution(nums, queries) {
  // Solução Não Otimizada
  // for (let i = 0; i < queries.length; i++) {
  //   const [l, r] = queries[i];
  //   for (let j = l; j <= r; j++) {
  //     if (nums[j] != 0) {
  //       nums[j]--;
  //     }
  //   }
  // }
  // const sum = nums.reduce((prev, curr) => prev += curr);
  // if (sum > 0) {
  //   return false;
  // }
  // return true;

  const n = nums.length;
  const diff = Array(n + 1).fill(0);

  for (const [l, r] of queries) {
    diff[l]--;
    if (r + 1 < n) diff[r + 1]++;
  }

  let running = 0;
  for (let i = 0; i < n; i++) {
    running += diff[i];
    nums[i] = Math.max(0, nums[i] + running);
    if (nums[i] > 0) return false;
  }

  return true;
}


const nums = [1,0,1]
const queries = [[0,2]]

console.log(solution(nums, queries))