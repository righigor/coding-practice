## 🔍 Daily LeetCode Challenges

![Challenges Solved](https://img.shields.io/badge/Challenges%20Solved-2-blue)
![Last Update](https://img.shields.io/badge/Last_Update-2025--04--25-success)

🧠 This folder contains **daily LeetCode challenges** I'm solving to improve my problem-solving and algorithmic thinking.  
Each day I tackle a new problem and document my approach and solution.

### Challenge List
<!-- NEW_CHALLENGES_HERE -->
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
