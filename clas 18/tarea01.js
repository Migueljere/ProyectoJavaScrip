/* 
Ejercicio 1) Escribir un algoritmo que permita leer la cantidad de alumnos que participaron en
una evaluación y procesar los resultados, leyendo las notas que fueron obtenidas por los
alumnos. Si la corrección se realizó utilizando como notas posibles a 'B': “BUENO”, 'S':
“SUFICIENTE” y 'A': “APLAZADO”, el algoritmo debe calcular y mostrar el porcentaje de alumnos
aprobados y el porcentaje de alumnos reprobados.

*/

let inputElement = document.querySelector("input");
let buttonElement = document.querySelector("button");
let p = document.querySelector("p");



const cantAlumnos =(alumnos) => {
    alumnos = parseInt(prompt("Ingrese cantidad de alumnos"));
    return alumnos;
}
console.log(inputElement);
const cantAlum = inputElement[0];
const alumnoNotas = inputElement[1];
console.log(cantAlum);
console.log(alumnoNotas);
console.log(buttonElement);

buttonElement.addEventListener("click", () =>{
    const notas = (alumnos, alumNotas, bueno, suficiente, aplazados) => {
        for(i = 0; i = alumnos; i++){
            alumNotas = String(prompt("Ingrese nota del alumno"));
            if (alumNotas = B){
                    bueno ++
            }else{
                if(alumNotas = S){
                        suficiente ++
                }else{
                    if(alumNotas = A){
                            aplazados ++
                    }
                }
                    
            }
        }
       return notas
        
}

})


//notas (alumnos, alumNotas, bueno, suficiente, aplazados);







