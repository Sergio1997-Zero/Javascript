var array = [1,2,3,4,5,6]

function print(array){
    x = 0
    while( x<array.length){

        console.log(`Elemento ${x+1} de la lista es : ${array[x]} `)
        x++
    }
}

print(array)