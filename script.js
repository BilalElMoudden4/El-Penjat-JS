function Penjat() {

    let palabra = prompt("Introduce una palabra");
    let nuevoTexto = "";

    for (let i = 0; i < palabra.length; i++){
        nuevoTexto += "____ ";
    }
    
    console.log(nuevoTexto);

    let letra = prompt("Ahora ingresa una letra");

    if (letra.length  < 2 &&  letra.match(/[a-zA-Z]/)) {
    console.log("Bien");
    } else {
    console.log("¡ERROR! Tienes que ingresar una única letra.");
    }
    
}