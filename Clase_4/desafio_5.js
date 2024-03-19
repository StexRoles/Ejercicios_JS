// La altura debe estar comprendida entre 150 m a 300 m.
// La velocidad debe estar comprendida entre 268 a 278 km/hr.

let altura = 16;
let velocidad = 27;

let alturaCorrecta= altura<300 && altura>150? true: false ;
let velocidadCorrecta= velocidad<278 && velocidad>268? true: false ;

if(alturaCorrecta==true && velocidadCorrecta==true)
{
    console.log("¡El avion esta listo para realizar el aterrizaje!");
}

else
{
    console.log("¡El avion No esta listo para aterrizar!");
}