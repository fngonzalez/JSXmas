/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y 
el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar
     cómo en MDN).
*/
const $botonIngresar = document.querySelector("#aceptar")
$botonIngresar.onclick = function () {
     let elFormTieneAlgo = formConCosas()
     if (elFormTieneAlgo) {
          limpiarPagina()
     }

     let numeroDelGrupoFamiliar = Number(document.querySelector("#numeroDelGrupoFamiliar").value);

     if (numeroDelGrupoFamiliar > 0 && numeroDelGrupoFamiliar != null) {
          mostrarDivFamilia()
     }
     for (i = 1; i <= numeroDelGrupoFamiliar; i++) {
          let formularioFamiliar = document.querySelector('form#formulario-familiar')
          crearForm("Integrante ", i, formularioFamiliar, 'inputFamilia', 'number')
     }
     return false
}


let $botonAceptar = document.querySelector("#calcular")
$botonAceptar.onclick = function () {
     let edadesEnLaFamilia = document.querySelectorAll("#inputFamilia")
     let edadesRelevantes = document.querySelector("div#edades-relevantes")

     let edadesMayorMenorSuma = mMSP(edadesEnLaFamilia)

     edadesRelevantes.innerText = 'La edad promedio de tu familia es de: ' + edadesMayorMenorSuma[3] + " años. " +
          'La persona con menor edad tiene: ' + edadesMayorMenorSuma[1] + " años. " + 'La persona con mayor edad tiene: ' + edadesMayorMenorSuma[0] + " años. "
}

let $limpiar = document.querySelector("#limpiar")
$limpiar.onclick = function () {
     limpiarPagina()

     let edadesRelevantes = document.querySelector("div#edades-relevantes")
     edadesRelevantes.innerText = ''
}








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// Funciones //////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarDivFamilia() { document.querySelector("div#familia").style = "display:block" }
function ocultarDivFamilia() { document.querySelector("div#familia").style = "display:none" }


function crearForm(labelTexto, i, lugar, idInput, inputtype) {
     let formulario = lugar
     let nuevoFormulario = document.createElement("form")
     let nuevoInput = document.createElement("input")
     nuevoInput.id = idInput
     nuevoInput.type = inputtype

     let nuevoLabel = document.createElement("label")
     nuevoLabel.innerText = (labelTexto + i + ': ')

     formulario.appendChild(nuevoFormulario)
     nuevoFormulario.appendChild(nuevoLabel)
     nuevoFormulario.appendChild(nuevoInput)

}


let promediar = function (arrayDeNumeros, numeroParaPromediar) {
     let cantidadDeNumeros = (arrayDeNumeros.length)
     return (numeroParaPromediar / cantidadDeNumeros).toFixed(2)
}

function mMSP(nodelist) {
     let mayor = 0
     let menor = 0
     let sumas = 0

     for (dato of nodelist) {
          let valor = dato.value
          if (mayor < valor) {
               mayor = Number(valor)
          } if (menor > valor || menor == 0) {
               menor = Number(valor)
          }
          sumas += Number(valor)
     }
     let promedio=Number(promediar(nodelist,sumas))
     mayorMenorSuma = [mayor, menor, sumas, promedio]
     return mayorMenorSuma
}


function removerHijos() {
     let formularioFamiliar = document.querySelector("form#formulario-familiar")
     while (formularioFamiliar.firstChild) {
          formularioFamiliar.removeChild(formularioFamiliar.firstChild);
     }
}

function limpiarPagina() {
     removerHijos()
     ocultarDivFamilia()
}

function formConCosas() {
     let form = document.querySelectorAll('#inputFamilia').length
     return (0 != form)
}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de
cada integrante de la familia que trabaje. Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario
anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

