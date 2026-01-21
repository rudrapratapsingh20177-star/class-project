//console.log("Hello, World!");
const fs = require("fs");

// Read the input file
fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file");
    return;
  }

  // Count words
  const words = data.trim().split(/\s+/);
  const wordCount = words.length;

  // Write the count to a new file
  fs.writeFile(
    "output.txt",
    `Total number of words: ${wordCount}`,
    (err) => {
      if (err) {
        console.log("Error writing file");
        return;
      }
      console.log("Word count written to output.txt");
    }
  );
});
