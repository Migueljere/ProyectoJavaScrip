/*  2- Desarrolle una funcion para:
- Ingresar la nota del exámen de Algoritmos y si es mayor o igual a siete imprimir que aprobó, 
sino que no aprobó.
*/

// 1 datos
// 2 determinar que dato no sea mayor 10
// 3 mostrar si aprobo o no.
    //1.1 leer notas
    //2.1 si nota >= 7
    //2.2 y nota no debe <=10
    //3.1 si nota es mayor a 7 imprimir que aprobo o no.

const notaExamen = (nota) => {
    nota = parseInt(prompt("Ingrese nota"));
    if ((nota >= 7) && (nota <=10)){
        console.log("Aprobado");
    }else{
        console.log("No aprobaste debes recuperar la materia");
    }
}
notaExamen()    