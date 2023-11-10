let palabra = "";
let palabraAdivinada = "";
let letrasFalladas = [];
const limiteFallos = 6;
let partidasTotales = 0;
let victorias = 0;
let derrotas = 0;
let intentos = 0;

const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let contenedorAbecedario = document.getElementById("abecedario");
let bloqueAbecedario = "";

for (let i = 0; i < abecedario.length; i++) {
    let letra = abecedario[i];
    bloqueAbecedario += `<button class="btn btn-light m-2" style="border-radius: 5px; border: 1px solid black; border-color: gray; color: gray;" onclick="intento('${letra}')">${letra}</button>`;
}

contenedorAbecedario.innerHTML = bloqueAbecedario;

function intento(letra) {
    if (intentos < limiteFallos && palabra !== "") {
        if (!letrasFalladas.includes(letra)) {
            if (palabra.includes(letra)) {
                for (let i = 0; i < palabra.length; i++) {
                    if (palabra[i] === letra) {
                        palabraAdivinada = palabraAdivinada.substring(0, i) + letra + palabraAdivinada.substring(i + 1);
                    }
                }
            } else {
                letrasFalladas.push(letra);
                intentos++;
                document.getElementById("imatgePenjat").src = `Imagenes/penjat_${intentos}.png`;
            }
        } else {
            alert("Ya has intentado con esta letra.");
        }

        mostrarEstadisticas();
        actualizarPantalla();
    } else {
        alert("La partida ha terminado. Inicia un nuevo juego.");
    }
}


function nuevaPartida() {
    palabra = prompt("Introduce la palabra que quieres que adivinen").toUpperCase();
    palabraAdivinada = "_".repeat(palabra.length);
    letrasFalladas = [];
    intentos = 0;

    document.getElementById("imatgePenjat").src = "Imagenes/penjat_0.png"; // Reiniciar la imagen del penjat

    actualizarPantalla();
}

function actualizarPantalla() {
    document.getElementById("jocPenjat").innerText = palabraAdivinada;
    document.getElementById("lletresUtilitzades").innerText = `Letras falladas ${intentos}/${limiteFallos}: ${letrasFalladas.join(", ")}`;
}

function estadisticas() {
    const partidasTotalesInt = parseInt(partidasTotales);
    const victoriasInt = parseInt(victorias);
    const derrotasInt = parseInt(derrotas);

    const porcentajeVictorias = (victoriasInt / partidasTotalesInt) * 100 || 0;
    const porcentajeDerrotas = (derrotasInt / partidasTotalesInt) * 100 || 0;

    alert(`Total de partidas: ${partidasTotalesInt}\nPartidas ganadas (${porcentajeVictorias.toFixed(0)}%): ${victoriasInt}\nPartidas perdidas (${porcentajeDerrotas.toFixed(0)}%): ${derrotasInt}`);

    showMenu();
}

function mostrarEstadisticas() {
    actualizarPantalla();

    if (palabraAdivinada === palabra) {
        victorias++;
        partidasTotales++;
        alert("¡Felicidades! Has adivinado la palabra: " + palabra);
        showMenu();
    } else if (intentos === limiteFallos) {
        derrotas++;
        partidasTotales++;
        alert("Has perdido. La palabra era: " + palabra);
        showMenu();
    }
}


