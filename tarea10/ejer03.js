/* 3 - Elaborar una funcion que solicite la edad de 200 personas y que muestre cuántos 
son mayores y menores de edad.
*/
// 1 datos personas
// 2 determinar los mayores y menores
// 3 mostrar cuantos son mayores y cuantos menores
    //1.1 leer datos
    //2.1 determinar que datos > 21 y 18 > datos
    //2.2 acumular en edadMayor la cantidad de edad mayor.
    //2.3 acumular en edadMenor la cantidad de edad menores.
    //3.1 mostrar los resultados de edadMayor y edadMenor


const edadMayorMenor = (datos, edadMayor, edadMenor, contador) => {
    contador = 0;
    datos = parseInt(prompt("Ingrese edades"));
    for(let i = 0; contador = 10; i++){
        if(datos < 21){
            edadMayor += 1
        }
        if (datos > 18){
            edadMenor += 1
        }
        contador++
        datos = parseInt(prompt("Ingrese edades"));
    }
console.log(edadMayor + edadMenor);
    
}    
edadMayorMenor ()