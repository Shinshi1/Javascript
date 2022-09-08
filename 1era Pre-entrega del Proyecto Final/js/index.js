// Lista de Postres
const listaPostre = []

class Postre {
    constructor(id, nombre, importe, categoria) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.categoria = categoria
    }
}

//generarLista() Con esta funcion creamos los postres en el array "listaPostre"
function generarLista() {
    listaPostre.push(new Postre(0000,"TORTA DE CHOCOLATE", 4100, "TORTAS"))
    listaPostre.push(new Postre(0000,"TIRAMISÚ", 4100, "TORTAS"))
    listaPostre.push(new Postre(0000,"RICOTA", 2360, "TARTAS"))
    listaPostre.push(new Postre(0000,"PASTAFROLA DE MEMBRILLO", 1500, "TARTAS"))
    listaPostre.push(new Postre(0000,"LEMON PIE", 3800, "POSTRES"))
    listaPostre.push(new Postre(0000,"BROWNIE CON MOUSSE DE CHOCOLATE", 4300, "POSTRES"))
}

generarLista()

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
        if (this.postre === listaPostre[0].nombre) {
            return this.costo = listaPostre[0].importe
        } else if (this.postre === listaPostre[1].nombre) {
            return this.costo = listaPostre[1].importe
        } else if (this.postre === listaPostre[2].nombre){
            return this.costo = listaPostre[2].importe
        } else if (this.postre === listaPostre[3].nombre){
            return this.costo = listaPostre[3].importe
        } else if (this.postre === listaPostre[4].nombre){
            return this.costo = listaPostre[4].importe
        } else if (this.postre === listaPostre[5].nombre){
            return this.costo = listaPostre[5].importe
        } else (
            console.log("El nombre del postre que ingresaste es incorrecto, vuelve a intentarlo")
        )

        
    }

    // adicionalDescuento = verifica que el usuario cuente con el cupon de descuento, para ello el usuario debe ingresar el codigo del cupon, en caso de no escribir bien el codigo no se aplicara el descuento
    adicionalDescuento() {
        //Lista de Codigos de Descuento
        const listaCodigosDeDescuento = ["rebaja10", "rebaja15", "rebaja20"]
        if (this.cupon) {
            let verificar = prompt("ingresa el código del cupón y obtén un descuento del 10%, 15% 0 20%").toLowerCase()
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

    let postre = prompt("ingresa el nombre del postre").toUpperCase()
    let cantidadPostres = parseInt(prompt("ingresa cuantos postres quieres"))
    let cupon = confirm("Tienes un cupón descuento")
    const cotizador = new CotizadorPostres(postre, cantidadPostres, costo, listaDescuento, cupon)
    cotizador.calcularPostre()
}

let costo


// verificarPostre() - nos permite verificar si contamos con el postre que el usuario desea.
function verificarPostre() {
    debugger
    //postersDisponibles = Creamos un nuevo array solamente con los nombres de los postres
    const postresDisponibles = listaPostre.map((postre) =>{
        return {
            nombre: postre.nombre
        }
    })
    let nombrePostre = prompt("Ingresa el nombre del postre que quieres verificar:")
    let resultado = postresDisponibles.includes(nombrePostre.toUpperCase())
        if (resultado) {
            console.log("El postre ingresado esta disponible, compralo ya!!.")
        } else {
            console.warn("Lo setimos, no tenemos", nombrePostre, "entre nuestros productos")
        }
}

//buscarPostre() - Permite al usuario buscar el postre que este ingrese, y lo muestra en Consola
function buscarPostre() {
    nombrePostre = prompt("ingresa el nombre del postre que deseas buscar:").toUpperCase()
    let resultado = listaPostre.filter((postre)=> postre.nombre.includes(nombrePostre))
    console.table(resultado)
}

//filtrarPostre() - Permite al usuario buscar postres mediante su categoria, y muestra dichos postres en Consola
function filtrarCategoria() {
    debugger
    categoriaPostre = prompt("ingresa la categoria de postres que deseas buscar:").toUpperCase()
    let resultado = listaPostre.filter((postre)=> postre.categoria.includes(categoriaPostre))
    console.table(resultado)
}

