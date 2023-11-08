let palabra = "";
let palabraAdivinada = "";
let letrasFalladas = [];
const limiteFallos = 6;
let partidasTotales = 0;
let victorias = 0;
let derrotas = 0;


function nuevaPartida() {
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
    const partidasTotalesInt = parseInt(partidasTotales);
    const victoriasInt = parseInt(victorias);
    const derrotasInt = parseInt(derrotas);

    const porcentajeVictorias = ((victoriasInt / partidasTotalesInt) * 100);
    const porcentajeDerrotas = ((derrotasInt / partidasTotalesInt) * 100);

    alert(`Total de partidas: ${partidasTotalesInt}\nPartidas ganadas 
    (${porcentajeVictorias.toFixed(0)}%): ${victoriasInt}\nPartidas perdidas 
    (${porcentajeDerrotas.toFixed(0)}%): ${derrotasInt}`);

    showMenu();
}


function mostrarEstadisticas(intentos) {
    alert(palabraAdivinada + "\nLetras falladas " + intentos + "/" + limiteFallos + ": " + letrasFalladas.join(", "));
}




