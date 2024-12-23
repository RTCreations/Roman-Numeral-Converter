const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");
const input = document.getElementById("number");

const numerals = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convert.click()
  }
});

convert.addEventListener("click", () => {
  let val = input.value;
  if (!val) {
    output.innerText = "Please enter a valid number.";
  } else if (val < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (val > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999"
  } else {
    let string = "";

    for (const [char, number] of numerals) {
      while (number <= val) {
        string += char;
        val -= number;
      }
    }
    output.innerText = string;
  }
});