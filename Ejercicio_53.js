var text = prompt(" Ingrese una lista separada por coma ")

function lista(text){
    
    let variable = text.split(",")

    console.log(variable)

    let list = []
    
    let pri = variable.forEach(element => list.push(element))

    return console.log(`La lista ingresada es [${list}]`)

}

lista(text)