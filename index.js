const fs = require("fs");


function createLog(date, type, data) {
  fs.writeFileSync(
    "hello.txt",
    `Date: ${date}\nType: ${type}\nMessage: ${data}\n\n`
  );
  return "Log created successfully";
}


function readLog() {
  if (!fs.existsSync("hello.txt")) {
    return "File does not exist";
  }

  const content = fs.readFileSync("hello.txt", "utf-8");
  return content;
}


function updateLog(date, type, data) {
  fs.appendFileSync(
    "hello.txt",
    `Date: ${date}\nType: ${type}\nMessage: ${data}\n\n`
  );
  return "Log updated successfully";
}


function deleteLog() {
  if (!fs.existsSync("hello.txt")) {
    return "File already deleted";
  }

  fs.unlinkSync("hello.txt");
  return "Log deleted successfully";
}


function writeLog() {
  fs.appendFileSync(
    "hello.txt",
    `Time: ${new Date()}\nMessage: Log created\n-----------------\n`
  );

  console.log("Log written");
}

console.log(createLog(new Date(), "ERROR", "This is an error"));
//console.log(updateLog(new Date(), "INFO", "This is info log"));
console.log(readLog());
setInterval(() => {
  console.log(updateLog(new Date(), "INFO", "This is info log"));
}, 1000);
updateLog(new Date(), "INFO", "This is info log");