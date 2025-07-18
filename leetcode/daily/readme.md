## 🔍 Daily LeetCode Challenges


![Challenges Solved](https://img.shields.io/badge/Challenges%20Solved-5-blue)
![Last Update](https://img.shields.io/badge/Last_Update-2025--05--21-success)


🧠 This folder contains **daily LeetCode challenges** I'm solving to improve my problem-solving and algorithmic thinking.  
Each day I tackle a new problem and document my approach and solution.

### Challenge List
<!-- NEW_CHALLENGES_HERE -->
### [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)
- **Problem**: Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

- **Approach**: To avoid modifying the matrix while scanning, we first record all original zero positions in a separate auxiliary matrix. Then, in a second pass, we zero out the corresponding rows and columns in the original matrix based on those marks.
This approach ensures correctness at the cost of O(m * n) extra space.

- **Solution File**: `daily/2025-05-21-set-matrix-zeroes.c`


### [Zero Array Transformation I](https://leetcode.com/problems/zero-array-transformation-i/)
- **Problem**: You are given an integer array nums of length n and a 2D array queries, where queries[i] = [li, ri].
For each queries[i]:
Select a subset of indices within the range [li, ri] in nums.
Decrement the values at the selected indices by 1.
A Zero Array is an array where all elements are equal to 0.
Return true if it is possible to transform nums into a Zero Array after processing all the queries sequentially, otherwise return false.

- **Approach**: The naive solution iterates over every range in queries and decrements each value directly, resulting in a time complexity of O(n * q), which leads to a Time Limit Exceeded (TLE) for large inputs.
To optimize this, the difference array (prefix sum trick) is used to simulate range updates efficiently:
We maintain a diff array that marks the start and end of each decrement operation.
Instead of updating nums during each query, we accumulate these changes and apply them in a single pass.
This reduces the time complexity to O(n + q).
After applying the cumulative effect of all operations, we check if all values in nums are zero or less (clamped at zero). If any value remains positive, the transformation is impossible.

- **Solution File**: `daily/2025-05-20-zero-array-transformation-i.js`


### [Type of Triangle](https://leetcode.com/problems/type-of-triangle/)
- **Problem**: You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.
  - A triangle is called equilateral if it has all sides of equal length.
  - A triangle is called isosceles if it has exactly two sides of equal length.
  - A triangle is called scalene if all its sides are of different lengths.
  - Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

- **Approach**: The solution is structured using helper functions for clarity and modularity. First, it checks if the three sides satisfy the triangle inequality theorem. If they don’t, it returns `"none"`. If valid, the code checks the type of triangle by comparing side lengths:
  - If all sides are equal, it's `"equilateral"`.
  - If exactly two sides are equal, it's `"isosceles"`.
  - If all sides are different, it's `"scalene"`.

These checks are done in order of specificity, ensuring correct classification.

- **Solution File**: `daily/2025-05-19-type-of-triangle.js`


### [Count of Interesting Subarrays](https://leetcode.com/problems/count-of-interesting-subarrays/)
- **Problem**: You are given a 0-indexed integer array `nums`, an integer `modulo`, and an integer `k`.
  Your task is to find the count of subarrays that are interesting.
  A subarray `nums[l..r]` is interesting if the following condition holds:
  Let `cnt` be the number of indices `i` in the range `[l, r]` such that `nums[i] % modulo == k`. Then, `cnt % modulo == k`.
  Return an integer denoting the count of interesting subarrays.

- **Approach**: A brute-force solution would involve checking all possible subarrays, which leads to time limit exceeded on large inputs. To optimize, I use a prefix count of how many values satisfy num % modulo === k and store the counts modulo modulo in a HashMap. This allows to calculate in O(n) time how many previous prefix counts make the current one satisfy the condition using modular arithmetic and prefix sums.

- **Solution File**: `daily/2025-04-25-count-of-interesting-subarrays.js`


### [Count the Hidden Sequences](https://leetcode.com/problems/count-the-hidden-sequences/)
- **Problem**: Description of the problem goes here.
- **Approach**: Brief explanation of the approach used to solve the problem.
- **Solution File**: `daily/2025-04-21-count-the-hidden-sequences.js`
