// Problem 10

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

// https://projecteuler.net/problem=10

//function primos(q){ 
  //var p=2,  
      //sum=0;
  //for (i = p; i <= q ; i++){ 
    //console.log(i);
    //var count = 2; 
    //for ( j = 2; j<i ; j++){  
      //if (i%j == 0){ 
        //count++; 
        //break; 
      //} 
    //} 
    //if (count == 2){ 
    //sum=sum+i 
    //} 
  //} 
  //console.log(sum)
//}

//primos(10);
//

var vec=[],
    sum=0;

function loop(ban){
  for (var i=0; i<ban; i++) vec[i]=i+1;
  //console.log(vec);
  for (var d=4; d<=ban; d=d+2) vec[d-1]=0; vec[0]=0;
  //console.log(vec);
  for (var t=6; t<=ban; t=t+3) vec[t-1]=0;
  //console.log(vec);
  for (var c=10; c<=ban; c=c+5) vec[c-1]=0;
  //console.log(vec);
  for (var r=14; r<=ban; r=r+7) vec[r-1]=0;
  //console.log(vec);
  for (var x=1; x<ban; x++) sum=sum+vec[x];
}

loop(30);
console.log(sum);
