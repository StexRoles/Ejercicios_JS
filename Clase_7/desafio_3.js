//PRIMERA FUNCION
let numeroSiguiente = valor =>
{
    for(i = 1; i <= 10; i++)
    {   
        console.log(valor+= 1);
    }
}
//numeroSiguiente(1);

//SEGUNDA FUNCION
let hastaElCincoSiete = () =>
{
    for(i = 1; i<=57; i += 3) 
    {
        console.log(i);
    }
}
//hastaElCincoSiete();

//TERCERA FUNCION
let sumaHastaCien = () => 
{
    let suma = 0;
    for(i = 0; i <= 100; i++)
    {
        suma += i;
    }
    return console.log(suma);
}
//sumaHastaCien();

//CUARTA FUNCION
let letrasMayuscula = texto =>
{
    for(i=0; i<texto.length; i++)
    {
        console.log(texto[i].toUpperCase());
    }
}
//letrasMayuscula("mi vida");

//QUINTA FUNCION
let numerosPositivos = [500, 342, 7]

let numerosPares = numerosPositivos =>
{
    for(i= 0; i<numerosPositivos.length; i++)
    {
        let numero = numerosPositivos[i];
        if (numero%2 == 0){console.log(numero);}
    }
}
//numerosPares(numerosPositivos);