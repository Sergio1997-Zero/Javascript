var N = parseInt(prompt("Ingrese el numero N"))

let par = []

function prueba(){

    let suma_numeros = 1;
    for(let i = 1 ;i<=N;i++){

        par.push(i)
        
    }
    console.log(par)
    
    for(let chnumber of par){

      suma_numeros = suma_numeros * parseInt(chnumber); 
      
    }

    return suma_numeros
}

prueba()