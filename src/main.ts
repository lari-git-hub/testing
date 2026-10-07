import "./style.css";
import { pedirCarta, mostrarMensajeFinal, nuevaPartida, comprobarQueHabriaPasado } from "./ui";

// BOTÓN PEDIR CARTA

const botonCarta = document.querySelector(".carta");

if (botonCarta && botonCarta instanceof HTMLButtonElement) {
  botonCarta.addEventListener("click", function () {
    pedirCarta();
  });
}

// BOTÓN ME PLANTO

const plantarseBoton = document.querySelector(".plantarse");

if (plantarseBoton && plantarseBoton instanceof HTMLButtonElement) {
  plantarseBoton.addEventListener("click", function () {
    mostrarMensajeFinal();
  });
}

// BOTÓN NUEVA PARTIDA

const nuevaPartidaBoton = document.querySelector(".nuevaPartida");

if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {
  nuevaPartidaBoton.addEventListener("click", function () {
    nuevaPartida();
  });
}

// BOTÓN ¿QUÉ HABRÍA PASADO?

const quePasariaBoton = document.querySelector(".quePasaria");

if (quePasariaBoton && quePasariaBoton instanceof HTMLButtonElement) {
  quePasariaBoton.addEventListener("click", function () {
    comprobarQueHabriaPasado();
  });
}