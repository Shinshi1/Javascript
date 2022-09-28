//generarLista() Con esta funcion creamos los postres en el array "listaPostre"
(function generarLista() {
    listaPostre.push(new Postre(0000, "TORTA DE CHOCOLATE", 4100, "TORTAS"))
    listaPostre.push(new Postre(0000, "TIRAMISÚ", 4100, "TORTAS"))
    listaPostre.push(new Postre(0000, "RICOTA", 2360, "TARTAS"))
    listaPostre.push(new Postre(0000, "PASTAFROLA DE MEMBRILLO", 1500, "TARTAS"))
    listaPostre.push(new Postre(0000, "LEMON PIE", 3800, "POSTRES"))
    listaPostre.push(new Postre(0000, "BROWNIE CON MOUSSE DE CHOCOLATE", 4300, "POSTRES"))
})()// con el parentesis aqui, invovamos a la función

// DOM 

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
        debugger
        const btnAgregar = document.querySelector(`#btn-agregar${postre.id}`)
        btnAgregar.addEventListener("click", () => agregarAlCarrito(`${postre.id}`))
        btnAgregar.addEventListener("click", () => recuperoPostre(`${postre.id}`))// agregamos el postre en el momento que hacemos click en el icono de agregar al carrito
        
    })
}
eventoBotonesAgregar()



// recuperoPostre(id) = Agrega al postre a medida que hacemos click en agregar al carrito
function recuperoPostre(id) {
    const postre = carrito.find(postr => postr.id == id)
    let fila =  `<tr>
                    <td>${postre.nombre}</td>
                    <td>$ ${postre.importe}</td>
                </tr>`
                tableCarrito.innerHTML += fila
}

// agregarAlCarrito() = agrega un postre al carrito segun el id
function agregarAlCarrito(id) {
    debugger
    const postre = listaPostre.find(postr => postr.id == id)
    carrito.push(postre)
    //actualizo el carrito en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function pintarCarrito() {
    //obtengo el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    //pinto el carrito
    let tabla = document.querySelector("#tablaCarrito")
        carrito.forEach(postre => {
           let fila = `<tr>
                        <td>${postre.nombre}</td>
                        <td>$ ${postre.importe}</td>
                       </tr>`
                    tabla.innerHTML += fila
        });
}
pintarCarrito()


function recuperarCarrito() {
    if (localStorage.getItem("carrito")) { // devuelve true en caso de que exista el carrito, y se ejecuta el if
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
}
recuperarCarrito()

const calcularCarrito = () => {
    let total = carrito.reduce((acc, postr) => acc + postr.importe, 0)

        let tabla = document.querySelector("#tablaCarrito")
        let fila = `<tr>
                        <td class="table-carrito--ultimo" colspan="3"> TOTAL: ${total}</td>
                    </tr>`
    tabla.innerHTML += fila
}
calcularCarrito()


//Mostrar Carrito - Este evento sirve para mostar el carrito tocando el icono del carrito
const cartToggle = document.querySelector(".cart-toggle")
const tableCarrito = document.querySelector(".table-carrito")

cartToggle.addEventListener("click", () => {
    tableCarrito.classList.toggle("table-carrito--visible")
})

//categoriasDuplicados() = Utilizando la Funcion de order superior reduce() creamos una lista donde concatenamos las categorias y luego creamos una lista llamada listaCategorias donde dichas categorias no se repiten usando el objeto Set
function categoriaSinDuplicados() {
    const categorias = listaPostre.reduce((acc, postr) => acc.concat(postr.categoria), [] )
    const listaCategorias = new Set(categorias) //Categorias sin Duplicados
    return listaCategorias
}
//guardamos dicha lista en la constante "categorias"
const categorias = categoriaSinDuplicados()

//cargarCategorias() = Cargamos las categorias en el select correspondiente
const cargarCategorias = (select, array)=> {
    debugger
    if (array.size > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento}">${elemento}</option>`
        })
        
    } else {
        console.error("No existen elementos en el array.")
    }
}
cargarCategorias(categoria, categorias)

// filtrarCategoria() = Filtra los postres segun sus categorias
const filtrarCategoria = () => {
    if (categoria.value !== "") {
        const resultado = listaPostre.filter(postre => postre.categoria.includes(categoria.value))
        if (resultado.length === 0) {
            console.clear()
            console.warn("No se encontraron Productos en esa categoria")
            cargarProductos(listaPostre)
        } else {
            cargarProductos(resultado)
        }
    } else {
        cargarProductos(listaPostre)
    }
}
categoria.addEventListener("input", filtrarCategoria)

//Cotizador
//cargarCombo() = Carga el objeto/array al select de HTML
const cargarPostre = (select, array)=> {
    debugger
    if (array.length > 0) {
        array.forEach(postr => {
            select.innerHTML += `<option value="${postr.importe}">${postr.nombre}</option>`
        })
    } else {
        console.error("No existen elementos en el array.")
    }
}
cargarPostre(cPostre, listaPostre)

const cargarCodigos = (select, array)=> {
    debugger
    if (array.length > 0) {
        array.forEach(codigo => {
            select.innerHTML += `<option value="${codigo}">${codigo}</option>`
        })
    } else {
        console.error("No existen elementos en el array.")
    }
}
cargarCodigos(cCodigo, listaCodigosDeDescuento)

//datosCompletos() = devuelve true si los datos estan completos y false si estan incompletos.
const datosCompletos = ()=> {
    if (cPostre.value !== "..." && parseInt(cCantidad.value) && cCantidad.value >= 1 && cCantidad.value <= 100 && cCupon.value !== "..." ) {
        return true
    } else {
        return false
    }
}

const realizarCotizacion = ()=> {
    debugger
    if (datosCompletos()) {//realizar la cotización
        const cotizarPostre = new CotizadorPostres(cPostre.value, cCantidad.value, listaDescuento, cCupon.value)
              importeTotal.innerText = cotizarPostre.calcularPostre()
            //   btnEnviar.classList.remove("ocultar")
            //   toastSwal("Gracias por cotizar con nostros.", "green", "whitesmoke")
    } else {
        alert("🛑Completa todos los valores solicitados.")
    }
}

botonCotizar.addEventListener("click", realizarCotizacion)

cCupon.addEventListener("change", () => {
    if (cCupon.value === "false" ) {
        divCodigo.className = "smoke"
    } else {
        divCodigo.className = ""
    }
})

let costo