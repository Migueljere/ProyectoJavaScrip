/*
Leer datos hasta que se llegue a 1000 elementos o que el dato ingresado sea igual a -50. 
Calcular e imprimir: 
a) La cantidad de elementos ingresados 
b) El porcentaje de los elementos pares. 
c) El promedio de todos los datos ingresados, excluyendo (si se ingresa) el -50. 
Nota: Recordar que el operador mod (%) se usa para obtener el resto de la división entera. 
*/

//TD
// 1- leer datos
// 2- calcular:
//      A- cantidad de datos ingresados.
//      B- el porcentaje de los elementos pares
//      C- el promedio de todos los elementos.
// 3- imprimir resultados.

    //1.1- con un for pedir datos hasta que > 1000 o datos = -50
    //2.1- contador para los elementos ingrresados
    //2.2- calcular % de los elementos pares (mod%2=0)



const cantDatos = (datos) => {
    let contador = 0;
    //datos = parseInt(prompt("Ingrese Valores"));
    while (datos < 1000 || (datos =-50)){
        contador ++;
        datos = parseInt(prompt("Ingrese Valores"));
    }
    console.log(datos)       
}


cantDatos();