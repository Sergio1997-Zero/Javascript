function ramdom(num1){
    let list= []
    for(var x = 0; x <=num1;x++){
        list.push(parseInt(Math.random()*(1100-0)))
    }
    return console.log(`La lista contiene [${list}]`)

}


var num1 = prompt("Ingrese un numero")

ramdom(num1)