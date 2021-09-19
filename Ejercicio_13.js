var year = prompt("Ingrese el año")


if (year%4 === 0){
    console.log(`El año: ${year} bisiesto.`)
}
else{
    console.log(`El año: ${year} no es bisiesto.`)
}