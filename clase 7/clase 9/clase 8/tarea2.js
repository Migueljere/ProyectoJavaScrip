/*
2. Dados 3 números determinar el mayor e informar por pantalla el resultado

*/


//1- datos
//2- mayor
//3- informar valor
    // 1.1 determinar 3 valores
    // 2.1 con un IF comparar los valores
    // 2.2 determinar cual es el mayor
    // 3.1 mostrar por pantalla el valor mayor.

var numA = 45;
var numB = 35;
var numC = 75;
var numMayor = 0;
var i = 0;

if(numA > numB){
    numMayor = numA
}else{
    numMayor = numB
}

if (numMayor > numC){
    i = numMayor
}else{
    i = numC
}

console.log ("El numero mayor es: "+ i);    
