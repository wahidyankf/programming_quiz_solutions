// Problem Context

// The Fibonacci sequence is traditionally used to explain tree recursion.

// function fibonacci(n) {
//     if(n==0 || n == 1)
//         return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// This algorithm serves welll its educative purpose but it's tremendously inefficient, not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. fibonacci(n-2)) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. fibonacci(n-1)).

// This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.

// For this particular Kata we want to implement the memoization solution. This will be cool because it will let us keep using the tree recursion algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

// The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

// Refactor the function into a recursive Fibonacci function that using a memoized data structure avoids the deficiencies of tree recursion Can you make it so the memoization cache is private to this function?

let memo = {};

let fibonacci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  } else if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
  }
};

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(memo);

console.log(fibonacci(70)); // 190392490709135
console.log(fibonacci(60)); // 548008755920
console.log(fibonacci(50)); // 2586269025