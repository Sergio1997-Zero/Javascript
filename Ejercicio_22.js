function eje22(){
  let respuesta;
  let numero = prompt("ingresa el numero");
  if(/^([0-9])*$/.test(numero)){
    let suma_numeros = 0;
    //for(let i=0; i<numero.length; i++){
    //  suma_numeros = suma_numeros + parseInt(numero.charAt(i));   
    //}
    for(let char_number of numero){
      suma_numeros = suma_numeros + parseInt(char_number);   
    }
    respuesta = `la sumatoria de todos los digitos es: ${suma_numeros}`;
  }else{
    respuesta = "por favor ingresa un numero validado no se aceptan caracteres"
  }
  return respuesta;
}

eje22()
