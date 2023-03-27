/* 4- Elaborar una funcion que solicite el año de nacimiento del empleado y el año
actual.
Luego calcule la edad y muestre cuantos años le falta para jubilarse (suponiendo que la edad 
para jubilarse es 60 años, tanto para mujeres como para hombres).
*/

// 1 datos
// 2 calcular edad y determinar cuanto le falta para jubilarse
// 3 imprimir datos
    //1.1 leer año de nacimiento
    //1.2 leer añp actual
    //2.1 calcular edad del empleado.
    //2.2 calcular le falta para jubilarse
    //3.1 mostrar cuanto le falta para jubilarse


  const edadEmpleado = (añoNaci, añoActual, edad, edadJubila)=>{
    añoNaci = parseInt(prompt("Ingrese año de nacimiento"));
    añoActual = parseInt(prompt("Ingrese año actual"));
    edad = añoActual - añoNaci;
    if (edad < 60){
        edadJubila = 60 - edad;
        console.log("Tenes" + edad + "años y te falta para jubilarte" + edadJubila + "años");
    }    
  }
  edadEmpleado()  