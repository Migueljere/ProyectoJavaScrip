// ingresar cinco valores por pantalla
// realizar la suma de todos los valores
// realizar la multiplicacion de todos los valores
// sacar el promedio de todos los valores
// mostrar todos los resultados por pantalla

var namer1 = " ";
var namer2 = " "; 
var namer3 = " ";
var namer4 = " ";
var namer5 = " ";

namer1 = parseInt(prompt("ingrese valor1: "));
namer2 = parseInt(prompt("ingrese valor2: "));
namer3 = parseInt(prompt("ingrese valor3: "));
namer4 = parseInt(prompt("ingrese valor4: "));
namer5 = parseInt(prompt("ingrese valor5: "));

var resultadoSuma = 0;
var resultadoMulti = 0;
var resultadoProm = 0;

resultadoSuma = namer1 + namer2 + namer3 + namer4 + namer5
resultadoMulti = namer1 * namer2 * namer3 * namer4 * namer5
resultadoProm = resultadoSuma / 5
console.log(namer1);
console.log(namer2);
console.log(namer3);
console.log(namer4);
console.log(namer5);
console.log("el resultado de la suma es: "+ resultadoSuma);
console.log("el resultado de la multiplicacion es: "+ resultadoMulti);
console.log("el promedio es: "+ resultadoProm);


