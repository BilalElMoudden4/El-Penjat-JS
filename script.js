let palabra = "";
let palabraAdivinada = "";
let letrasFalladas = [];
const limiteFallos = 6;
let partidasTotales = 0;
let victorias = 0;
let derrotas = 0;

function menu() {

    const mensaje = parseInt(prompt("Menú:\n1. Iniciar un juego\n2. Estadísticas\n3. Salir"));

    switch (mensaje) {
        case 1:
            jugar();
            break;
        case 2:
            estadisticas();
            break;
        case 3:
            alert("Has cerrado el juego");
            break;
        default:
            alert("Elige una opcion valida");
            menu();
            break;
    }
}

function jugar() {
    palabra = prompt("Introduce la palabra que quieres que adivinen").toLowerCase();
    palabraAdivinada = "_".repeat(palabra.length);
    letrasFalladas = [];
    let intentos = 0;

    while (intentos < limiteFallos) {
        mostrarEstadisticas(intentos);

        const adivinar = prompt("Introduce una letra:").toLowerCase();
        if (adivinar.length === 1 && adivinar.match(/[a-z]/)) {
            if (palabra.includes(adivinar)) {
                for (let i = 0; i < palabra.length; i++) {
                    if (palabra[i] === adivinar) {
                        palabraAdivinada = palabraAdivinada.substring(0, i) + adivinar + palabraAdivinada.substring(i + 1);
                    }
                }
            } else {
                letrasFalladas.push(adivinar);
                intentos++;
            }
        } else {
            alert("Solo puedes introducir una letra");
        }

        if (palabraAdivinada === palabra) {
            victorias++;
            partidasTotales++;
            alert("¡Felicidades! Has adivinado la palabra: " + palabra);
            showMenu();
            return;
        }
    }
    
    derrotas++;
    partidasTotales++;
    mostrarEstadisticas(limiteFallos);
    alert("Has perdido. La palabra era: " + palabra);
    showMenu();
}

function estadisticas() {
    alert(`Total de partidas: ${partidasTotales}\nPartidas ganadas 
    (${((victorias / partidasTotales) * 100).toFixed(2)}%): ${victorias}\nPartidas perdidas 
    (${((derrotas / partidasTotales) * 100).toFixed(2)}%): ${derrotas}`);
    showMenu();
}

function mostrarEstadisticas(intentos) {
    alert(palabraAdivinada + "\nLetras falladas " + intentos + "/" + limiteFallos + ": " + letrasFalladas.join(", "));
}

function showMenu() {
    const reiniciar = confirm("¿Quieres volver al menu principal?");
    if (reiniciar) {
        menu();
    } else {
        alert("Gracias por jugar.");
    }
}

menu();

