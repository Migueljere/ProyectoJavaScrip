// tomar dos nros enteros por pantalla y realizar
// operaciones basicas matematicas
// mostrar los nros.
// mostrar los resultados


var namer1 = " ";
var namer2 = " ";
 
    namer1 = parseInt(prompt("ingrese valor: "));
    namer2 = parseInt(prompt("ingrese segundo valor: "));

var resultadoSuma = 0;
var resultadoResta = 0;
var resultadoMulti = 0;
var resultadoDiv = 0;

resultadoSuma = namer1 + namer2;
resultadoResta = namer1 - namer2;
resultadoMulti = namer1 * namer2;
resultadoDiv = namer1/namer2;

console.log("El nro. 1 es:"+namer1);
console.log("El nro. 2 es:"+namer2);

console.log("el resultado de suma es:"+ resultadoSuma);
console.log("el resultado de resta es:"+ resultadoResta);
console.log("el resultado de multi es:"+ resultadoMulti);
console.log("el resultado de div. es:"+ resultadoDiv);

