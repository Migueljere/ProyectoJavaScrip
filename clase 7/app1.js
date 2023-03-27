/*
escribir un algoritmo que permita leer numeros naturales y acumularlos(sumarlos entre si), 
en tanto el valor acumulado no supere 100000. en este momento el algoritmo debe mostar 
la cantidad de numeros que se han leidos
*/

//1-definir variables
//2-lectura de datos
//3-proceso
  //1.1 definir nro
  //1.2 definir suma
  //2.2 leer nro
  //3.1 suma = nro*(nro+1)/2


var N = 100;
var datos = [];
var contadorDAtos = 0;
var sumDatos = 0;

datos[contador]= parseInt(prompt("ingrese datos "+ (contador++)));
while (contador< N && sumDatos<10000){
    contador++ 
    if(datos[contador]> 0){
        datos[contador]=parseInt(prompt("ingrese datos "+ (contador++)));
        sumDatos+= datos[contador];
    }
}




