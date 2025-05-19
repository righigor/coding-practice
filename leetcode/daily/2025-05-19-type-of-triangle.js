// Type of Triangle
// Created on 2025-05-19

function isTriangulo(nums) {
  return (
    nums[0] < nums[1] + nums[2] &&
    nums[1] < nums[0] + nums[2] &&
    nums[2] < nums[0] + nums[1]
  )
}

function isEquilatero(nums) {
  return nums[0] === nums[1] && nums[0] === nums[2];
}

function isIsosceles(nums){
  return (
    nums[0] === nums[1] ||
    nums[0] === nums[2] ||
    nums[1] === nums[2]
  )
}
function isEscaleno(nums) {
  return (
    nums[0] !== nums[1] &&
    nums[0] !== nums[2] &&
    nums[1] !== nums[2]
  )
}
/**
 * @param {number[]} nums
 * @return {string}
*/
function solution(nums) {
  if (!isTriangulo(nums)) {
    return "none";
  }
  if (isEquilatero(nums)) {
    return "equilateral";
  }
  if (isIsosceles(nums)) {
    return "isosceles";
  }
  if (isEscaleno(nums)) {
    return "scalene";
  }
}
