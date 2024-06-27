document.getElementById("FilterCharactersButton").addEventListener("click", function (event) {
    document.getElementById("BackgroundForm").style.display = "flex"

    reiniciarPagina()
})

document.getElementById("CloseFilter").addEventListener("click", function (event) {
    document.getElementById("BackgroundForm").style.display = "none"

    reiniciarPagina()
})

function reiniciarPagina() {
    document.getElementById("FieldName").getElementsByTagName("input")[0].value = ""

    document.getElementById("FieldType").getElementsByTagName("input")[0].value = ""

    var estadosPosibles = document.getElementsByName("status")
    estadosPosibles.forEach(element => {
        element.checked = false
    })

    var especiesPosibles = document.getElementsByName("specie")
    especiesPosibles.forEach(element => {
        element.checked = false
    })

    var generosPosibles = document.getElementsByName("gender")
    generosPosibles.forEach(element => {
        element.checked = false
    })
}

