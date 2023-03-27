var N = 0;
var numeroVendedores = [];
var cantidadVentas = [];
var valorVentas = [];
var salarioTotal = [];
var salarioFijo = 0;

N = parseInt(prompt('Ingrese cantidad de vendedores: '));
salarioFijo = parseInt(prompt('Ingrese salario fijo de vendedores: '));
for(let i=0; i<N; i++){
    numeroVendedores[i]=parseInt(prompt('Ingrese número de identificación de vendedor: '+(i+1)));
    cantidadVentas[i]=parseInt(prompt('Ingrese cantidad de ventas: '+(i+1)));
    valorVentas[i] = parseInt(prompt('Ingrese valor de ventas: '+(i+1)));
}
//2
for(let i=0; i<N; i++){
    salarioTotal[i] = valorVentas[i]*0.05+salarioFijo;
}
//3
for(let i=0; i<N; i++){
    console.log('Identificación de vendedor: '+numeroVendedores[i]);
    console.log('El salario total es: '+salarioTotal[i]);
}