/*2. Desarrollar un algoritmo que, dados el valor de una hora de trabajo y la cantidad de horas
trabajadas por día, calcule y muestre el valor del sueldo semanal, asumiendo que se trabajan todos
los días hábiles y media jornada los sábados. Ejemplo: Ingresa 120 y 8, debe devolver 5280. */


//1- valor de hora
//2- dias trabajados
//3- sueldo semanal
    //1.1 ingrese valor 1 hs
    //1.2 cantidad de hs trabajadas 1 dia
    //2.1 dias habiles
    //3.1 calcular sueldo semanal

var valorHs = 0;
var cantidadHoras = 0;
var senamaLaboral = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados"];
var salarioTotalDia = [];
var salarioSemanal = []
valorHs= parseInt(prompt("Ingrese valor de la Horas"));
cantidadHoras= parseInt(prompt("Ingrese cantidad de hs trabajadas en un dia"));

for(let i=0; i<6; i++ ){
        salarioTotalDia[i] = valorHs* cantidadHoras;       
        salarioSemanal[i] = salarioTotalDia[i]* 6 ;
    
console.log("el salario semanal es: "+" " + salarioSemanal[i]);
}
