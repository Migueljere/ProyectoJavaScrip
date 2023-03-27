/*
ingrese nros. hasta que se ingrese 0, al finalizar:
informar la suma de los valores ingresados
informar el promedio de los valores
informar el porcentaje de multiplos de 5
*/ 

// leer datos
// calcular suma de datos
// calcular promedios de datos
// calcular porcentaje de multiplos de 5

  // 1.1 Leer nro
  // 1.2 mientras nro sea distinto a 0
  // 1.3 leer nro
  // abro un for para procesar los datos
  //2.1 sumar valores

  //3.1 calcular el promedio suma / cantidad de datos

  //4.1 si el mod 5 es 0
  //4.2 contar multiplo de 5
  //4.3 porcentaje es contar multiplos de 5 / cantidad total * 100


const leerDatos = (dato, indice) => {
    dato = parseInt(prompt("Ingrese nro." + (indice+1)));
    return dato;
}  

const sumarDatos = (dato, suma) => {
    suma += dato;
    return suma;
}

const calcularPromedios = (promedio, suma, cantidadDatos) =>{
    promedio = suma / cantidadDatos;
    return promedio;
}

const contarMultiplos = (dato, contMult5) => {
        if(dato % 5 == 0){
            contMult5++;
        }
        return contMult5
}

const calcularPorcenMulti = (porcentMulti5, cantidadDatos, contMult5) =>{
    porcentMulti5 = (contMult5 / cantidadDatos)* 100;
    return calcularPorcenMulti
}

const App = () => {
        var cantidadDatos = 10;
        var datos = [];
        var indice = 0;
        var suma = 0;
        var promedio = 0;
        
            datos[indice] = leerDatos (datos[indice], indice);
            while(indice< cantidadDatos && datos[indice] != 0){
                datos[indice] = leerDatos(datos[indice], indice);
                indice++;
            }
            for(let i = 0; i< datos.length; i++){
                suma = sumarDatos(datos[i], suma);
                contMult5 = contarMultiplos (datos[i], promedio);
            }

            promedio = calcularPromedios(promedio, suma, indice);
            porcentMulti5 = calcularPorcenMulti(contMult5, datos.length);
}

App();