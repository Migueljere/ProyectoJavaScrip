/*Escribir un algoritmo que permita leer la cantidad de valores a procesar (N)
y tambien los dichos valores. Calcule y muestre el promedio de los datos leidos mayores que 
-10 y el promedio de los datos leídos menores o iguales a -20
*/

//TD
//1-leer la cantidad total de volores a ingresar y valores
//2-calcular promedio
//3-mostrar prom mayores -10 y prom. -20
    //1.1 pedir que cantidad de valores se van a solicitar
    //1.2 leer volores ingresados

    //2.1 calcular total de los valores ingresados 
    //2.2 calcular promedio mayores a -10
    //2.3 calcular promedio menores o iguales a -20

    //3.3 mostrar resultados.


function cantidadValores(cantNum){
    
    cantNum = parseInt(prompt("Ingrese total de valores a tomar"));
    return cantNum

}
function valoresNum(cantNum, valorNum){
        for(let i = 0; i = cantNum; i++){
        valorNum[i] =parseInt(prompt("Ingrese un valor"));
        } 
        return valorNum   
}
let cantNum = 0;
let valorNum = [] 
let suma = 0;
let sum2 = 0;
cantNum = cantidadValores(cantNum);
valorNum = valoresNum(cantNum, valorNum)    
if (valorNum < -10){
    suma = 1;
}if (valorNum >= -20){
    sum2 += 1;
}

console.log("El promedio leidos mayores a -10: " + suma/cantNum);
console.log("El promedio leido menores o iguales a -20: " + sum2/cantNum);