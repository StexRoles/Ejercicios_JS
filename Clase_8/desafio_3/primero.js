let numeros = [2, 4, 6, 9, 15, 18]

let buscarNumero = (numeros, numeroBuscar) =>
{
    for (let index = 0; index < numeros.length; index++) {
        if (numeroBuscar == numeros[index]) {
            return console.log("El numero " + numeroBuscar + " si existe en el array");
        }
    }
    return console.log("El valor solicitado no existe");
}

buscarNumero(numeros, 9)