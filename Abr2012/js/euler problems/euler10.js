// Problem 10

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

// https://projecteuler.net/problem=10

function primos(q){ 
  var p=2,  
      sum=0;
  for (i = p; i <= q ; i++){ 
    console.log(i);
    var count = 2; 
    for ( j = 2; j<i ; j++){  
      if (i%j == 0){ 
        count++; 
        break; 
      } 
    } 
    if (count == 2){ 
    sum=sum+i 
    } 
  } 
  console.log(sum)
}

primos(10);
