let pagoMes = 18000 //PAGO ACTUAL DE ENERGIA ELECTRICA POR MES
let consumoKWH = 340 //CONSUMO MENSUAL DE KILOVATIOS HORA DE CONSUMO

let consumoHogar = consumoKWH>300? ((pagoMes*20)/100)+pagoMes: pagoMes;

console.log("Debido a que su hogar tuvo un consumo de " + consumoKWH + 
"kwh, en base al ajuste tarifar (hogares con consumo mayor a 300kwh por mes tendran " +
"un aumento del 20%), cumplimos con informarle que se ha ajustado el total " +
"a pagar, que será de $" + consumoHogar)