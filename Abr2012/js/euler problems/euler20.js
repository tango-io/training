// Problem 20
//
// n! means n  (n  1)  ...  3  2  1
//
// For example, 10! = 10  9  ...  3  2  1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
//
// Find the sum of the digits in the number 100!
//
// https://projecteuler.net/problem=20
//

function EulerProblem20(number){
  var sum = 0, fac = 1, v = [];
  for (cont = 2; cont <= number; cont++){
    fac = fac * cont;
  }
  chain = fac.toString();
  for (cont = 0; cont <= chain.length-1; cont++){
    v[cont] = parseInt(chain.charAt(cont));
    sum = sum + v[cont];
  }
  console.log("The factorial of " + number + "! is : " + chain + ".");
  console.log("The sum of each elements of " + number + "! is: " + sum + ".");
}

EulerProblem20(10);

