//3
let numbers = [1, 1121, 12, -3, 7, 24, 9969, 4, 69];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);

//1
function pow(a, b) {
  return Math.pow(a, b);
}

let result = pow(2, 10);
console.log(result);

//4
const strings = ["HELLO", "WORLD", "JS", "GEOLAB"];

const capitalizedStrings = [];

for (const string of strings) {
  const firstCharacter = string[0].toUpperCase();

  const restOfCharacters = string.substring(1).toLowerCase();

  capitalizedStrings.push(firstCharacter + restOfCharacters);
}

console.log(capitalizedStrings.join(" "));

//2
function myFunction(...args) {
  console.log(args[0]);
  console.log(args[1]);

  for (const arg of args) {
    console.log(arg);
  }
}
