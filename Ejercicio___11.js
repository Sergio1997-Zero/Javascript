
const Carrs = []; 

class types
{
    constructor(mark,model,age)
    {
        this.mark = mark;
        this.model = model;
        this.age = age;
    }
}

function agregate(num1) 
{
    for(let x = 0; x < num1; x++)
    {
        let mark = prompt("Ingrese la marca del carro: ")
        let model = prompt("Ingrese el modelo del carro: ")
        let age = prompt("Ingrese el año del carro: ")
        const carr = new types(mark,model,age); 
        Carrs.push(carr); 

    }

    let carrs = Carrs.forEach(element => console.log(element))
}
    

var num1 = 10

agregate(num1);