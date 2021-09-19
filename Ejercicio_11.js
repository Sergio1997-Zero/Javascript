var Ang1 = parseInt(prompt("Ingrese el primero angulo del triángulo"))

var Ang2 = parseInt(prompt("Ingrese el segundo angulo del triángulo"))

var Ang3 = parseInt(prompt("Ingrese el tercer angulo del triángulo"))

if(Ang1+Ang2+Ang3 === 180){
    window.alert(`Si corresponde a un triángulo`)

}
else{
    window.alert(`No corresponde a un triángulo`)
}
