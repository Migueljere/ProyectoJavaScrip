
let montoPago = 1500;
let hora = 0;

let horaEntrada = parseInt(prompt("Ingrese hora de entrado"));
let horaSalida = parseInt(prompt("Ingrese hora de salida"));

hora = horaSalida - horaEntrada

if (hora <= 1){
    console.log("La tarifa a pagar es: " + montoPago);
}else{
    montoPago += (hora -1)*1000
    console.log("la tarifa a pagar es: " + montoPago);
}