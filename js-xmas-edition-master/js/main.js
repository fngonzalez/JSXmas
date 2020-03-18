function tomarValoresDeInputs() {
    let $form = obtenerForm()
    let nombre = $form.nombre.value
    let provincia = $form.ciudad.value
    let regalo = document.querySelector("#descripcion-regalo").value
    let inputs = [provincia, regalo,nombre]
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

function validarNombre(nombre) {
    if (nombre.length < 1) {
        return "Este campo debe contener al menos 1 caracter"
    }
    else if (nombre.length > 50) {
        return "Este campo debe tener menos de 50 caracteres"
    }
    return ""
}

$botonSubmit = document.querySelector("#enviar-carta")
$botonSubmit.onclick = function () {
    valores = tomarValoresDeInputs()
    validarRegalo(valores[1])
    validarProvincia(valores[0])
    validarNombre(valores[2])

    return false
}
