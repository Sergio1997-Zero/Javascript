var array = [1,2,3,4,5,6]

function print(array){
    
    let list = []

    let pri = array.forEach(element => console.log(list.push(element+1)))

    return console.log(`La lista duplicada es [${list}]`)
}

print(array)

