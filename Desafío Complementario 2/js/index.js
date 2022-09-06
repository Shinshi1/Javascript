//LISTA DE POSTRES
const listaPostre = {
    
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
//Lista de DESCUENTOS
const listaDescuento = [0.10, 0.15, 0.20]
// CotizadorPostres = Este objeto nos permite saber el precio total de un postre a traves de sus metodos.
class CotizadorPostres {
    constructor(postre, cantidadPostres, costo, descuento, cupon) {
        this.postre = postre
        this.cantidadPostres = parseInt(cantidadPostres)
        this.costo = this.valor(costo) //invocamos la funcion valor() para saber el costo del postre.
        this.descuento = parseFloat(descuento)
        this.cupon = cupon
    }

    // valor() = nos permite saber el costo del postre atraves del nombre del mismo
    valor() {
        if (this.postre === listaPostre.torta.nombre) {
            return this.costo = listaPostre.torta.precio
        } else if (this.postre === listaPostre.lemonPie.nombre) {
            return this.costo = listaPostre.lemonPie.precio
        } else if (this.postre === listaPostre.muffin.nombre){
            return this.costo = listaPostre.muffin.precio
        } else (
            console.log("El nombre del postre que ingresaste es incorrecto, vuelve a intentarlo")
        )
    }

    // adicionalDescuento = verifica que el usuario cuente con el cupon de descuento, para ello el usuario debe ingresar el codigo del cupon, en caso de no escribir bien el codigo no se aplicara el descuento
    adicionalDescuento() {
        //Lista de Codigos de Descuento
        const listaCodigosDeDescuento = ["rebaja10", "rebaja15", "rebaja20"]
        if (this.cupon) {
            let verificar = prompt("ingresa el código del cupón y obtén un descuento del 10%, 15% 0 20%")
            while (verificar == listaCodigosDeDescuento[0]) {
                return listaDescuento[0];
            }
            while (verificar == listaCodigosDeDescuento[1]) {
                return listaDescuento[1]
            }
            while (verificar == listaCodigosDeDescuento[2]) {
                return listaDescuento[2]
            }
        } else {
            return 0
        }
    }

    // calcularPostre = Hace el calculo total del costo del postre teniendo en cuenta la cantidad el postres que el usuario indique, el costo del postre y si el usuario cuenta con un cupon de descuento este se aplicara
    calcularPostre() {
        const costoTotal = this.cantidadPostres * this.costo - ((this.cantidadPostres * this.costo) * this.adicionalDescuento())
        console.log("Usted debe pagar", costoTotal)
    }

}

function cotizarPostre() {
    debugger

    let postre = prompt("ingresa el nombre del postre")
    let cantidadPostres = parseInt(prompt("ingresa cuantos postres quieres"))
    let cupon = confirm("Tienes un cupón descuento")
    const cotizador = new CotizadorPostres(postre, cantidadPostres, costo, listaDescuento, cupon)
    cotizador.calcularPostre()
}

let costo


// verificarPostre() nos permite verificar si contamos con el postre que el usuario desea.
function verificarPostre() {
    debugger
    postresDisponibles = ["muffin", "lemon pie", "torta"]
    let nombrePostre = prompt("Ingresa el postre que quieres verificar:")
    let resultado = postresDisponibles.includes(nombrePostre.toLocaleLowerCase())
        if (resultado) {
            console.log("El postre ingresado esta disponible, compralo ya!!.")
        } else {
            console.warn("Lo setimos, no tenemos", nombrePostre, "entre nuestros productos")
        }
}