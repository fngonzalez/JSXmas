function manejarErrores() {
    let tomarValores = tomarValoresDeInputs()
    let nombre = tomarValores[2]
    let provincia = tomarValores[0]
    let regalo = tomarValores[1]
    // let validacionNombre = 
    // let ValidacionProvincia = 
    // let validacionRegalo = validarRegalo(regalo)
    let formularios = obtenerDirecciones()
    let errores=0

    if (validarNombre(nombre)) {
        mostrarError(formularios[0])
        errores++
    } if (validarProvincia(provincia)) {
        mostrarError(formularios[1])
        errores++
    } if (validarRegalo(regalo)) {
        mostrarError(formularios[2])
        errores++
    }
    console.log(errores)
}

$botonSubmit = document.querySelector("#enviar-carta")
$botonSubmit.onclick = function () {
    manejarErrores()
    return false
}








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function tomarValoresDeInputs() {
    let direcciones = obtenerDirecciones()
    let nombre = direcciones[0].value
    let provincia = direcciones[1].value
    let regalo = direcciones[2].value
    let inputs = [provincia, regalo, nombre]
    return inputs
}


function obtenerDirecciones() {
    //no se muy bien como llamar a esta funcion, entiendo que serian una especie de "links"
    let $form = obtenerFormulario()
    let direccionNombre = $form.nombre
    let direccionProvincia = $form.ciudad
    let direccionRegalo = $form['descripcion-regalo']
    let direcciones = [direccionNombre, direccionProvincia, direccionRegalo]
    return direcciones
}

function validarNombre(nombre) {
    let formularioNombre = obtenerFormulario()
    if (nombre.length > 50) {
        return returnValidarNombre.demasiados
    }
    else if (nombre.length < 1) {
        return returnValidarNombre.vacio
    }
    else {
        if (esAlfabetico(nombre)) {
            mostrarNormal(formularioNombre[0])
            return returnValidarNombre.bien
        }
        mostrarError(formularioNombre[0])
        return returnValidarNombre.vacio
    }
}

function validarProvincia(provincia) {
    let formularioProvincia = obtenerFormulario()
    let arrayDeProvincias = obtenerArrayProvincias()

    if (arrayDeProvincias.includes(provincia)) {
        mostrarNormal(formularioProvincia[1])
        return returnValidarProvincia.bien
    }
    else {
        mostrarError(formularioProvincia[1])
        return returnValidarProvincia.mal
    }
}

function validarRegalo(regalo) {
    let formularioRegalo = obtenerDirecciones()

    if (regalo.length > 250) {
        return returnValidarRegalo.demasiados
    }
    else if (regalo.length < 2) {
        return returnValidarRegalo.vacio
    }
    else {
        if (!esAlfanumerico(regalo)) {
            return returnValidarRegalo.vacio
        }
        mostrarNormal(formularioRegalo[2])
        return returnValidarRegalo.bien

    }
}

let mostrarError = function (formulario) {
    formulario.className = 'error'
}
let mostrarNormal = function (formulario) {
    formulario.className = ''
}

let returnValidarNombre = {
    vacio: "Este campo debe contener al menos 1 caracter, y todos deben ser alfabeticos",
    bien: '',
    demasiados: "Este campo debe tener menos de 50 caracteres"
}
let returnValidarProvincia = {
    bien: '',
    mal: 'La provincia seleccionada no es perteneciente a ningún valor'
}
let returnValidarRegalo = {
    vacio: "Este campo debe contener al menos más de 2 caracteres, y todos deben ser alfanumericos",
    bien: '',
    demasiados: "Este campo debe tener menos de 250 caracteres"
}


function esAlfabetico(string) {
    return /^[A-Z]+$/i.test(string)
}


function esAlfanumerico(string) {
    return /^[A-Z0-9,\. ]+$/i.test(string)
}

