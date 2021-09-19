function NumPerfect(num1) {
   
    let acum = 0;

    var num1 = prompt("Ingrese un numero")

    for(let i = 1; i <= num1 / 2; ++i) {
        if (num1 % i == 0) {
            console.log(i)
            acum += i;
        }
    }

    if (acum != 0 && acum == num1){

        return console.log(`El numero ingresado es un numero perfecto.`)

    }

    else{

        return console.log(`El numero ingresado no es numero perfecto.`)
        
    }
    
}

NumPerfect()
