

//Generar un numero entero aleatorio entre N y M
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;