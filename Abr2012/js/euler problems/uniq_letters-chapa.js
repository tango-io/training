// JavaScript Exercise: Find the Number of Unique Letters in a String
// 
// You have to find the number of occurrences of each letter in specified string. JUST LETTERS. If some letter has a tilde it counts like a normal letter. E.g. "á" = "a", Also letters in uppercase and downcase are are equal. E.g. "e" = "E" and "é" = "E"
// Sort the list alphabetically.
// 
// This is the String:
//   
//     Le dije a mi mamá que si tengo muerte cerebral y vivo a base de maquinas mejor me desconectara. Ella se levantó y desconectó el internet.
// 
// And this is the result:
// 
//       A :: 12
//       B :: 2
//       C :: 5
//       D :: 4
//       E :: 22
//       G :: 1
//       I :: 6
//       J :: 2
//       L :: 6
//       M :: 7
//       N :: 7
//       O :: 7
//       Q :: 2
//       R :: 6
//       S :: 6
//       T :: 7
//       U :: 3
//       V :: 3
//       Y :: 2
//       ------
//       19 uniq letters
//

function deadbrain(){
  var vec = [], v = [], fv = [], chain = "Le dije a mi mamá que si tengo muerte cerebral y vivo a base de maquinas mejor me desconectara. Ella se levantó y desconectó el internet.";
  vec = (chain.toLowerCase()).split(".");
  var size = vec.length;
  for (cont = 0; cont <= size-1; cont++){
    v[cont] = vec[cont].split(" ");
  }
  size = v.length;
  //for (cont = 0; cont <= size-1; cont++){
    //fv = v[cont].split("");
  //}
  console.log(vec[0]);
  console.log(v[0]);
  console.log(fv[0]);
}

deadbrain();
