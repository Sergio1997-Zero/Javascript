var array = [1,2,3,4,5,6]

function print(array){
    
    let sum = array.reduce((previous, current) => current += previous);
    let avg = sum / array.length;

    return console.log(`La suma total de la lista es ${avg} `)
}

print(array)