var palabra = prompt("Ingrese una palabra")

function mayus(text){
    for(n=0; n<text.length;n++){
        var n = text.charAt(n)
        if(n===n.toUpperCase()){
            window.alert(`La primera letra de la palabra ingresada: ${n} es mayuscula`)
        }
        else{
            window.alert(`La primera letra de la palabra ingresada: ${n} no es mayuscula`)
        }

            
        
    }
}




mayus(palabra)