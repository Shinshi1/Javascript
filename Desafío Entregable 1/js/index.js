// SIMULADOR INTERACTIVO(EL USUARIO PONE DATOS Y DA UN RESULTADO )

//LISTA DE POSTRES
let listaPostre = {
    
    torta: {
        nombre: "Torta",
        precio: 2000
    },
    
    lemonPie: {
        nombre: "Lemon Pie",
        precio: 1500
    },
    
    muffin: {
        nombre: "Muffin",
        precio: 800
    }
}

//SIMULADOR

const descuento = 0.10

class CotizadorPostres {
    constructor(postre, cantidadPostres, precio, descuento, cupon) {
        this.postre = postre
        this.cantidadPostres = parseInt(cantidadPostres)
        this.precio = this.valor(precio)
        this.descuento = parseFloat(descuento)
        this.cupon = cupon
    }

    valor() {
        if (this.postre === listaPostre.torta.nombre) {
            return this.precio = listaPostre.torta.precio
        } else if (this.postre === listaPostre.lemonPie.nombre) {
            return this.precio = listaPostre.lemonPie.precio
        } else if (this.postre === listaPostre.muffin.nombre){
            return this.precio = listaPostre.muffin.precio
        } else (
            console.log("El nombre del postre que ingresaste es incorrecto, vuelve a intentarlo")
        )
    }

    calcularPostre() {
        const costoTotal = this.cantidadPostres * this.precio - ((this.cantidadPostres * this.precio) * this.adicionalDescuento())
        console.log("Usted debe pagar", costoTotal)
    }

    adicionalDescuento() {
        let rebaja = "rebaja"
        if (this.cupon) {
            let verificar = prompt("ingresa el código del cupón y obtén un descuento del 10%")
            while (verificar == rebaja) {
                return descuento;
            }
        } else {
            return 0
        }
    }
}

function cotizarPostre() {
    debugger


    let postre = prompt("ingresa el nombre del postre")
    let cantidadPostres = parseInt(prompt("ingresa cuantos postres quieres"))
    let cupon = confirm("Tienes un cupón descuento")
    const cotizador = new CotizadorPostres(postre, cantidadPostres, precio, descuento, cupon)
    cotizador.calcularPostre()
}

let precio