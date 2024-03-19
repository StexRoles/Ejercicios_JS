function tablaDeMultiplicar ()
{   
    console.log("TABLAS DE MULTIPLICAR \n");

    for (let tabla = 1; tabla<=10; tabla++)
    {
        for(let i= 1; i<=10; i++)
        {   
            let operacion = tabla * i
            console.log(tabla + " * " + i + " = " + operacion)
        }
        
        console.log("--------------");
    }
}

tablaDeMultiplicar();