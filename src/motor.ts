import { partida } from "./model";

export const dameNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const obtenerNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }

  return numeroAleatorio;
};

export const obtenerPuntos = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }

  return carta;
};

export const sumarPuntos = (nuevosPuntos: number) => {
  return partida.puntuacion + nuevosPuntos;
};

export type EstadoPartida = | "EN_JUEGO" | "GAME_OVER" | "GANADO";

export const comprobarPartida = (): EstadoPartida => {
  if (partida.puntuacion > 7.5){
     return "GAME_OVER";
    }
  
  if (partida.puntuacion === 7.5) {
     return "GANADO"; 
    } 
    return "EN_JUEGO"; };