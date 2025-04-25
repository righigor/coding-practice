// Count the Hidden Sequences
// Created on 2025-04-21

function solution(differences, lower, upper) {
  let minPrefix = 0;
  let maxPrefix = 0;
  let prefixSum = 0;

  for (let diff of differences) {
    prefixSum += diff;
    minPrefix = Math.min(minPrefix, prefixSum);
    maxPrefix = Math.max(maxPrefix, prefixSum);
  }

  const minStart = lower - minPrefix;
  const maxStart = upper - maxPrefix;

  const result = maxStart - minStart + 1;
  return result > 0 ? result : 0;
}

console.log(solution([2,2,3], 1, 8))