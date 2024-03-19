//Depositos = NumPositivos    Retiros = NumNegativos
let operacionesBancarias = [100, 50, -50];

//VARIABLES
let depositos = 0;
let retiros = 0;
let saldo = 0;

//CALLBACK
let operaciones = operacionesBancarias  => 
{
    for(let i = 0; i < operacionesBancarias.length; i++)
    {  
        if ( operacionesBancarias [i] > 0){depositos += operacionesBancarias [i]}  
        else (retiros += operacionesBancarias [i] * -1)   
    }
    return saldo+= depositos - retiros;
}

//FUNCION CONSOLA
let recibo = (nombre, apellido, operaciones) =>
{
    return console.log
    (
        "Estimad@ " + nombre + " " + apellido + ":\n\n"
        + "El monto total de los depósitos es de: $" + depositos +  "\n\n"
        + "El monto total de los retiros es de: $"  + retiros + "\n\n"
        + "Por lo tanto, su saldo actual en la cuenta es de: $" + operaciones
    )
}

recibo("Nicole", "Medina", operaciones(operacionesBancarias))