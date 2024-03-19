let figuras = require("./collectibles");

let hotToys = figuras("Hot Toys");
let bandai = figuras("Bandai");
let starWars = figuras("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = 
{
    figuras: unifiedCollectibles,

    listFigures: function (){
        let todosLosDatos = this.figuras.forEach(figura => {
            return console.table(figura);
        });

        return todosLosDatos;
    },

    figuresByBrand: function (marcaFigura){
        let buscar = this.figuras.filter(figuras => {
            return figuras.marca == marcaFigura;
        });

        let condicion = buscar.length > 0? buscar: null;
        return console.table(condicion);
    }
};