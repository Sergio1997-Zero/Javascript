function conver(num1){

    var fa = (num1*1.8) +32

    return fa
    
}

var num1 = parseInt(prompt("Ingrese los grados celsius"))

var faaaa = conver(num1)

window.alert(`El resultado de los grados fahrenheit  ${faaaa}`)