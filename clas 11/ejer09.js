/*9. Desarrolle un diagrama de flujo que dado el radio de un círculo, calcule el volumen de la esfera
correspondiente.*/


const leerRadio = (radio) => {
    radio = parseFloat(prompt("ingrese radio"));
    return radio;
}
const calcularVolumen = (radio, pi, volumen) => {
    volumen = (4/3)* pi * radio* radio * radio;
    return volumen;
}

let radio = 0;
let volumen = 0;
const Pi = 3.141287;
    radio = leerRadio(radio);
    volumen = calcularVolumen(radio, pi, volumen);
    console.log ("el volumen calculado es -->" + volumen);