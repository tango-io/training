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

function deadbrain(chain){
  var vec = [], 
  vec = (chain.toLowerCase()).split("");
  for (var cont = 0; cont <= vec.length; cont++){
    if ((vec[cont] == ".") || (vec[cont] == " ")){
      delete vec[cont];
    }
  }
  for (var cont = 0; cont <= vec.length; cont++){
    switch (vec[cont])
    {
        case "á" :
          vec.splice(cont, 1, "a");
          break;
        case "é" :
          vec.splice(cont, 1, "e");
          break;
        case "í" :
          vec.splice(cont, 1, "i");
          break;
        case "ó" :
          vec.splice(cont, 1, "o");
          break;
        case "ú" :
          vec.splice(cont, 1, "u");
          break;

    }
  }
  var conta = 0, tlet = 0;
  vec.sort();
  for (var cont = 0; cont <= vec.length; cont++){
    if (vec[cont] == vec[cont+1])
      conta = conta + 1;
    else {
      conta = conta + 1;
      console.log(vec[cont].toUpperCase() + " :: " + conta);
      conta = 0;
      tlet = tlet + 1;
    }
  }

  console.log("---------------------------");
  console.log("The uniq letters are: " + tlet + ".");
}

var chain = "Le dije a mi mamá que si tengo muerte cerebral y vivo a base de maquinas mejor me desconectara. Ella se levantó y desconectó el internet.";
//var chain = "No mames, Is it works with this string?...";
deadbrain(chain);
