var array = [1,2,3,4,5,6]

function print(array){
    
    let pri = array.forEach(element => console.log(element+ 1))

    return pri
}

print(array)