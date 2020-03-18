function tomarValoresDeInputs() {
    let $form = obtenerForm()
    let provincia = $form.ciudad.value
    let regalo = document.querySelector("#descripcion-regalo").value
    let inputs = [provincia, regalo]
    return inputs
}

function validarRegalo(regalo) {
    if (regalo.length < 2) {
        return "Este campo debe contener al menos más de 2 caracteres"
    }
    else if (regalo.length > 250) {
        return "Este campo debe tener menos de 250 caracteres"
    }
    return ""
}


function validarProvincia(provincia) {
    let arrayDeProvincias = obtenerArrayProvincias()
    if (arrayDeProvincias.includes(provincia)) { return "" }
    else { return 'La provincia seleccionada no es perteneciente a ningún valor' }
}


$botonSubmit = document.querySelector("#enviar-carta")
$botonSubmit.onclick = function () {
    valores = tomarValoresDeInputs()
    validarRegalo(valores[1])
    validarProvincia(valores[0])

    return false
}
