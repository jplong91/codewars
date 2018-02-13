// Complete the solution so that it reverses all of the words within the string passed in.

// My Solution
function reverseWords(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ");
}

console.log(reverseWords("My name is John"));

// This was also best practice and I felt really good about how clear and concise I made this!
