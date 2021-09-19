var N = parseInt(prompt("Ingrese el numero N"))


let par = []

function prueba(){

    let suma_numeros = 0;
    for(let i = 0 ;i<=N;i++){

        par.push(i)
        
    }
    for(let chnumber of par){

      suma_numeros = suma_numeros + parseInt(chnumber); 
      
    }

    return suma_numeros
}

prueba()