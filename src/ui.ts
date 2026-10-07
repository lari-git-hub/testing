import { partida } from "./model";
import { dameNumeroAleatorio, obtenerNumeroCarta, obtenerPuntos, sumarPuntos, comprobarPartida, } from "./motor";

// ELEMENTOS DEL HTML

const elementoPuntuacion = document.querySelector(".valorPuntuacion");
const cartaReves = document.querySelector("#cartaAbajo");
const mensaje = document.querySelector(".mensaje");
const botonCarta = document.querySelector(".carta");
const plantarseBoton = document.querySelector(".plantarse");

// MOSTRAR PUNTUACIÓN

export function muestraPuntuacion(): void {
  if (elementoPuntuacion) {
    elementoPuntuacion.textContent = partida.puntuacion.toString();
  }
}

// OBTENER URL DE LA CARTA

export function obtenerUrlCarta(carta: number): string {
  switch (carta) {
    case 1:
      return "/imagenes/1_as-copas.jpg";
    case 2:
      return "/imagenes/2_dos-copas.jpg";
    case 3:
      return "/imagenes/3_tres-copas.jpg";
    case 4:
      return "/imagenes/4_cuatro-copas.jpg";
    case 5:
      return "/imagenes/5_cinco-copas.jpg";
    case 6:
      return "/imagenes/6_seis-copas.jpg";
    case 7:
      return "/imagenes/7_siete-copas.jpg";
    case 10:
      return "/imagenes/10_diez-copas.jpg";
    case 11:
      return "/imagenes/11_once-copas.jpg";
    case 12:
      return "/imagenes/12_doce-copas.jpg";
    default:
      return "";
  }
}

// MOSTRAR CARTA

export function muestraCarta(url: string): void {
  if (cartaReves && cartaReves instanceof HTMLImageElement) {
    cartaReves.src = url;
  }
}

// PINTAR MENSAJE

export function pintarMensaje(mensajeTexto: string): void {
  if (mensaje && mensaje instanceof HTMLDivElement) {
    mensaje.textContent = mensajeTexto;
  }
}

// BLOQUEAR BOTONES

export function bloquearBotones(): void {
  if (botonCarta && botonCarta instanceof HTMLButtonElement) {
    botonCarta.disabled = true;
  }

  if (plantarseBoton && plantarseBoton instanceof HTMLButtonElement) {
    plantarseBoton.disabled = true;
  }
}

// DESBLOQUEAR BOTONES

export function desbloquearBotones(): void {
  if (botonCarta && botonCarta instanceof HTMLButtonElement) {
    botonCarta.disabled = false;
  }

  if (plantarseBoton && plantarseBoton instanceof HTMLButtonElement) {
    plantarseBoton.disabled = false;
  }
}

// PEDIR CARTA

export function pedirCarta(): void {
  const numeroAleatorio = dameNumeroAleatorio();
  const carta = obtenerNumeroCarta(numeroAleatorio);

  const urlCarta = obtenerUrlCarta(carta);
  muestraCarta(urlCarta);

  const puntosCarta = obtenerPuntos(carta);
  partida.puntuacion = sumarPuntos(puntosCarta);

  muestraPuntuacion();

  const estado = comprobarPartida();

  if (estado === "GAME_OVER") {
    pintarMensaje("Game Over");
    bloquearBotones();
  }

  if (estado === "GANADO") {
    pintarMensaje("¡Has alcanzado 7.5 puntos!");
    bloquearBotones();
  }
}

// MOSTRAR MENSAJE FINAL

export function mostrarMensajeFinal(): void {
  if (partida.puntuacion < 4) {
    pintarMensaje("Has sido muy conservador.");
  }

  if (partida.puntuacion === 5) {
    pintarMensaje("Te ha entrado el canguelo eh?.");
  }

  if (partida.puntuacion === 6 || partida.puntuacion === 7) {
    pintarMensaje("Casi casi...");
  }

  if (partida.puntuacion === 7.5) {
    pintarMensaje("¡Lo has clavado! ¡Enhorabuena!");
  }
}

// NUEVA PARTIDA

export function nuevaPartida(): void {
  partida.puntuacion = 0;

  muestraPuntuacion();
  muestraCarta("/imagenes/back.jpg");
  pintarMensaje("");
  desbloquearBotones();
}

// ¿QUÉ HABRÍA PASADO?

export function comprobarQueHabriaPasado(): void {
  const numeroAleatorio = dameNumeroAleatorio();
  const cartaQuePasaria = obtenerNumeroCarta(numeroAleatorio);

  const urlCarta = obtenerUrlCarta(cartaQuePasaria);
  muestraCarta(urlCarta);

  const puntosCarta = obtenerPuntos(cartaQuePasaria);
  const puntuacionHipotetica = sumarPuntos(puntosCarta);

  if (puntuacionHipotetica > 7.5) {
    pintarMensaje(
      "Habrías perdido con " + puntuacionHipotetica + " puntos"
    );
  } else {
    pintarMensaje(
      "No habrías perdido, hubieras tenido " +
        puntuacionHipotetica +
        " puntos."
    );
  }
}

