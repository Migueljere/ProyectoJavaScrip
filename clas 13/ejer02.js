

const elementInput1 = document.getElementById("input_1");
const elementInput2 = document.getElementById("input_2");
const elementInput3 = document.getElementById("input_3");
const elementInput4 = document.getElementById("input_4");
const elementInput5 = document.getElementById("input_5");

const elementButton = document.getElementById("button_1");

console.log(elementInput1);
console.log(elementInput2);
console.log(elementInput3);
console.log(elementInput4);
console.log(elementInput5);
console.log(elementInput1);

    elementButton.addEventListener("click" , () => {
        console.log(elementInput1.value);
        console.log(elementInput2.value);
        console.log(elementInput3.value);
        console.log(elementInput4.value);
        console.log(elementInput5.value);
        console.log(elementButton.value);
        
    })
