let electrodomesticos = ["nevera", "computador", "lavadora", "microhondas", "estufa", "horno"];

/* electrodomesticos.shift();
electrodomesticos.push("nevera");
 */

/* electrodomesticos.push("televisor", "barra de sonido"); */

/* function buscarArray (elemento){

    buscar = electrodomesticos.includes(elemento) == true? "Producto encontrado": "El producto buscado no existe";
    return buscar;
} */

console.table(electrodomesticos.join().replace("estufa", "televisor").split(","));