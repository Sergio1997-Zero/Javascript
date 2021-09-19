function divi(){

    let num1 = parseInt(prompt("Ingrese el numero para validar sus numeros divisibles "))

    for (let i = 1; i<=num1; i++){

        if (num1%i==0){

            console.log(`${num1} es divisible por ${i}`)
        }
    }
}

divi()