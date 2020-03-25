
function convertirNodeListAArray(nodeList) {
    let arrayFinal = []
    for (let i = 1; i < nodeList.length; i++) {
        arrayFinal.push(nodeList[i].value)
    }
    return arrayFinal
}

function obtenerFormulario() {
    return document.querySelector("#carta-a-santa")
}

function obtenerArrayProvincias() {
    let $form = obtenerFormulario()
    let provinciasEnForm = $form.ciudad.options
    let arrayDeProvincias = convertirNodeListAArray(provinciasEnForm)
    return arrayDeProvincias
}

function pruebaValidacion(funcion, parametro, returnDeLaFuncion, mensajeDeError) {
    console.assert(funcion(parametro) === returnDeLaFuncion, mensajeDeError)
}

function probarProvinciaConSeleccionValida() {
    let arrayDeProvincias = obtenerArrayProvincias()
    let returnValidarProvincia = ""
    let mensajeDeError = "No se esta validando que la opcion sea igual al texto"
    for (let i = 1; i < arrayDeProvincias.length; i++) {
        pruebaValidacion(validarProvincia, arrayDeProvincias[i], returnValidarProvincia, mensajeDeError)
    }
}

function probarProvinciaConSeleccionInvalida() {
    let provinciaInvalida = 'Oklahoma'
    let returnValidarProvincia = 'La provincia seleccionada no es perteneciente a ningún valor'
    let mensajeDeError = "La prov no coincide con la validación"

    pruebaValidacion(validarProvincia, provinciaInvalida, returnValidarProvincia, mensajeDeError)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

tomarValoresDeInputs()

function probarValidarProvincia() {
    probarProvinciaConSeleccionInvalida()
    probarProvinciaConSeleccionValida()
}
probarValidarProvincia()


function probarValidarRegalo() {
    let mensaje = ["Este es un texto en el que necesariamente tienen que existir 250 caracteres. Esto es para conocer si es que el contador de letras de mi programa (el cual es la septima tarea del curso de programación para principiantes) está funcionando de una manera adecuada", '', '.,,.,;', "Chocolate en rama"]
    let retorna = ["Este campo debe tener menos de 250 caracteres", "Este campo debe contener al menos más de 2 caracteres, y todos deben ser alfanumericos", ""]
    let error = ["La prueba de validarRegalo, no validó que haya menos de 250 caracteres", "La prueba de validarRegalo no probó que se hayan escrito más de dos caracteres", "La prueba de validarRegalo no probó que se haya escrito bien el regalo"]
    
    pruebaValidacion(validarRegalo, mensaje[0], retorna[0], error[0])
    pruebaValidacion(validarRegalo, mensaje[1], retorna[1], error[1])
    pruebaValidacion(validarRegalo, mensaje[2], retorna[1], error[1])
    pruebaValidacion(validarRegalo, mensaje[3], retorna[2], error[2])
}
probarValidarRegalo()

function probarValidarNombre() {
    let mensaje = ['','123', 'Ezequiel', 'Este   texto   tiene  mas   de    50    caracteres ']
    let retorna = ['Este campo debe contener al menos 1 caracter, y todos deben ser alfabeticos', '', 'Este campo debe tener menos de 50 caracteres']
    let error = ["La prueba de validarNombre no probó que se hayan escrito más de un caracter", "La prueba de validarNombre no probó que se haya escrito bien el nombre", "La prueba de validarNombre no validó que haya menos de 50 caracteres"]

    pruebaValidacion(validarNombre, mensaje[0], retorna[0], error[0])
    pruebaValidacion(validarNombre, mensaje[1], retorna[0], error[0])
    pruebaValidacion(validarNombre, mensaje[3], retorna[2], error[2])
    pruebaValidacion(validarNombre, mensaje[2], retorna[1], error[1])

}

probarValidarNombre()