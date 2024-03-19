let fs = require("fs");

let importar = nombreMarca => {
    switch (nombreMarca) {
        case "Hot Toys":
            return JSON.parse(fs.readFileSync(__dirname + "/datos/figuras1.json", "utf-8"));

        case "Bandai":
            return JSON.parse(fs.readFileSync(__dirname + "/datos/figuras2.json", "utf-8"));

        case "Star Wars":
            return JSON.parse(fs.readFileSync(__dirname + "/datos/figuras3.json", "utf-8"));
    }
}

module.exports = importar;