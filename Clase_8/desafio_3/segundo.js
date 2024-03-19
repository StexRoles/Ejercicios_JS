let juego = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"]


let juegosDeTrompito = (array, cantidadVueltas) =>
{   
    for (let index = 0; index < cantidadVueltas; index++) {
        let random = Math.floor(Math.random() * 6);
        console.log(array[random]);
    }
}

juegosDeTrompito(juego, 3)