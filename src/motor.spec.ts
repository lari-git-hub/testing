import { comprobarPartida, dameNumeroAleatorio, obtenerNumeroCarta, obtenerPuntos } from "./motor";
import { vi } from "vitest"; 

describe("comprobarPartida", () => {
  it("vamos a comprobar si el usuario ha ganado", () =>{
    // Arrange
      const puntuacion = 7.5;

    // Act
      const resultado = comprobarPartida(puntuacion);

    // Assert
      expect(resultado).toBe("GANADO");

  });

  it("vamos a comprobar si el usuario ha perdido", () =>{
    // Arrange
      const puntuacion = 8;

    // Act
      const resultado = comprobarPartida(puntuacion);

    // Assert
      expect(resultado).toBe("GAME_OVER");

});

  it("vamos a comprobar si la partida continúa", () =>{
    // Arrange
      const puntuacion = 5;

    // Act
      const resultado = comprobarPartida(puntuacion);

    // Assert
      expect(resultado).toBe("EN_JUEGO");

});

it("vamos a comprobar el número aleatorio", () =>{
  //Arrange
    
    vi.spyOn(Math, "random",).mockReturnValue(0.5);

  //Act
  const resultado = dameNumeroAleatorio()

  //Assert
  expect(resultado).toBe(6)
  vi.restoreAllMocks()
});

it("vamos a comprobar el número de la carta menor o igual a 7", () =>{
  //Arrange
    const numeroAleatorio = 5;

  //Act
  const resultado = obtenerNumeroCarta(numeroAleatorio);

  //Assert
  expect(resultado).toBe(5)
  
});

it("vamos a comprobar el número de la carta mayor que 7", () =>{
  //Arrange
    const numeroAleatorio = 8;

  //Act
  const resultado = obtenerNumeroCarta(numeroAleatorio);

  //Assert
  expect(resultado).toBe(10)
  
});

it("vamos a comprobar la puntuacion de las cartas menores o iguales a 7", () =>{
  //Arrange
    const carta = 5;

  //Act
  const resultado = obtenerPuntos(carta);

  //Assert
  expect(resultado).toBe(5)
  
});

it("vamos a comprobar la puntuacion de las cartas mayores que 7", () =>{
  //Arrange
    const carta = 10;

  //Act
  const resultado = obtenerPuntos(carta);

  //Assert
  expect(resultado).toBe(0.5)
  
});


});