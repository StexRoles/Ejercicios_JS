let numeros = [1, 3, 5, 7, 8, 20, 12, 9, 2, 15];

let [num0, num1, num2, num3 , num4, num5, num6, num7, num8, num9] = numeros;

let nuevosNumeros = [num1, num3, num5, num6, num7, num8, num9];

let mascota = {
    nombre: "tostada",
    tipoMascota: "gato",
    color: "naranja",
    raza: "maine"
};

let {nombre, tipoMascota, color, raza} = mascota;

console.log("Hola les presento a mi mascota su nombre es: " + nombre + ", es un hermoso " + tipoMascota + 
        ", de color: " + color + " y su raza es: " + raza);