//Conexión DOM JS
//---Barra de Busqueda
const filtroProducto = document.querySelector("#filtroProducto")
const tabla = document.querySelector("#tabla")
const inputFiltrar = document.querySelector("input")

//---Categorias
const categoria = document.querySelector("#categoria")

//---Cotizador
const cPostre = document.querySelector("#cPostre")
const cCantidad = document.querySelector("#cCantidad")
const cCupon = document.querySelector("#cCupon")
const cCodigo = document.querySelector("#cCodigo")
const divCodigo = document.querySelector("#divCodigo")
//botonCotizar
const botonCotizar = document.querySelector("#btnCotizar")
//importe
const importeTotal= document.querySelector("#importeTotal")

// Lista de Postres
const listaPostre = []
const creoID = () => parseInt(Math.random() * 100000)

//Lista de DESCUENTOS
const listaDescuento = [0.10, 0.15, 0.20]
//Lista de Codigos de Descuento
const listaCodigosDeDescuento = ["rebaja10", "rebaja15", "rebaja20"]

//URL
const URL = "../bbdd/listaPostres.json"

//Cards
const cardContainer = document.querySelector(".card-container")
let contenidoHTML = ""