// tomar 10 edades de personas
// calcular la cantida de personas mayores de edad
// calcular el porcentaje de edade mayores adultos
// mostrar por pantalla los resultados 
// calcular el promedios de edades y mostrar por pantalla

var personasMayores = 0;
var personasAdultos = 0;
var personasPromedios = 0;
var personaSuma = 0;
var edad1 = parseInt(prompt("ingrese edad 1: "));
    if(edad1>= 18){
        personasMayores++;
        if(edad1>= 21){
            personasAdultos++;
        }
    }
var edad2 = parseInt(prompt("ingrese edad 2: "));
    if(edad2>= 18){
        personasMayores++;
        if(edad2>= 21){
            personasAdultos++;
        }
    }
var edad3 = parseInt(prompt("ingrese edad 3: "));
    if(edad3>= 18){
        personasMayores++;
        if(edad3>= 21){
            personasAdultos++;
        }
    }
var edad4 = parseInt(prompt("ingrese edad 4: "));
    if(edad4>= 18){
        personasMayores++;
        if(edad4>= 21){
            personasAdultos++;
        }
    }
var edad5 = parseInt(prompt("ingrese edad 5: "));
    if(edad5>= 18){ 
        personasMayores++;
        if(edad5>= 21){
            personasAdultos++;
        }
    } 
var edad6 = parseInt(prompt("ingrese edad 6: "));
    if(edad6>= 18){
        personasMayores++;
        if(edad6>= 21){
            personasAdultos++;
        }
    }
var edad7 = parseInt(prompt("ingrese edad 7: "));
    if(edad7>= 18){
        personasMayores++;
        if(edad7>= 21){
            personasAdultos++;
        }
    }
var edad8 = parseInt(prompt("ingrese edad 8: "));
    if(edad8>= 18){
        personasMayores++;
        if(edad8>= 21){
            personasAdultos++;
        }
    }
var edad9 = parseInt(prompt("ingrese edad 9: "));
    if(edad9>= 18){
        personasMayores++;
        if(edad9>= 21){
            personasAdultos++;
        }
    }
var edad10 = parseInt(prompt("ingrese edad 10: "));
    if(edad10>= 18){
        personasMayores++;
        if(edad10>= 21){
            personasAdultos++;
        }
    }

personaSuma = edad1+edad2+edad3+edad4+edad5+edad6+edad6+edad7+edad8+edad9+edad10;
personasPromedios = personaSuma/10;
console.log("cantidad de personas mayores es: "+personasMayores);
console.log("cantidad de personas adultas es: "+personasAdultos);
console.log("el promedio de edad es: "+personasPromedios);     