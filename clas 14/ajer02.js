/* 2. Realice el seudocódigo y código Js y su correspondiente maquetación HTML .
Calcule el Suelto Neto que cobra un empleado, teniendo en cuenta que la hora trabajada
es de $700 pesos, y que se le descuenta los aportes jubilatorios 
*/

let inputElement = document.querySelectorAll('input');
let buttonElement = document.querySelector('button');
let p = document.querySelector('p');



const calcularNeto = (sueldoBruto) => {
    let aporteJubila = sueldoBruto *0.15;
    let obraSocial = sueldoBruto *0.03;
    let sueldoNeto = sueldoBruto - aporteJubila - obraSocial;
    return sueldoNeto
}
console.log(inputElement);
const horaTrabajo = inputElement[0];
console.log(horaTrabajo);    
console.log(buttonElement);

buttonElement.addEventListener("click" , ()=>{
    console.log(horaTrabajo.value); 
   let hora = 700;
   let sueldoBruto = horaTrabajo.value * hora;
   
    
    p.innerText = "Sueldo Neto a cobrar es: $" + calcularNeto(sueldoBruto);
    calcularNeto(sueldoBruto);
    console.log(sueldoBruto);
})
    
    
