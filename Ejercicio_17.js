var num1 = parseInt(prompt("Ingrese la cantidad de numeros que ingresara"))

var list = []

var impar = []

var par = []

var primos = []

var no_primos = []

for(i=0;i<num1;i++){

    parseInt(list.push(prompt("Ingrese")))

}

for(n=0;n<list.length;n++){
    
    if(list[n] % 2 == 0){
        par.push(list[n])
    }
    
    if (list[n] % 2 != 0){
        impar.push(list[n])
    }
    
    for(j=2;j<list[n];j++){
        if(list[n] % j == 0){
            no_primos.push(list[n])

        }
        else{
            primos.push(list[n])
        }
    }
}

const imparNew = new Set(impar)

let imparesult = [...imparNew]


const parNew = new Set(par)

let paresult = [...parNew]


const No_primosNew = new Set(no_primos)

let No_primosresult = [...No_primosNew]

const primosNew = new Set(primos)

let primosresult = [...primosNew]

console.log(`La lista de numeros ingresada es: [${list.sort(function(a,b){return b - a})}] `)

console.log(`La lista de numeros impares es: [${imparesult.sort(function(a,b){return b - a})}]`)

console.log(`La lista de numeros pares es: [${paresult.sort(function(a,b){return b - a})}]`)

console.log(`La lista de los numeros no primos es [${No_primosresult.sort(function(a,b){return b - a})}]`)

console.log(`La lista de numeros primos es [${primosresult.sort(function(a,b){return b - a})}]`)


for(n=0; n<list.length;n++){
    var k = typeof list[n]
    console.log(`El elemento de la lista: ${list[n]} es un tipo ${k}`)

}

var repetidos = {}

list.forEach(function(numero){
    repetidos[numero] = (repetidos[numero]||0) + 1
})

console.log(`Lista de numero repetidos ${rep}`)
