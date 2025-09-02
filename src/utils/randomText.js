// src/utils/randomText.js
const sampleTexts = [
  "The quick brown fox jumps over the lazy dog. This sentence contains all the letters in the English alphabet.",
  "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
  "Typing quickly and accurately is an essential skill for programmers and writers in the digital age.",
  "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers.",
  "Material-UI is a popular React UI framework that implements Google's Material Design principles.",
  "Practice makes perfect. The more you type, the better you will become at typing quickly and accurately.",
  "Coding requires precision and attention to detail. A single misplaced character can cause unexpected behavior.",
  "Web development encompasses many different skills and disciplines in the production and maintenance of websites.",
  "JavaScript is a programming language that conforms to the ECMAScript specification. It is high-level, often just-in-time compiled.",
  "The best way to learn programming is by writing code. Don't just read tutorials - practice building projects."
];

export const generateRandomText = () => {
  const randomIndex = Math.floor(Math.random() * sampleTexts.length);
  return sampleTexts[randomIndex];
};