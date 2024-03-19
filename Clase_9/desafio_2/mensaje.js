let fs = require("fs");

let mensaje = fs.readFileSync(__dirname + "/texto.txt", "utf-8");

console.log(mensaje);