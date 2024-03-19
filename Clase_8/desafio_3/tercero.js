let numeros = [8, 4, 22, 2, 68, 22, 45, 63, 9, 11]

let sumatoria = numeros =>
{
    let pares = 0;
    let impares = 0;

    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index]%2 == 0 ){
            pares += 1
        }
        else{
            impares +=1
        }
    }
    
    let resutados = [pares, impares]
    return console.log(resutados);
}

sumatoria(numeros)