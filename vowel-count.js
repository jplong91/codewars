// Return the number (count) of vowels in the given string. We will consider a, e, i, o, and u as vowels for this Kata. The input string will only consist of lower case letters and/or spaces.

// My Solution
function getCount(str) {
  let vowelPossibilities = ["a", "e", "i", "o", "u"];
  let vowels = str
    .split("")
    .filter(letter => vowelPossibilities.includes(letter));
  return vowels.length;
}

console.log(getCount("abaera"));

// Voted Best Practice
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// I saw this as an option but wanted to avoid a regex
