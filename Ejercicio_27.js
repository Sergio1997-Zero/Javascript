function pares(){

    let num1 = parseInt(prompt("Ingrese un numero"))

    
    if(num1>=2){
        if(num1 % 2 == 0){
            return window.alert(`El numero ${num1} es par`)
        }
        else{
            return window.alert(`El numero ${num1} no es par`)
        }
    }else{
        return window.alert(`El numero ${num1} es menor que 2`)
    }
    
}

pares()