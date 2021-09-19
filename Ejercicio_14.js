var aleatorio = parseInt(Math.random()*(11-0))

var adivina = parseInt(prompt("Sera suerte o no ?"))

if(aleatorio === adivina){
    window.alert(`Felicidades tienes suerte acertaste al numero`)
}
else{
    window.alert(`Lo sentimos no es tu dia de suerte`)
}