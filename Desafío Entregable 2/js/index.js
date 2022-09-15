// Lista de Postres
const listaPostre = []
const creoID = () => parseInt(Math.random() * 100000)
class Postre {
    constructor(id, nombre, importe, categoria) {
        this.id = creoID(id)
        this.nombre = nombre
        this.importe = importe
        this.categoria = categoria
    }
}

//generarLista() Con esta funcion creamos los postres en el array "listaPostre"
(function generarLista() {
    listaPostre.push(new Postre(0000, "TORTA DE CHOCOLATE", 4100, "TORTAS"))
    listaPostre.push(new Postre(0000, "TIRAMISÚ", 4100, "TORTAS"))
    listaPostre.push(new Postre(0000, "RICOTA", 2360, "TARTAS"))
    listaPostre.push(new Postre(0000, "PASTAFROLA DE MEMBRILLO", 1500, "TARTAS"))
    listaPostre.push(new Postre(0000, "LEMON PIE", 3800, "POSTRES"))
    listaPostre.push(new Postre(0000, "BROWNIE CON MOUSSE DE CHOCOLATE", 4300, "POSTRES"))
})()// con el parentesis aqui, invovamos a la función



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
        for (const postre in listaPostre) {
            if (this.postre === listaPostre[postre].nombre) {
                return this.costo = listaPostre[postre].importe
            }
        } if (this.postre === undefined) {
            console.log("El nombre del postre que ingresaste no existe, vuelve a intentarlo")
        }
    }

    // adicionalDescuento = verifica que el usuario cuente con el cupon de descuento, para ello el usuario debe ingresar el codigo del cupon, en caso de no escribir bien el codigo no se aplicara el descuento
    adicionalDescuento() {
        //Lista de Codigos de Descuento
        const listaCodigosDeDescuento = ["rebaja10", "rebaja15", "rebaja20"]
        if (this.cupon) {
            //Explicación: el usuario escribe el nombre del codigo de descuento, invocamos al FOR OF para iterar el sobre el array "listaCodigosDeDescuento" y si se cumple el condicional de que la variable verificar es "===" a el codigo iterado, se nos retorna el index del codigo iterado que debe ser el mismo que el del descuento que queremos aplicar ubicado en un array distinto, en otro caso no funcionaria.
            let verificar = prompt("ingresa el código del cupón y obtén un descuento del 10%, 15% 0 20%").toLowerCase()
            for (const codigo of listaCodigosDeDescuento) {
                if (verificar === codigo) {
                    return listaDescuento[(listaCodigosDeDescuento.indexOf(verificar))]
                }
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
    const postresDisponibles = listaPostre.map((postre) => {
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
    let resultado = listaPostre.filter((postre) => postre.nombre.includes(nombrePostre))
    console.table(resultado)
}

//filtrarPostre() - Permite al usuario buscar postres mediante su categoria, y muestra dichos postres en Consola
function filtrarCategoria() {
    debugger
    categoriaPostre = prompt("ingresa la categoria de postres que deseas buscar:").toUpperCase()
    let resultado = listaPostre.filter((postre) => postre.categoria.includes(categoriaPostre))
    console.table(resultado)
}



const filtroProducto = document.querySelector("#filtroProducto")
const tabla = document.querySelector("#tabla")
const inputFiltrar = document.querySelector("input")

const bienvenidaContainer = document.querySelector(".bienvenida-container")

// DOM - funcion bienvenida() - el usuario ingresa su nombre y le envieamos un saludo a traves del documento HTML

function bienvenida() {
    let usuario = prompt("Ingrese su nombre")

    let mensaje = `<h4>Nos alegra que nos elijas ${usuario} 😊</h4>`
    bienvenidaContainer.innerHTML = mensaje

}
bienvenida()

//funcion cargarProductos() - agrega los productos al HTML
function cargarProductos(array) {
    let fila = ""
    tabla.innerHTML = ""
    array.forEach(postre => {
        fila = `<tr>
                        <td>${postre.nombre}</td>
                        <td>${postre.id}</td>
                        <td>${postre.importe}</td>
                        <td>${postre.categoria}</td>
                        <td><img src="./assets/addcart.svg" alt="agregar al carrito" class= "btn-cart" id= "btn-agregar${postre.id}"></td>
                </tr>`
        tabla.innerHTML += fila
    })
}
cargarProductos(listaPostre)

//EVENTOS - El siguiente codigo filtra los productos utilizando el input(el buscador), para filtrar los productos y que solo aparezcan en pantalla los postres con el nombre identico al que el usuario, también se hace uso de la funcion creada anteriormente llamada cargarProductos()



function filtrarProductos() { //FILTRAR PRODUCTOS EN LA TABLA INGRESANDO PARTE DEL NOMBRE
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const resultado = listaPostre.filter(postre => postre.nombre.includes(inputFiltrar.value))
        if (resultado.length === 0) {
            console.clear()
            console.warn("No se encontraron productos.")
            cargarProductos(listaPostre)
        } else {
            cargarProductos(resultado)
        }
    } else {
        cargarProductos(listaPostre)
    }
}

inputFiltrar.addEventListener("input", filtrarProductos)



function eventoBotonesAgregar() {
    listaPostre.forEach(postre => {
        const btnAgregar = document.querySelector(`#btn-agregar${postre.id}`)
        btnAgregar.addEventListener("click", () => agregarAlCarrito(`${postre.id}`))
    })
}
eventoBotonesAgregar()

// agregarAlCarrito() = agrega un postre al carrito segun el id
function agregarAlCarrito(id) {
    const postre = listaPostre.find(postr => postr.id == id)
    carrito.push(postre)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function recuperoCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("#tablaCarrito")
        carrito.forEach(postre => {
           let fila = `<tr>
                        <td>${postre.nombre}</td>
                        <td>$ ${postre.importe}</td>
                    </tr>`
                    tabla.innerHTML += fila
        });
}
recuperoCarrito()

function recuperarCarrito() {
    if (localStorage.getItem("carrito")) { // devuelve true en caso de que exita el carrito, y se ejecuta el if
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
}
recuperarCarrito()


//Mostrar Carrito - Este evento sirve para mostar el carrito tocando el icono del carrito
const cartToggle = document.querySelector(".cart-toggle")
const tableCarrito = document.querySelector(".table-carrito")

cartToggle.addEventListener("click", () => {
    tableCarrito.classList.toggle("table-carrito--visible")
})