let cursosPrecio = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react",7000], ["nodejs", 15000]]
let cursosAtomar = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "NODEJS"]

let calcularMontoTotal = (cursosPrecio, cursosAtomar) => 
{
    let totalAPagar = 0;

    for (let i=0; i<cursosPrecio.length; i++)
    {
        for(let j=0; j<cursosAtomar.length; j++)
        {
            if (cursosPrecio[i][0].toUpperCase() == cursosAtomar[j])
            {
                totalAPagar += cursosPrecio[i][1]
            }
        }
    }
    return totalAPagar;
    
}

 
let mensaje = (nombre, apellido, cursosPrecio, cursosAtomar, calcularMontoTotal) =>
{
    console.log("\n*****************************************************************");
    console.log("Estimado " + nombre + " " + apellido + ", en función de los cursos seleccionados: \n");
    for(i=0; i<cursosAtomar.length; i++)
    {
        console.log(i+1 + ". - " + cursosAtomar[i] + "\n");
    }
    console.log("El monto total a pagar es de: " + calcularMontoTotal(cursosPrecio, cursosAtomar) + "\n");
    console.log("Bienvenido a la gran aventura Digital House. \n");
    console.log("*****************************************************************");
}

mensaje("Steven", "Navarro", cursosPrecio, cursosAtomar, calcularMontoTotal);