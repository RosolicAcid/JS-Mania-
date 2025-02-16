//Using Arithmetic Operations:

let a = 5, b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(`a: ${a}, b: ${b}`);

//using bitwise xor

let x = 5, y = 10;

x = x ^ y;
y = x ^ y;
x = x ^ y;

console.log(`x: ${x}, y: ${y}`);

//using xor is better cause:
// Why Does This Work?
//     The XOR operation is reversible:
//
//     A ^ B gives a unique result.
//     If we do (A ^ B) ^ B, we get back A.
//     If we do (A ^ B) ^ A, we get back B.
//     This trick works because:
//
//     x holds x ^ y after the first step.
//     The second step extracts x by applying XOR again.
//     The third step extracts y.
//     Advantages
// No need for a temporary variable.
//     Works efficiently using bitwise operations.