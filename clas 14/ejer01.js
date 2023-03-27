/*1. Realice el seudocódigo y código Js y su correspondiente maquetación HTML .
calcule el monto a pagar por el servicio de estacionamiento, teniendo en cuenta que por la
primera hora de estadía se tiene una tarifa de $1500 pesos y las horas restantes $1000
pesos cada hora. Se tiene como datos: hora de entrada, hora de salida. 
*/


let inputElement = document.querySelectorAll('input');
let buttonElement = document.querySelector('button');
let p = document.querySelector('p');


const calcularCosto= (cantHoras) =>{
   let costo = cantHoras*1000 + 500;
    return costo;
}

console.log(inputElement);
const horaEntrada = inputElement[0];
const horaSalida = inputElement[1];
console.log(horaEntrada);
console.log(horaSalida);
console.log(buttonElement);

buttonElement.addEventListener('click', ()=>{
    console.log(horaEntrada.value);
    console.log(horaSalida.value);
    let cantHoras = horaSalida.value - horaEntrada.value;
    p.innerText = 'costo de estacionamiento: '+  calcularCosto(cantHoras);
    calcularCosto(cantHoras);
    console.log(cantHoras); 
})
