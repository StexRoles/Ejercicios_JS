let autosImportados = require("./autos");

const concesionaria = {
   autos: autosImportados,

   buscarAuto:function(patente){
        for (let i = 0; i < this.autos.length; i++) {
            if (patente==this.autos[i].patente) {
                return this.autos[i];
            }
        }
        return null;
    },

    venderAuto:function(patente){
        let buscar = this.buscarAuto(patente);

        if (buscar != null){
            buscar.vendido = true;
        }
        return buscar;
    },

    autosParaLaVenta:function(){
        let vender = this.autos.filter(function(elemento){
            return elemento.vendido == false;
        });

        return vender;
    },

    autosNuevos:function(){
        let venta = this.autosParaLaVenta();

        let autosNuevos = venta.filter(function(elemento){
            return elemento.km <= 100;
        });

        return autosNuevos;
    },

    listaDeVentas:function(){
        let listaVenta = [];

        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].vendido == true) {
                listaVenta.push(this.autos[i].precio);    
            }
        }
        
        return listaVenta;
    },

    totalDeVentas:function(){
        let total = this.listaDeVentas().reduce(function(acumulador, precio){
            return acumulador + precio;
        },0);

        return total;
    },

    puedeComprar:function(auto, persona){
        if (persona.capacidadDePagoTotal >= auto.precio && (persona.capacidadDePagoEnCuotas*auto.cuotas)>= auto.precio){
                return true;
        }
        else{return false};
    },

    autosQuePuedeComprar:function(persona){
        let venta = this.autosParaLaVenta();
        
        let siLoPpuedeComprar = venta.filter(function(autos){
            return this.puedeComprar(autos, persona) == true;
        }, concesionaria);

        return siLoPpuedeComprar;
    }
}; 

console.log(concesionaria.autos);