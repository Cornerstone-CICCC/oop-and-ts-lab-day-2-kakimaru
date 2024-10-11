"use strict";
// Create a function `transformInput` that accepts either a string or a number. 
// - If it's a string, reverse the string.
// - If it's a number, return the factorial of the number.
// - If an unsupported type is passed, throw an error.
// - The function should have overloads for both the string and number types.
// - Return type: string for string inputs, number for number inputs.
function transformInput(x) {
    if (typeof x === 'string') {
        const result = x.split('').reverse().join('');
        console.log(result);
        return result;
    }
    else if (typeof x === 'number') {
        let result = 1;
        for (let i = x; i > 1; i--) {
            result *= i;
        }
        console.log(result);
        return result;
    }
    else {
        throw new Error(`Input valid context.`);
    }
}
// Expected output:
transformInput("TypeScript"); // "tpircSepyT"
transformInput(5); // 120
