
function convertirNodeListAArray(nodeList) {
    let arrayFinal = []
    for (let i = 1; i < nodeList.length; i++) {
        arrayFinal.push(nodeList[i].value)
    }
    return arrayFinal
}

function obtenerForm() {
    return document.querySelector("#carta-a-santa")
}

function obtenerArrayProvincias() {
    let $form = obtenerForm()
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
    probarProvinciaConSeleccionValida()
    probarProvinciaConSeleccionInvalida()
}
probarValidarProvincia()


function probarValidarRegalo() {
    let mensaje1 = "Este es un texto en el que necesariamente tienen que existir 250 caracteres. Esto es para conocer si es que el contador de letras de mi programa (el cual es la septima tarea del curso de programación para principiantes) está funcionando de una manera adecuada"
    let mensaje2 = ""
    let mensaje3 = "Deseo un buen café por las mañanas"
    let retorna1 = "Este campo debe tener menos de 250 caracteres"
    let retorna2 = "Este campo debe contener al menos más de 2 caracteres"
    let retorna3 = ""
    let error1 = "La prueba de validarRegalo, no validó que haya menos de 250 caracteres"
    let error2 = "La prueba de validarRegalo no probó que se hayan escrito más de dos caracteres"
    let error3 = "La prueba de validarRegalo no probó que se haya escrito bien el regalo"

    pruebaValidacion(validarRegalo, mensaje1, retorna1, error1)
    pruebaValidacion(validarRegalo, mensaje2, retorna2, error2)
    pruebaValidacion(validarRegalo, mensaje3, retorna3, error3)

}
probarValidarRegalo()

function probarValidarNombre() {
    let mensaje = ['', 'Ezequiel', 'Este   texto   tiene  mas   de    50    caracteres ']
    let retorna = ['Este campo debe contener al menos más de 2 caracteres', '', 'Este campo debe tener menos de 250 caracteres']
    let error = ["La prueba de validarRegalo no probó que se hayan escrito más de un caracter", "La prueba de validarNombre no probó que se haya escrito bien el nombre", "La prueba de validarNombre no validó que haya menos de 50 caracteres"]
    pruebaValidacion(validarProvincia, mensaje[0], retorna[0], error[0])
    pruebaValidacion(validarProvincia, mensaje[1], retorna[1], error[1])
    pruebaValidacion(validarProvincia, mensaje[2], retorna[2], error[2])
}
