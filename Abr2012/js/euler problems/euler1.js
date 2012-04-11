// Problem 1
// 
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// 
// Find the sum of all the multiples of 3 or 5 below 1000.
// 
// https://projecteuler.net/problem=1
//

function EulerProblem1(total) {
  var sum = 0, v = [], fv = [];
  for (var cont=1; cont<=total-1; cont++){
    v.push(cont);
  }
  for (var cont=0; cont<=total-1; cont++){
    if (((v[cont] % 3) == 0) || ((v[cont] % 5) == 0)) {
      fv.push(v[cont]);
      sum = sum + v[cont];
    }
  }
  var final = fv.length;
  console.log("El rango utilizado es: 1 a " + total + ".");
  console.log("El vector final es de: " + final + ".");
  console.log("La sumatoria es de: " + sum + ".");
}

EulerProblem1(1000);

