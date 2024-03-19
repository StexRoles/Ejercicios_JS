let numero1 = 2;
let numero2 = 0;
let operador = "p";

switch(operador)
{   
    case "+":
        console.log("El resultado de sumar "+numero1+ " + "+numero2+" es " + (numero1+numero2) );
        break;

    case "-":
        console.log("El resultado de restar "+numero1+ " - "+numero2+" es " + (numero1-numero2) );
        break;

    case "*":
        console.log("El resultado de multiplicar "+numero1+ " * "+numero2+" es " + (numero1*numero2) );
        break;

    case "/":
        if(numero2!=0)
        {
            console.log("El resultado de dividir "+numero1+ " / "+numero2+" es " + (numero1/numero2) );
        }
        else
        {
            console.log("No se puede realizar division por cero(0)");
        }
        break;
    
    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
}