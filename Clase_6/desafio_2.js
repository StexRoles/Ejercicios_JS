//PELICULAS
let peliculas = [
    "Turno de día",
    "30 noches con mi ex",
    "Bestia",
    "El monte",
    "Top gun maverick",
    "Elvis",
    "Thor: amor y trueno"
];

//FUNCION PELICULA MAS VENDIDA
function peliculaMasVendida(pelicula){
    let nuevaLista = peliculas.join();
    nuevaLista = nuevaLista.replace(pelicula, pelicula.toUpperCase());
    nuevaLista = nuevaLista.split(",");

    return nuevaLista;
}

//NUEVAS PELICULAS
let nuevasPeliculas = "Counter-Strike, NOP, Vértigo, Nick, Avatar";
nuevasPeliculas = nuevasPeliculas.split(", ");

//FUNCION TODAS LAS PELICULAS
let carteleraCine = (peliculas, nuevasPeliculas) =>
    {   
        let cartelera = peliculas.concat(nuevasPeliculas);
        return cartelera;
    }
 
console.table(carteleraCine(peliculas, nuevasPeliculas));