# 🚀 Coding Practice

[![LeetCode](https://img.shields.io/badge/LeetCode-practice-orange)](https://leetcode.com/)
[![Codewars](https://img.shields.io/badge/Codewars-kata-red)](https://www.codewars.com/)
[![GitHub repo size](https://img.shields.io/github/repo-size/righigor/coding-practice?color=blue)](https://github.com/righigor/coding-practice)
[![Last Commit](https://img.shields.io/github/last-commit/righigor/coding-practice)](https://github.com/righigor/coding-practice)
![Auto Merge Daily](https://github.com/righigor/coding-practice/actions/workflows/auto-merge.yml/badge.svg)
[![Top Language](https://img.shields.io/github/languages/top/righigor/coding-practice?color=informational)](https://github.com/righigor/coding-practice)


## 📚 Table of Contents
- [About](#-about)
- [Goal](#-goal)
- [Folder Structure](#-folder-structure)
- [Practice Stats](#-practice-stats)
- [Create Exercise File Script](#-create-exercise-file-script)
- [Automation](#-automation)
  - [Workflow Details](#-workflow-details)

---

## 📌 About

This repository is a collection of programming challenges I solve to practice problem-solving, algorithms, and data structures.

Most challenges come from platforms like [LeetCode](https://leetcode.com/) and [Codewars](https://www.codewars.com/).

Each solution is implemented with clarity and often contains comments explaining the logic behind it.

---

## 🎯 Goal

- ✅ Improve logical thinking
- ✅ Master data structures and algorithms
- ✅ Prepare for coding interviews
- ✅ Build a reference library of patterns and approaches

---

## 📁 Folder Structure

```bash
coding-practice/
├── .github/
│   └── workflows/
│       └── auto-merge.yml
├── leetcode/
│   └── daily/
│       └── 2025-04-21-name-of-question.js
├── codewars/
│   ├── 8kyu/
│   └── 6kyu/
├── create-daily-leet.js
└── README.md
```

- `leetcode/daily/`: Contains daily LeetCode challenges.  
  Files are named using the format `YYYY-MM-DD-question-title.js` for better organization and readability.

- `codewars/`: Contains Codewars challenges, organized by difficulty level (8kyu, 6kyu, etc.).

- `README.md`: This file, providing an overview of the repository and instructions for use.

- `create-daily-leet.js`: Script to create new exercise files automatically.

---

## 🧠 Practice Stats

| LeetCode | Codewars |
|----------|----------|
| ![LeetCode Stats](https://leetcard.jacoblin.cool/righigor?theme=dark&font=Source%20Code%20Pro&extension=activity&borderRadius=10px&height=200) | ![Codewars Stats](https://www.codewars.com/users/righigor/badges/large) |

---

## 💻 Create Exercise File Script

### Overview

This repository includes a script to automatically generate a new exercise file for solving the **daily questions** from **LeetCode**. The script allows you to specify the exercise name and its extension (JavaScript, Python, C or Java), and it creates a new file in the appropriate directory for the day's challenge.

### How to Use

1. Open your terminal and navigate to the root of the repository.

2. Run the following command to execute the script and create a new exercise file:

    ```bash
    node create-daily-leet.js <exercise-name> <extension>
    ```

    Example:
    ```bash
    node create-daily-leet.js count-good-triplets js
    ```

    This command will create a file called `count-good-triplets.js` inside the appropriate directory (`leetcode/daily/`).

3. After running the command, the file will be created, but it might not show up immediately in the VSCode file explorer.

### Troubleshooting (If the file doesn't appear in VSCode)

If the newly created file does not appear instantly in the VSCode file explorer:

1. **Manually Refresh the Explorer:**
   - In VSCode, click the **Refresh Explorer** button on the file explorer pane to update the view and show the newly created file.
   
   Or, you can reload the entire window by pressing:
   - `Ctrl + R` (Windows/Linux) or `Cmd + R` (macOS).

2. **Check File Existence in Terminal:**
   - If the file still doesn't appear, check the directory from the terminal to confirm it exists:
     ```bash
     ls leetcode/daily
     ```

If the file exists but doesn't show up in VSCode, refreshing or restarting VSCode should solve the problem.

---

## 🔁 Automation

This repository uses a GitHub Actions workflow to automatically merge the `daily-leetcode` branch into the `main` branch on every push to `daily-leetcode`.

This helps keep the `main` branch always up to date with the latest solved problems without requiring manual pull requests.

### 🛠 Workflow Details

- **Workflow file**: [`auto-merge-daily.yml`](.github/workflows/auto-merge-daily.yml)
- **Trigger**: Push events on the `daily-leetcode` branch
- **Action**: 
  - Checks out the repository  
  - Switches to the default branch (`main`)  
  - Merges changes from `daily-leetcode`  
  - Pushes the updated `main` branch

This automation is especially useful for keeping the project organized and up to date while working on daily coding challenges.

## 🔍 LeetCode Challenges

### [Count Good Triplets](https://leetcode.com/problems/count-good-triplets/)
- **Problem**: Given an array of integers, find the number of "good" triplets where the condition for being a good triplet is defined by the problem.
- **Approach**: I used a two-pointer technique to count the triplets efficiently.
- **Solution File**: `leetcode/daily/2025-04-01-count-good-triplets.js`
