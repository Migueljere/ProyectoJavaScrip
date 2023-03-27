/*  – Desarrolle una funcion para:
Ingresar un número; mostrando si es par o impar
*/

// 1 pedir datos
// 2 determinar si par o impar
// 3 mostrar resultado
    //1.1 leer datos
    //2.1 con un if determinar si es par o impar
    //3.1 mostrar resultados


const parImpar = (datos) => {
    datos = parseInt(prompt("Ingrese un nro."));
    if (datos %2 == 0){
        console.log("el nro. es par");
    }else{
        console.log("el nro. es impar");
    }
}  
parImpar ()