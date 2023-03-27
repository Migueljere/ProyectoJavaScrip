//1. Una inmobiliaria paga a sus vendedores un salario base, más una comisión fija por cada venta
//realizada, más el 5% del valor de esas ventas. Realizar un programa que imprima el número del
//vendedor y el salario que le corresponde en un determinado mes. Se leen por teclado el número
//del vendedor, la cantidad de ventas que realizó y el valor total de las mismas. 


// 1- leer datos
// 2- cantidad de vendedores
// 3 -salario mensual
    //1.1- cantidad de vendedores
    //1.2- $ venta mensual
    //1.3- salario fijo
    //2.1- indentificador de vendedor
    //2.2- ventas vendedor
    //2.3- calcular ventas realizada + comision fija + 0.5%
    //3.1- imprimir salio de c/d vendedor
    


var ventasVendedor = [];
var identificacionVendedor= [];
var nrosVendedor = 0;
var salarioBasico = 0;
var comisionVenta = 2000;
var valorTotalVentas = [];


nrosVendedor = parseInt(prompt("Ingrese cantidad de vendedores"));
salarioBasico = parseInt(prompt("Ingrese salio basico"));
for(let i = 0; i<nrosVendedor; i++){
        identificacionVendedor[i] = parseInt(prompt("Ingrese legajo del vendedor"+ (i+1)));
        ventasVendedor[i] = parseInt(prompt("Ingrese vanta del vendedor"+(i+1)));
}
    for(let i = 0; i < nrosVendedor; i++){
         valorTotalVentas[i]= (comisionVenta + ventasVendedor[i])*0.5 + salarioBasico;
    }
        for(let i = 0; i < nrosVendedor; i++){
            console.log("Identificacion de vededor"+identificacionVendedor[i]);
            console.log("salario Total es: $ "+ valorTotalVentas[i]);    
        }


