/* 
Leer un conjunto de datos enteros hasta que se complete una cantidad N previamente 
ingresada por el operador o cuando un dato sea superior a 1000 y par. Se pide calcular y mostrar: 
a) El promedio de los múltiplos de 5. 
b) El porcentaje de los múltiplos de 3. 
c) La cantidad de datos que sean múltiplos de 3 y 5 simultáneamente.
*/

//1- leer datos enteros
//2- calcular a: el promedio de los nros multiplos de 5
//b: el porcentaje de los multiplos de 3
//c: cantidad de datos multiplo de 3 y de 5 simultaneamente.
// mostras datos por pantalla
    //1.1 ingresar la cantidad de datos a solicitar
    //1.2 el corte se tiene que dar cuando el datos sea > a 1000 y par.

    //2.1 con un arreglo ir acumulando los multiplos de 5
    //2.2 calcular el promedio de los multiplos de 5
    //2.3 con un arreglo ir acumulando los multiplos de 3
    //2.4 calcular el porcentaje de los multiplos de 3
    //2.5 mostar los datos que sean multiplos de 3 y 5 en simultaneo.

    //3.1 motrar resultados


/* const datoMulti5 = (contadorM5, cantDato) => {
    if(cantDato%5==0){
        contadorM5++
    }
    return contadorM5
 }

 const datoMulti3 = (cantDato, contadorM3) => {
    if (cantDato%3==0){
        contadorM3++
    }
    return contadorM3
 }

 const datoMulti35 = (contadorM35) => {
    if(cantDato%3==0 && cantDato%5==0){
        contadorM35++
    }
    return contadorM35
 }

 const App = () => {
    const cantDato = parseInt(prompt("Ingrese cantidad de datos"));
        let cantiTotal = 0;
        let contador3 = 0;
        for(let i = 0; i = cantDato ; i++){
            N = parseInt(prompt("Ingrese valores" + (i+1)));
            if(N != 1000 && N %2!=0){
                console.log("El promedio de los múltiplos de 5 es: " + datoMulti5(contadorM5)/cantiTotal);
                console.log("El porcentaje de los múltiplos de 3 es: " + contadorM3*cantiTotal/100);
                console.log("La cantidad de datos que sean múltiplos de 3 es: "+ contadorM3);
                console.log("La cantidad de datos que sean múltiplos de 5 es: "+ contadorM5);   

            }

            cantiTotal ++;
            
        }

       /* for (let i = 0; i< cantDato.length; i++) {
            contador3 = datoMulti3(contadorM3);
        }   
        
       return cantiTotal
    }

      

 App(); */ 
 
 let datos = []

const LeerDatos = () => {
    let i = 0    
    datos[i] = parseInt(prompt("Ingrese datos secuencialmente, salga con -50"))
    while(datos[i]!=-50 && datos.length<=1000){
        i++
        datos[i] = parseInt(prompt("Ingrese datos secuencialmente, salga con -50"))
        
    }

    return datos
}


const CantidadDatos = (datos) =>{
    let contadordatos = 0
    for(let i = 0;i<datos.length;i++){
        contadordatos++
    }
    return contadordatos-1
}

const PjePares = (datos) => {
    let pares = 0
    for(let i = 0; i<datos.length;i++){
        if(datos[i]%2==0 && datos[i]!==-50){
            pares++
        }

    }
    console.log(pares)
    return (pares/(datos.length-1))*100
}
const Promedio = (datos) =>{    
    let suma = 0
    for (let i = 0; i < datos.length; i++) {
        if(datos[i]!==-50){
        suma = suma + datos[i]
        }
    }
    console.log(suma)
  
   
    return suma/(datos.length-1)
}

const App = () => {
    let arr = LeerDatos()
    let CantDatos = CantidadDatos(arr)
    let Pjepar = PjePares(arr)
    let prom = Promedio(arr)
    console.log("La cantidad de datos ingresadas es: "+ CantDatos)
    console.log("El porcentaje de pares es: "+ Pjepar+"     %")
    console.log("El promedio de los datos ingresados, sin incluir el -50 es: "+prom)
    console.log(datos)

}
App()