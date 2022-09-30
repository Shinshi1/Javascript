// CotizadorPostres = Este objeto nos permite saber el precio total de un postre a traves de sus metodos.
class CotizadorPostres {
    constructor(costo, cantidadPostres, descuento, cupon) {
        this.costo = parseInt(costo)
        this.cantidadPostres = parseInt(cantidadPostres)
        this.descuento = parseFloat(descuento)
        this.cupon = cupon
    }

    // adicionalDescuento = verifica que el usuario cuente con el cupon de descuento, para ello el usuario debe ingresar el codigo del cupon, en caso de no escribir bien el codigo no se aplicara el descuento
    adicionalDescuento() {
        debugger
        if (this.cupon === "true") {
            //Explicación: el usuario escribe el nombre del codigo de descuento, invocamos al FOR OF para iterar el sobre el array "listaCodigosDeDescuento" y si se cumple el condicional de que la variable verificar es "===" a el codigo iterado, se nos retorna el index del codigo iterado que debe ser el mismo que el del descuento que queremos aplicar ubicado en un array distinto, en otro caso no funcionaria.
            let verificar = cCodigo.value
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
        debugger
        const costoTotal = this.cantidadPostres * this.costo - ((this.cantidadPostres * this.costo) * this.adicionalDescuento())
        return costoTotal
    }

}

