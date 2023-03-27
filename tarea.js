//Ejercicio 1: Escribir la secuencia de acciones necesarias para lograr realizar el objetivo
//planteado. Identificar el estado inicial y el estado final para cada situación.

//a. Preparar un mate. 
// incio
// 1- calentar aguar
// 2- preparar mate
// 3- sebar y tomar
 
  //1.1 colocar aguar en una pava comun o electrica
  //1.2 encender cosina o pava electrica
  //1.3 verificar temperatura del agua

  //2.1 buscar mate y bombilla
  //2.2 decidir por mate amargo o dulce
  //2.3 colocar yerba dentro del mate y azucar en caso de que se quiera dulce

  //Fin

  //3.1 vertir agua dentro del mate
  //3.2 introlducir bombilla
  //3.3 sebar y tomar.



var palabraClave = " ";

var mateListo = 0;
var saleCafe = 0;
palabraClave= parseInt(prompt("vamos a preparar el mate, seleccione 1 para SI o 2 para NO segun corresponda para cada accion"));

if (palabraClave = 1){
    mateListo ++;
    if (palabraClave = 2){
        saleCafe ++;
    }
}
palabraClave= parseInt(prompt("poner la pava con agua al fuego o conectar a la corriente, seleccione 1 para SI o 2 para NO"));

if (palabraClave = 1){
    mateListo ++;
    if (palabraClave = 2){
        saleCafe ++;
    }
}

palabraClave= parseInt(prompt("colocar yerba al mate, seleccione 1 para SI o 2 para NO"));

if (palabraClave = 1){
    mateListo ++;
    if (palabraClave = 2){
        saleCafe ++;
    }
}

palabraClave= parseInt(prompt("introducir agua al mate y colocar la bombilla, seleccione 1 para SI o 2 para NO"));

if (palabraClave = 1){
    mateListo ++;
    if (palabraClave = 2){
        saleCafe ++;
    }
}

console.log("Felicitaciones has preparado correctamente el mate")




