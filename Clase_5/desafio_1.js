let montoAlquilerVehiculo = (tipo, dias, sillaBebe) => 
{   
    let montoTotal = 0;
    switch(tipo)
    {
        case 'Compacto':
            montoTotal += 14000*dias;
            break;
        
        case 'Mediano':
            montoTotal += 17000*dias;
            break;

        case 'Camioneta':
            montoTotal += 28000*dias;
            break;      
    }
    
    sillaAdicional= sillaBebe==true? montoTotal += 1200*dias: false;

    return montoTotal;
}
        
let mensajeCliente = (tipo, dias, sillaBebe) => 
console.log(("Estimado cliente: en base al tipo de vehiculo "+ tipo + 
    " alquilado, considerando los " + dias + " días utilizados el monto "+
    "total a pagar es de $" + montoAlquilerVehiculo(tipo, dias, sillaBebe)));

mensajeCliente('Compacto',1, true)