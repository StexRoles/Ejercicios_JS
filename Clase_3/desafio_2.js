let nombre = "diego";
let apellido = "jimenez";
let sueldoActual = 120000;
let porcentajeAumento= 25;
let calculoAumento = (sueldoActual*porcentajeAumento/100);
let nuevoSueldo = (sueldoActual+calculoAumento);

console.log("Hola estimad@ "+ nombre + " " + apellido)
console.log("En base a su sueldo actual:");
console.log("$" + sueldoActual);
console.log("Ha recibido un aumento del 25%:");
console.log("$" + calculoAumento);
console.log("y su nuevo sueldo es de");
console.log("$" + nuevoSueldo);
