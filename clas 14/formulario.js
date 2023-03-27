const form = document.querySelector("#contact_form");
console.log(form);
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const mensaje = document.querySelector("#mensaje").value;
    sendEmail(name, email, mensaje);

}

function sendEmail(name, email, mensaje) {
    console.log("Hola " + name);
    console.log(`Se envio un correo electronico a" ${email} "con el siguente mensaje: "${mensaje}`);

}