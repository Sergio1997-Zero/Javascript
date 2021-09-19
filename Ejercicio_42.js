function vali(num1){

    if(/^([0-9])*$/.test(num1)){

        console.log("Es un numero")

    }

    else{

        console.log("No es una letra")

    }
    
}

var num1 = parseInt(prompt("ingrese un numero"))

vali(num1)