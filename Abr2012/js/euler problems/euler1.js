// Problem 1
// 
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// 
// Find the sum of all the multiples of 3 or 5 below 1000.
// 
// https://projecteuler.net/problem=1
//

function EulerProblem1() {
  var total = 10, v = [];
  for (var cont=1; cont<=total; cont++){
    v.push(cont);
  }
  for (var cont=1; cont<=total; cont++){
    console.log("Espacio del vector ["+cont+"] es: "+v[cont-1]);
  }
}

EulerProblem1();

