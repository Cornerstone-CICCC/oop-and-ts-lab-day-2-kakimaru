// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.

function addValues(values: number[]): number
function addValues(values: string[]): string

function addValues(values: any[]): any {
  if(typeof values[0] === 'number') {
    const result = values.reduce((acc, curr) => acc + curr, 0) 
    console.log(result)
    return result
  } else if (typeof values[0] === 'string') {
    const result = values.join('')
    console.log(result)
    return result
  }
}


// Expected output:
addValues([1, 2, 3]) // 6
addValues(["Hello", " ", "World"]) // "Hello World"