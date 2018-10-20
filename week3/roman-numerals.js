// Roman number for each digits
// support up to thousand
const ROMAN_NUMBER = [
  { one: "I", five: "V", ten: "X" },
  { one: "X", five: "L", ten: "C" },
  { one: "C", five: "D", ten: "M" },
  { one: "M" }
];

// Main function to accept the number input
function toRoman(input) {
  if (input > 3000) {
    throw new Error("The input should not be larger than 3000");
  }

  let result = "";
  const digits = splitNumberToArray(input).reverse();

  for (let index = 0; index < digits.length; index++) {
    const digit = digits[index];
    const romanNumber = ROMAN_NUMBER[index];
    result = convertDigit(result, digit, romanNumber);
  }

  return result;
}

// Utility function to break down number into number of array
function splitNumberToArray(number) {
  return String(number)
    .split("")
    .map(function(digit) {
      return Number(digit);
    });
}

// Utility function to convert the arabic digit into roman number
function convertDigit(result, digit, romanNumber) {
  if (digit < 4) {
    return addOne(result, romanNumber.one, digit);
  }
  if (digit === 4) {
    return romanNumber.one + romanNumber.five + result;
  }
  if (digit >= 5 && digit < 9) {
    const numberOfOne = digit - 5;
    return romanNumber.five + addOne(result, romanNumber.one, numberOfOne);
  }
  return romanNumber.one + romanNumber.ten + result;
}

// Utility function to add charator in front of the input for x times
function addOne(input, romanNumber, time) {
  for (let i = 0; i < time; i++) {
    input = romanNumber + input;
  }

  return input;
}

// copy this to your browser console to see the result!
// Mimic the test case file, not need to understand the syntax written here now
const testCases = [
	{ input: 1, output: "I" },
  { input: 2, output: "II" },
  { input: 3, output: "III" },
  { input: 4, output: "IV" },
  { input: 5, output: "V" },
  { input: 6, output: "VI" },
  { input: 9, output: "IX" },
  { input: 27, output: "XXVII" },
  { input: 48, output: "XLVIII" },
  { input: 59, output: "LIX" },
  { input: 93, output: "XCIII" },
  { input: 141, output: "CXLI" },
  { input: 163, output: "CLXIII" },
  { input: 402, output: "CDII" },
  { input: 575, output: "DLXXV" },
  { input: 911, output: "CMXI" },
  { input: 1024, output: "MXXIV" },
  { input: 3000, output: "MMM" }
];

const result = testCases.reduce((result, {input, output}, index) => {
	const actualOutput = toRoman(input);
	result.push({
		case: index + 1,
		input,
		'expected output': output,
		'actual ouput': actualOutput,
		result: actualOutput === output ? 'Pass' : 'Failure',
	});

	return result;
}, []);

console.table(result);
// module.exports = toRoman;
