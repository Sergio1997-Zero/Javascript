var N = parseInt(prompt("Ingrese el numero N"))

var M = parseInt(prompt("Ingrese el numero M"))

let par = []

function prueba(){

    let suma_numeros = 0;
    for(N;N<=M;N++){

        if(N % 2 == 0){
            par.push(N)
        }

    }
    for(let chnumber of par){

      suma_numeros = suma_numeros + parseInt(chnumber); 
      
    }

    return suma_numeros
}

prueba()