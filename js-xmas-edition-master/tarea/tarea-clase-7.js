/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

$form = document.querySelector("#carta-a-santa")

let provincia = $form.ciudad.value
let regalo = $form["descripcion-regalo"].value


function validarRegalo(regalo) {
    if (regalo.length < 0) {
        return "Este campo debe tener al menos 1 caracter"
    } if (regalo.length > 250) {
        return "Este campo debe tener menos de 250 caracteres"
    }
    return ""
}
