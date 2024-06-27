var paginacion = document.getElementById("Pagination")
paginacion.style.flexDirection = "row"
paginacion.style.justifyContent = "center"
paginacion.style.alignItems = "center"
paginacion.style.columnGap = "60px"

var numeroPagina = 1

document.getElementById("PrevPage").addEventListener("click", function () {
    prevPage()
})

document.getElementById("NextPage").addEventListener("click", function () {
    nextPage()

})

async function nextPage() {
    var paginaSiguiente = sessionStorage.getItem("PagSig")
    try {
        var res = await fetch(paginaSiguiente)

        await res.json().then(informacion => {
            if (informacion.info.next === null) {
                bloquearBtnPaginaProxima()
            } else {
                sessionStorage.setItem("PagSig", informacion.info.next)
                sessionStorage.setItem("PagPrev", informacion.info.prev)
            }
            document.getElementById("PrevPage").style.visibility = "visible"

            numeroPagina += 1
            document.getElementById("NumPage").innerHTML = numeroPagina
            colocarPersonajesFiltrados(informacion.results)
        })

    } catch (error) {
        console.log(error)
    }

}

async function prevPage() {
    var paginaAnterior = sessionStorage.getItem("PagPrev")
    console.log(paginaAnterior)
    try {
        var res = await fetch(paginaAnterior)

        await res.json().then(informacion => {
            if (informacion.info.prev === null) {
                bloquearBtnPaginaAnterior()
            } else {
                sessionStorage.setItem("PagPrev", informacion.info.prev)
            }
            sessionStorage.setItem("PagSig", informacion.info.next)

            numeroPagina -= 1
            document.getElementById("NumPage").innerHTML = numeroPagina
            colocarPersonajesFiltrados(informacion.results)
        })

    } catch (error) {
        console.log(error)
    }
}

function bloquearBtnPaginaProxima() {
    document.getElementById("PrevPage").style.visibility = "visible"
    document.getElementById("NextPage").style.visibility = "hidden"
}

function bloquearBtnPaginaAnterior() {
    document.getElementById("PrevPage").style.visibility = "hidden"
    document.getElementById("NextPage").style.visibility = "visible"
}