//3. Desarrolle el seudocódigo y el diagrama de Flujo que al ingresar por teclado 100 números enteros
//y calcular cuántos de ellos son pares e impares


let total = 0;
let totalPar = 0;
let totalImpar = 0;
let numPar = 0;
let numImpar = 0;
let num = []
for (i = 0; i <= 5; i++){
    num[i] = parseInt(prompt("Ingrese 100 numeros enteros"));
    total += num[i]
    if (num[i] % 2 ==0){
        numPar += 1
        totalPar += 1
        
    }else{
        numImpar += 1
        totalImpar += 1
    }

}
console.log("El promedio es: " + total/5);
console.log("El porcentaje impar es: " + (numImpar*100)/totalImpar);
console.log("El porcentaje Par es: " + (numPar*100)/totalPar);
