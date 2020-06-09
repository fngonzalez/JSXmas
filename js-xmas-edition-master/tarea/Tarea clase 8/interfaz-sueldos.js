const $botonAgregarSalario = document.querySelector('#agregar-salario')
let m = 1
$botonAgregarSalario.onclick = function () {
    crearFormSueldo()
    mostrarBotonCalcularSueldos()
}

const $botonCalcularSalario = document.querySelector('#calcular-salario')

$botonCalcularSalario.onclick = function () {
    let salariosEnInput = document.querySelectorAll('#inputSueldo')
    let resultadoSueldos = document.querySelector('#resultado-sueldos')

    let salariosMMSP = mMSP(salariosEnInput)
    let salarioMensualPromedio = (salariosMMSP[3] / 13).toFixed(2)
    resultadoSueldos.innerText = 'el mayor salario anual es de: ' + salariosMMSP[0] + ', menor salario anual: ' + salariosMMSP[1] + ', salario anual promedio: ' + salariosMMSP[3] + ', y salario mensual promedio: ' + salarioMensualPromedio

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// Funciones //////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarBotonCalcularSueldos() {
    let botonSalario = document.querySelector('#calcular-salario')
    botonSalario.style = ''

}


function crearFormSueldo() {
    let formularioSueldo = document.querySelector('form#formulario-sueldos')
    crearForm("Integrante ", m, formularioSueldo, 'inputSueldo', 'number')
    m++
}
