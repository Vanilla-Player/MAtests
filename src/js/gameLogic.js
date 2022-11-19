const juego = new JuegoAhorcado();

const wordGuess = document.getElementById("inpPalabra");

function generaABC(a, z) {
  document.getElementById("abcdario").innerHTML = "";
  var i = a.charCodeAt(0),
    j = z.charCodeAt(0);
  var letra = "";
  for (; i <= j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML +=
      "<button value='" +
      letra +
      "' onclick='intento(\"" +
      letra +
      "\")' class='btn btn-outline-dark' id='" +
      letra +
      "'>" +
      letra +
      "</button>";
    if (i == 110) {
      document.getElementById("abcdario").innerHTML +=
        "<button value='Ñ' onclick='intento(\"Ñ\")' class='btn btn-outline-dark' id='" +
        letra +
        "'>Ñ</button>";
    }
  }
}

function intento(letra) {
  document.getElementById(letra).disabled = true;
  juego.arriegarLetra(letra);
  wordGuess.innerHTML = juego.palabra.join("");
  document.getElementById("intentos").innerHTML = juego.vidas;
  if (!juego.contieneLetra(letra)) {
    let stickmanPart = document.getElementById(`${juego.vidas}`);
    stickmanPart.classList.remove("invisible");
    stickmanPart.classList.add("visible");
  }
  check();
}

function check() {
  if (juego.vidas === 0) {
    let alert = document.getElementById("alert");
    alert.classList.remove("invisible");
    alert.classList.add("visible");
  }
}

function inicio() {
  juego.inicializarEstado();
  wordGuess.innerHTML = juego.palabra.join("");
  generaABC("a", "z");
  document.getElementById("intentos").innerHTML = juego.vidas;
}

// Iniciar
window.onload = inicio();
