/*
This implementation has a time complexity because 
it uses a simple loop that runs from 1 to n to calculate the sum. It is a straightforward and efficient solution.
*/
function sum_to_n(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}


/*
This implementation has a time complexity, 
which makes it the most efficient solution. 
It directly computes the sum using the closed-form formula for the sum of an arithmetic series. It is highly efficient and well-suited for any value of n.
*/
function sum_to_n_2(n: number): number {
    return (n * (n + 1)) / 2;
}


/*
This recursive implementation also has a time complexity . 
However, it uses additional memory on the call stack for each recursive call,
which could lead to a stack overflow error for very large values of n. 
It is a simple and elegant solution but less efficient for large values of n.
*/
function sum_to_n_3(n: number): number {
    if (n <= 0) {
      return 0;
    }
    return n + sum_to_n_3(n - 1);
}