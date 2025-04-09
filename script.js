let letterSearch = ["non", "asal", "banan", "olma", "aziza", "gul", "avtomobil"];

let nbor = [];
let nyoq = [];

for (let word of letterSearch) {
  if (word.toLowerCase().includes("n")) {
    nbor.push(word);
  } else {
    nyoq.push(word);
  }
}

console.log(nbor, "'n' harfi ishtirok etgan so'zlar");
console.log(nyoq, "'n' harfi ishtirok etmagan so'zlar");
