// leer 10 edades
// calcular el promedio de edades
// calcular el porcentaje de edad menones
// calcular el porcentaje de edad comprendida entre 16 y 24


var edad1 = parseInt(prompt("ingrese edad 1: "));
var edad2 = parseInt(prompt("ingrese edad 2: "));
var edad3 = parseInt(prompt("ingrese edad 3: "));
var edad4 = parseInt(prompt("ingrese edad 4: "));
var edad5 = parseInt(prompt("ingrese edad 5: "));
var edad6 = parseInt(prompt("ingrese edad 6: "));
var edad7 = parseInt(prompt("ingrese edad 7: "));
var edad8 = parseInt(prompt("ingrese edad 8: "));
var edad9 = parseInt(prompt("ingrese edad 9: "));
var edad10 = parseInt(prompt("ingrese edad 10: "));

var personasPromedios = (edad1+edad2+edad3+edad4+edad5+edad6+edad7+edad8+edad9+edad10)/10;
var pocentajeMenores = 0;
var contadorPorcMenores= 0;
var contadorPerso16y24 = 0;
var porcentajePerso16y24 = 0;
if(edad1 < 18){
    pocentajeMenores++;
    if(16<edad1 && edad1<24){
        contadorPerso16y24 ++;
    }
}
if(edad2 < 18){
    pocentajeMenores++;
    if(16<edad2 && edad2<24){
        contadorPerso16y24 ++;
    }
}
if(edad3 < 18){
    pocentajeMenores++;
    if(16<edad3 && edad3<24){
        contadorPerso16y24 ++;
    }
}
if(edad4 < 18){
    pocentajeMenores++;
    if(16<edad4 && edad4<24){
        contadorPerso16y24 ++;
    }
}
if(edad5 < 18){
    pocentajeMenores++;
    if(16<edad5 && edad5<24){
        contadorPerso16y24 ++;
    }
}
if(edad6 < 18){
    pocentajeMenores++;
    if(16<edad6 && edad6<24){
        contadorPerso16y24 ++;
    }
}
if(edad7 < 18){
    pocentajeMenores++;
    if(16<edad7 && edad7<24){
        contadorPerso16y24 ++;
    }
}
if(edad8 < 18){
    pocentajeMenores++;
    if(16<edad8 && edad8<24){
        contadorPerso16y24 ++;
    }
}
if(edad9 < 18){
    pocentajeMenores++;
    if(16<edad9 && edad9<24){
        contadorPerso16y24 ++;
    }
}
if(edad10 < 18){
    pocentajeMenores++;
    if(16<edad10 && edad10<24){
        contadorPerso16y24 ++;
    }
}

porcentajePerso16y24 = (contadorPerso16y24/10)*100
contadorPorcMenores= (pocentajeMenores/10)*100;
console.log("promedio de edad es: "+personasPromedios);
console.log("porcentaje de menores de edad es: "+contadorPorcMenores+"%");
console.log("el porcentaje de edad conpredida entre 16 y 24 es: "+porcentajePerso16y24+"%");

