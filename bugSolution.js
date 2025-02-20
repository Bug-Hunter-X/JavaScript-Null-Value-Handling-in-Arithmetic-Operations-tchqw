function foo(a, b) {
  // Use explicit type checking and handling
  a = typeof a === 'number' ? a : 0; 
  b = typeof b === 'number' ? b : 0; 
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined,5)); // Output: 5
console.log(foo(5,undefined)); //Output:5
console.log(foo(null,undefined)); //Output: 0