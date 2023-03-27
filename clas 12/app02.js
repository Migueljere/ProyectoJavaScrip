


let sueldoBruto = 0;
let sueldoNeto = 0;
let horaTrabajo = 0;
let aporteJubila = 0;
let obraSocial = 0;
let hora = 700;

horaTrabajo = parseInt(prompt("Ingrese cantidad de horas"));
if (horaTrabajo > 1) {
    
    sueldoBruto = horaTrabajo * hora;
    aporteJubila = sueldoBruto *0.15;
    obraSocial = sueldoBruto *0.03;
    sueldoNeto = sueldoBruto - aporteJubila - obraSocial;

}
console.log("tu sueldo mensual es: "+ sueldoNeto);