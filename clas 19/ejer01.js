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




const calularMulti5 = (datos, mult, contMulti, sumaMulti) => {
    if(datos%mult == 0){
        contMulti++;
    }
    return[contMulti,sumaMulti];
}

const calcularMulti3 = (datos,mult, contMulti3) =>{
    if(datos%mult == 0){
        contMulti3++
    }
    return contMulti3;

}

const calcularMult35 = (datos, contMulti35) => {
    if (datos%3 ==0 && datos%5 ==0){
        contMulti35++
    }
    return contMulti35
}

const App = () => {
    const N = parseInt(prompt("Ingrese cantidad de datos"));
    let datos = [];
    let contador = 0;
            datos[contador] = leerDato(contador);
            while (contador<N || (datos[contador]!=1000 && datos[contador]%2!=0)){
                contador++
                datos[contador] = leerDato(contador);
            }
            for (let i = 0; i< datos.length; i++) {
                contador3 = calcularMulti3(datos[i],3, contador);
            }
}
