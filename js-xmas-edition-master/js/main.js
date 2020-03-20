function tomarValoresDeInputs() {
    let direcciones = obtenerDirecciones()
    let nombre = direcciones[0].value
    let provincia = direcciones[1].value
    let regalo = direcciones[2].value
    let inputs = [provincia, regalo, nombre]
    return inputs
}

function obtenerDirecciones() {
    //no se muy bien como llamar a esta funcion, entiendo que seria una especie de "link"
    let $form = obtenerFormulario()
    let direccionNombre = $form.nombre
    let direccionProvincia = $form.ciudad
    let direccionRegalo = $form['descripcion-regalo']
    let direcciones = [direccionNombre, direccionProvincia, direccionRegalo]
    return direcciones
}

let mostrarError = function (formulario) {
    formulario.className = 'error'
}
let mostrarNormal = function (formulario) {
    formulario.className = ''
}

let returnValidarNombre = ["Este campo debe contener al menos 1 caracter", '', "Este campo debe tener menos de 50 caracteres"]

let returnValidarProvincia = ['', 'La provincia seleccionada no es perteneciente a ningún valor']

let returnValidarRegalo = ["Este campo debe contener al menos más de 2 caracteres", '', "Este campo debe tener menos de 250 caracteres"]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function validarNombre(nombre) {
    let formularioNombre = obtenerFormulario()
    if (nombre.length > 50) {
        mostrarError(formularioNombre[0])
        return returnValidarNombre[2]
    }
    else if (nombre.length < 1) {
        mostrarError(formularioNombre[0])
        return returnValidarNombre[0]
    }
    else {
        mostrarNormal(formularioNombre[0])
        return returnValidarNombre[1]
    }
}

function validarProvincia(provincia) {
    let formularioProvincia = obtenerFormulario()
    let arrayDeProvincias = obtenerArrayProvincias()

    if (arrayDeProvincias.includes(provincia)) {
        mostrarNormal(formularioProvincia[1])
        return returnValidarProvincia[0]
    }
    else {
        mostrarError(formularioProvincia[1])
        return returnValidarProvincia[1]
    }
}

function validarRegalo(regalo) {
    let formularioRegalo = obtenerDirecciones()

    if (regalo.length > 250) {
        mostrarError(formularioRegalo[2])
        return returnValidarRegalo[2]
    }
    else if (regalo.length < 2) {
        mostrarError(formularioRegalo[2])
        return returnValidarRegalo[0]
    }
    mostrarNormal(formularioRegalo[2])
    return returnValidarRegalo[1]
}


$botonSubmit = document.querySelector("#enviar-carta")
$botonSubmit.onclick = function () {
    valores = tomarValoresDeInputs()
    validarProvincia(valores[0])
    validarRegalo(valores[1])
    validarNombre(valores[2])
    return false
}
