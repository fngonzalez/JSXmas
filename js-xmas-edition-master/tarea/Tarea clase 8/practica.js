for (edad of edadesEnLaFamilia) {
    let valorEdad=valorEdad
    if (mayorDeEdad < valorEdad) {
         mayorDeEdad = Number(valorEdad)
    } if (menorDeEdad > valorEdad || menorDeEdad == 0) {
         menorDeEdad = Number(valorEdad)
    }
    edadesSumadas += Number(valorEdad)
}