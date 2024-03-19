//funcion callback
let totalPedido = (hamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate,
                    lechuga, cebolla ) => 
    {
        //HAMBURGUESAS
        hamburguesa == 'carne'? hamburguesa = 1800: false;
        hamburguesa == 'pollo'? hamburguesa = 1500: false;
        hamburguesa == 'vegetariana'? hamburguesa = 1200: false;

        //ADICIONALES
        let adicionJamon = jamon == 'si'? jamon = 30: false;
        let adicionQueso = queso == 'si'? queso = 25: false;
        let adicionSalTomate = salsaTomate == 'si'? salsaTomate = 5: false;
        let adicionMayonesa = mayonesa == 'si'? mayonesa = 5: false;
        let adicionMostaza = mostaza == 'si'? mostaza = 5: false;
        let adicionTomate = tomate == 'si'? tomate = 15: false;
        let adicionLechuga = lechuga == 'si'? lechuga = 10: false;
        let adicionCebolla = cebolla == 'si'? cebolla = 10: false;

        return hamburguesa + adicionJamon + adicionQueso + adicionSalTomate + adicionMayonesa +
               adicionMostaza + adicionTomate + adicionLechuga + adicionCebolla;
    }

//FUNCION
let factura = (nombre, apellido, hamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza,
                 tomate, lechuga, cebolla) => 
    {
        return "Estimad@ " + nombre + " " + apellido + ", el monto total a pagar es de: $" + 
                totalPedido(hamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla );
    }

//MOSTRAR POR CONSOLA
console.log(factura("Sharon", "Castro", 'pollo', 'si', '', 'si', '', 'si','', '', 'si'));
