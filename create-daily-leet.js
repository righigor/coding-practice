const fs = require("fs");
const path = require("path");

// Pega os argumentos: nome da questão e a extensão do arquivo
const [, , title, extension] = process.argv;

if (!title || !extension) {
  console.error("❌ Please provide both question title and file extension.");
  console.error('Usage: node create-daily.js "Question Title" "js"');
  process.exit(1);
}

// Converte título para kebab-case
const kebabCase = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

// Gera a data de hoje no formato YYYY-MM-DD
const today = new Date().toISOString().split("T")[0];

// Caminho final
const folderPath = path.join(__dirname, "leetcode", "daily");
const filePath = path.join(folderPath, `${today}-${kebabCase}.${extension}`);

// Cria pasta se não existir
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

// Conteúdo base do arquivo para JavaScript (você pode customizar conforme a linguagem)
const templates = {
  js: `// ${title}
// Created on ${today}

function solution() {
  // Your code here
}
`,

  py: `# ${title}
# Created on ${today}

def solution():
    # Your code here
    pass
`,

  c: `/* ${title} 
   * Created on ${today} 
   */

#include <stdio.h>

void solution() {
    // Your code here
}

int main() {
    solution();
    return 0;
}
`,

  java: `// ${title}
// Created on ${today}

public class Solution {
    public static void solution() {
        // Your code here
    }

    public static void main(String[] args) {
        solution();
    }
}
`,
};

const template = templates[extension];
if (!template) {
  console.error(`❌ Unsupported file extension: ${extension}`);
  console.error("Supported extensions: js, py, c, java");
  process.exit(1);
}

// Cria o arquivo
fs.writeFileSync(filePath, template);
console.log(`✅ File created: ${filePath}`);

const readmePath = path.join(folderPath, "readme.md");

const anchor = "<!-- NEW_CHALLENGES_HERE -->";

fs.readFile(readmePath, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading README.md", err);
    return;
  }

  const newChallenge =
    `### [${title}](https://leetcode.com/problems/${title
      .replace(/\s+/g, "-")
      .toLowerCase()}/)\n` +
    `- **Problem**: Description of the problem goes here.\n` +
    `- **Approach**: Brief explanation of the approach used to solve the problem.\n` +
    `- **Solution File**: \`${path.join(
      "daily",
      `${today}-${kebabCase}.${extension}`
    )}\`\n\n`;

  if (!data.includes(anchor)) {
    console.error("❌ Anchor not found in README.md");
    return;
  }

  const matches = data.match(
    /### \[.+\]\(https:\/\/leetcode.com\/problems\/.+\)/g
  );
  const totalChallenges = matches ? matches.length : 0;

  // Gera nova badge com valor atualizado
  const newBadge = `![Challenges Solved](https://img.shields.io/badge/Challenges%20Solved-${
    totalChallenges + 1
  }-blue)`;
  const todayBadge = `![Last Update](https://img.shields.io/badge/Last_Update-${today.replace(/-/g, '--')}-success)`;

  const updatedReadme = data
    .replace(/!\[Challenges Solved\]\(.+?\)/, newBadge)
    .replace(/!\[Last Update\]\(.+?\)/, todayBadge)
    .replace(anchor, `${anchor}\n${newChallenge}`);

  fs.writeFile(readmePath, updatedReadme, "utf8", (err) => {
    if (err) {
      console.log("Error updating README.md", err);
    } else {
      console.log(`✅ Successfully updated README with "${title}"`);
    }
  });
});
