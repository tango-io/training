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
//declaramos la cadena y un vector par almacenar la cadena completa ya spliteada
var str='Le dije a mi mamá que si tengo muerte cerebral y vivo a base de maquinas mejor me desconectara. Ella se levantó y desconectó el internet',
    con=0,
    cont=0,
    x=0,
    vec=[],
    aux=[];

function count(arr2){
  for (var j=0;j<=arr2.length;j++){
    if ((arr2[j]==arr2[j+1]) && (arr2[j]!=arr2.length)){
      con=con+1;
    }else{
      cont=cont+1;
      con=con+1;
      console.log(arr2[j] +' :: '+ con);
      con=0;
    }
  }
  console.log(cont-1 +' uniq letters')
}    

function clean(arr){
  for (var i=0;i<=arr.length;i++)  if (arr[i]==" " || arr[i]=="," || arr[i]==".") delete arr[i];
  count(arr);
}

function change(a){
  a=a.replace(/á/gi,"a");
  a=a.replace(/é/gi,"e");
  a=a.replace(/í/gi,"i");
  a=a.replace(/ó/gi,"o");
  a=a.replace(/ú/gi,"u");
  aux=a.toUpperCase().split("").sort();
  clean(aux);
}

change(str);
