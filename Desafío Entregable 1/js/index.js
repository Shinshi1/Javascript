// SIMULADOR INTERACTIVO(EL USUARIO PONE DATOS Y DA UN RESULTADO )

//ALGORITMO CONDICIONAL(IF, IF ELSE) - MÍNIMO 1 DE LOS 3
//ALGORITMO EN CICLO (FOR, WHILE, DO WHILE) - MÍNIMO 1 DE LOS 3

// EL PROYECTO TRATA DE UNA CALCULADORA DEL COSTO TOTAL DEL POSTRE ELEGIDO POR EL USUARIO(HAY UNA LISTA LIMITADA), EL USUARIO ELEGIRÁ UN POSTRE Y UNA CANTIDAD DEL POSTRE ELEGIDO, LUEGO UN MEDIO DE PAGO(SI NO ES AL CONTADO TENDRÁ LA POSIBILIDAD DE PAGAR EN CUOTAS), Y TENDRÁ LA POSIBILIDAD DE APLICAR UN CÓDIGO DE DESCUENTO DEL 10% (EN CASO DE TENERLO).



//LISTA DE POSTRES

let torta = {
    nombre: "Torta",
    precio: 2000
}

let tarta = {
    nombre: "Tarta",
    precio: 1500
}

let muffin = {
    nombre: "Muffin",
    precio: 800
}

//SIMULADOR

const descuento = 0.10

class CotizadorPostres {
    constructor(postre, cantidadPostres, precio, descuento, cupon) {
        this.postre = postre
        this.cantidadPostres = parseInt(cantidadPostres)
        this.precio = parseInt(precio)
        this.descuento = parseFloat(descuento)
        this.cupon = cupon
    }

    valor() {
        if (this.postre === torta.nombre) {
            return this.precio = torta.precio
        } else if (this.postre === tarta.nombre) {
            return this.precio = tarta.precio
        } else {
            return this.precio = muffin.precio
        }
    }

        calcularPostre() {
            const costoTotal = this.cantidadPostres * this.precio - ((this.cantidadPostres * this. precio) * this.adicionalDescuento())
            console.log("Usted debe pagar", costoTotal)
        }
        
        adicionalDescuento() {
            if (this.cupon) {
                return descuento
            } else {
                return 0
            }
        }
}

function cotizarPostre() {
    debugger


    let postre = prompt("ingresa el nombre del postre")
    let cupon = confirm("Tienes un cupón descuento")
    let cantidadPostres = parseInt(prompt("ingresa cuantos postres quieres"))
    const cotizador = new CotizadorPostres(postre, cantidadPostres, precio, descuento, cupon)
    cotizador.calcularPostre()
}

let precio = muffin.precio

//ME FALTA AGREGAR UN CICLO FOR O WHILE O DO WHILE. PERO EL RECOMENDADO ES EL FOR